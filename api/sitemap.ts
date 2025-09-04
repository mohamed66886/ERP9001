import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl = 'https://erp90.cloud';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: 'services', changefreq: 'weekly', priority: '0.9' },
    { url: 'pricing', changefreq: 'weekly', priority: '0.9' },
    { url: 'contact', changefreq: 'monthly', priority: '0.8' },
    { url: 'docs', changefreq: 'weekly', priority: '0.8' },
    { url: 'faq', changefreq: 'monthly', priority: '0.7' },
    { url: 'free-signup', changefreq: 'monthly', priority: '0.8' },
    { url: 'payment', changefreq: 'monthly', priority: '0.6' },
  ];

  const services = [
    'accounting', 'inventory', 'sales', 'hr', 'crm', 'reporting'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url === '' ? `
    <image:image>
      <image:loc>${baseUrl}/hero.png</image:loc>
      <image:title>ERP90 - نظام إدارة الموارد المؤسسية</image:title>
      <image:caption>أفضل نظام إدارة موارد مؤسسية في السعودية والخليج</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
  ${services.map(service => `
  <url>
    <loc>${baseUrl}/service/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(sitemap);
}
