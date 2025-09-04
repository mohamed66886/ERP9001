import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl = 'https://erp90.cloud';
  
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*
Disallow: /search?
Disallow: /login
Disallow: /register

# Allow important files
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /favicon.ico
Allow: /robots.txt

# Crawl delay
Crawl-delay: 1

# Specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.status(200).send(robots);
}
