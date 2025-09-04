import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { 
        event, 
        page, 
        action, 
        properties = {} 
      } = req.body;

      // Track analytics event
      const analyticsData = {
        event,
        page,
        action,
        properties: {
          ...properties,
          timestamp: new Date().toISOString(),
          userAgent: req.headers['user-agent'],
          ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
          referer: req.headers['referer'] || 'direct'
        }
      };

      console.log('Analytics event:', analyticsData);

      // Here you would send to your analytics service
      // Examples: Google Analytics, Mixpanel, Amplitude, etc.

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Analytics error:', error);
      res.status(500).json({ error: 'Analytics tracking failed' });
    }
  } else if (req.method === 'GET') {
    // Return site statistics (demo data)
    const stats = {
      totalUsers: 12500,
      activeCompanies: 850,
      countriesServed: 15,
      supportTicketsResolved: 5420,
      systemUptime: '99.9%',
      averageResponseTime: '< 2 hours',
      lastUpdated: new Date().toISOString()
    };

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json(stats);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
