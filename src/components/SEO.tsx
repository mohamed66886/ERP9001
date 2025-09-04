import { useEffect } from 'react';
import { seoConfig, generatePageSEO } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
  page?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  noindex = false,
  canonical,
  structuredData,
  page = 'home'
}) => {
  useEffect(() => {
    const pageData = generatePageSEO(page, {
      title,
      description,
      keywords,
      canonical
    });

    const seoTitle = title || pageData.title || seoConfig.defaultTitle;
    const seoDescription = description || pageData.description || seoConfig.defaultDescription;
    const seoKeywords = keywords.length > 0 ? keywords : (pageData.keywords || seoConfig.keywords.homepage);
    const seoCanonical = canonical || pageData.canonical;
    const seoImage = image || seoConfig.openGraph.images[0].url;
    const seoUrl = url || pageData.canonical;

    // Update document title - ensure it's not undefined
    if (seoTitle && seoTitle !== 'undefined') {
      document.title = seoTitle;
    }

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      if (!content || content === 'undefined') return;
      
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Update or create link tags
    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      
      link.href = href;
    };

    // Update basic meta tags
    updateMeta('description', seoDescription);
    updateMeta('keywords', seoKeywords.join(', '));
    updateMeta('author', 'ERP90 - شركة التقنيات المتقدمة للحلول البرمجية');
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('language', 'Arabic');
    updateMeta('geo.region', 'SA');
    updateMeta('geo.country', 'Saudi Arabia');
    updateMeta('geo.placename', 'Riyadh');

    // Update Open Graph meta tags
    updateMeta('og:type', type, true);
    updateMeta('og:title', seoTitle, true);
    updateMeta('og:description', seoDescription, true);
    updateMeta('og:image', seoImage, true);
    updateMeta('og:url', seoUrl, true);
    updateMeta('og:site_name', seoConfig.siteName, true);
    updateMeta('og:locale', 'ar_SA', true);

    // Update Twitter Card meta tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', seoTitle);
    updateMeta('twitter:description', seoDescription);
    updateMeta('twitter:image', seoImage);
    updateMeta('twitter:site', seoConfig.social.twitter);
    updateMeta('twitter:creator', seoConfig.social.twitter);

    // Update canonical link
    updateLink('canonical', seoCanonical);

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo="custom"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'custom');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add default schemas if not exist
    if (!document.querySelector('script[data-seo="organization"]')) {
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.setAttribute('data-seo', 'organization');
      orgScript.textContent = JSON.stringify(seoConfig.organization);
      document.head.appendChild(orgScript);
    }

    if (!document.querySelector('script[data-seo="website"]')) {
      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.setAttribute('data-seo', 'website');
      websiteScript.textContent = JSON.stringify(seoConfig.structuredData.website);
      document.head.appendChild(websiteScript);
    }

  }, [title, description, keywords, image, url, type, noindex, canonical, structuredData, page]);

  return null;
};

export default SEO;
