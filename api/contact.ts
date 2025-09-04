import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      subject, 
      message,
      formType = 'contact' 
    } = req.body;

    // Basic validation
    if (!firstName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['firstName', 'email', 'message']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Log the form submission (in production, send to your preferred service)
    console.log('Form submission:', {
      formType,
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown'
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    // 4. Send to analytics service

    // For now, we'll simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Success response
    res.status(200).json({
      success: true,
      message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
      submissionId: `ERP90-${Date.now()}`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      error: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      code: 'SUBMISSION_ERROR'
    });
  }
}
