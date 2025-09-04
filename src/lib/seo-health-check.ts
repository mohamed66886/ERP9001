// SEO Health Check Utility
// Use this to validate SEO implementation

export const seoHealthCheck = () => {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check basic meta tags
  const title = document.title;
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');

  // Title validation
  if (!title) {
    issues.push('Missing page title');
  } else if (title.length < 30) {
    recommendations.push('Title is too short (less than 30 characters)');
  } else if (title.length > 60) {
    recommendations.push('Title is too long (more than 60 characters)');
  }

  // Description validation
  if (!description) {
    issues.push('Missing meta description');
  } else if (description.length < 120) {
    recommendations.push('Meta description is too short (less than 120 characters)');
  } else if (description.length > 160) {
    recommendations.push('Meta description is too long (more than 160 characters)');
  }

  // Keywords validation
  if (!keywords) {
    recommendations.push('Consider adding meta keywords');
  }

  // Canonical validation
  if (!canonical) {
    issues.push('Missing canonical URL');
  }

  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
  const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
  const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');

  if (!ogTitle) issues.push('Missing Open Graph title');
  if (!ogDescription) issues.push('Missing Open Graph description');
  if (!ogImage) issues.push('Missing Open Graph image');
  if (!ogUrl) issues.push('Missing Open Graph URL');

  // Check Twitter Card tags
  const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content');
  const twitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content');

  if (!twitterCard) issues.push('Missing Twitter Card type');
  if (!twitterTitle) issues.push('Missing Twitter title');
  if (!twitterDescription) issues.push('Missing Twitter description');
  if (!twitterImage) issues.push('Missing Twitter image');

  // Check structured data
  const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
  if (structuredDataScripts.length === 0) {
    issues.push('No structured data found');
  }

  // Check heading structure
  const h1Elements = document.querySelectorAll('h1');
  if (h1Elements.length === 0) {
    issues.push('No H1 heading found');
  } else if (h1Elements.length > 1) {
    recommendations.push('Multiple H1 headings found - consider using only one');
  }

  // Check images alt text
  const images = document.querySelectorAll('img');
  let imagesWithoutAlt = 0;
  images.forEach(img => {
    if (!img.getAttribute('alt')) {
      imagesWithoutAlt++;
    }
  });
  
  if (imagesWithoutAlt > 0) {
    recommendations.push(`${imagesWithoutAlt} images without alt text`);
  }

  // Check internal links
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
  if (internalLinks.length < 3) {
    recommendations.push('Consider adding more internal links for better SEO');
  }

  // Performance checks
  const largeImages = Array.from(images).filter(img => {
    const src = img.src;
    return src && !src.includes('.webp') && !src.includes('.avif');
  });
  
  if (largeImages.length > 0) {
    recommendations.push('Consider using modern image formats (WebP, AVIF) for better performance');
  }

  // Check manifest
  const manifest = document.querySelector('link[rel="manifest"]');
  if (!manifest) {
    recommendations.push('Consider adding a web manifest for PWA capabilities');
  }

  // Check robots meta
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content');
  if (!robots) {
    recommendations.push('Consider adding robots meta tag');
  }

  return {
    score: Math.max(0, 100 - (issues.length * 10) - (recommendations.length * 5)),
    issues,
    recommendations,
    summary: {
      title: {
        present: !!title,
        length: title?.length || 0,
        content: title
      },
      description: {
        present: !!description,
        length: description?.length || 0,
        content: description
      },
      openGraph: {
        complete: !!(ogTitle && ogDescription && ogImage && ogUrl)
      },
      twitterCard: {
        complete: !!(twitterCard && twitterTitle && twitterDescription && twitterImage)
      },
      structuredData: {
        present: structuredDataScripts.length > 0,
        count: structuredDataScripts.length
      },
      headings: {
        h1Count: h1Elements.length
      },
      images: {
        total: images.length,
        withoutAlt: imagesWithoutAlt
      }
    }
  };
};

// Usage: Run this in browser console to check SEO health
// console.log(seoHealthCheck());

export default seoHealthCheck;
