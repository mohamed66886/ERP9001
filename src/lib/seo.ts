// SEO Configuration for ERP90

// Type definitions
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  openGraph: {
    url: string;
    type: string;
    locale: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
}

export const seoConfig = {
  // Primary SEO
  defaultTitle: "ERP90 | نظام إدارة الموارد المؤسسية الأكثر تطوراً في السعودية والخليج 2025",
  titleTemplate: "%s | ERP90",
  defaultDescription: "نظام ERP90 المتكامل والأكثر تطوراً لإدارة الشركات في السعودية والخليج العربي. حلول ذكية لإدارة المبيعات، المشتريات، المخزون، المحاسبة، الموارد البشرية والرواتب. ابدأ تجربة مجانية 14 يوم",
  
  // Site info - Dynamic based on environment
  siteUrl: typeof window !== 'undefined' 
    ? window.location.origin 
    : import.meta.env.VITE_VERCEL_URL 
      ? `https://${import.meta.env.VITE_VERCEL_URL}` 
      : "https://erp90.cloud",
  siteName: "ERP90",
  
  // Language and region
  defaultLanguage: "ar",
  defaultCountry: "SA",
  
  // Social media
  social: {
    twitter: "@erp90_official",
    facebook: "https://www.facebook.com/profile.php?id=61576703222517",
    linkedin: "https://www.linkedin.com/in/mohamed-abdou-rashad-898348335/",
    instagram: "https://www.instagram.com/m7md_rsh3d"
  },
  
  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "ERP90",
    images: [
      {
        url: "https://erp90.cloud/og-image.png",
        width: 1200,
        height: 630,
        alt: "ERP90 - نظام إدارة الموارد المؤسسية"
      }
    ]
  },
  
  // Twitter Card defaults
  twitter: {
    handle: "@erp90_official",
    site: "@erp90_official",
    cardType: "summary_large_image"
  },
  
  // JSON-LD Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ERP90",
    url: "https://erp90.cloud",
    logo: "https://erp90.cloud/logo.png",
    description: "شركة رائدة في تطوير أنظمة إدارة الموارد المؤسسية في المملكة العربية السعودية والخليج العربي",
    address: {
      "@type": "PostalAddress",
      streetAddress: "طريق الملك فهد",
      addressLocality: "الرياض",
      addressRegion: "الرياض",
      postalCode: "12345",
      addressCountry: "SA"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966-11-123-4567",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"]
    },
    sameAs: [
      "https://twitter.com/erp90_official",
      "https://linkedin.com/company/erp90",
      "https://facebook.com/erp90official"
    ]
  },
  
  // Keywords for different pages
  keywords: {
    homepage: [
      "نظام ERP",
      "إدارة الموارد المؤسسية", 
      "نظام محاسبة",
      "إدارة المبيعات",
      "إدارة المخزون",
      "برنامج محاسبة سعودي",
      "نظام ERP السعودية",
      "إدارة الشركات",
      "نظام إدارة متكامل",
      "ERP90",
      "برنامج إدارة الأعمال",
      "حلول الأعمال الذكية",
      "إدارة الموارد البشرية",
      "نظام الرواتب",
      "إدارة العملاء",
      "تقارير مالية",
      "إدارة المشاريع"
    ],
    services: [
      "خدمات ERP",
      "حلول إدارة الأعمال",
      "نظام محاسبة متكامل",
      "إدارة المبيعات والمشتريات",
      "نظام إدارة المخزون",
      "حلول الموارد البشرية",
      "نظام CRM",
      "التقارير والتحليلات"
    ],
    pricing: [
      "أسعار ERP90",
      "باقات نظام ERP",
      "تكلفة نظام إدارة الأعمال",
      "اشتراك ERP",
      "عروض أنظمة الإدارة"
    ]
  },
  
  // Structured data templates
  structuredData: {
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ERP90",
      description: "نظام إدارة الموارد المؤسسية المتكامل والأكثر تطوراً في السعودية والخليج العربي",
      url: "https://erp90.cloud",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "SAR", 
        description: "تجربة مجانية 14 يوم"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1250"
      }
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ERP90",
      url: "https://erp90.cloud",
      description: "نظام إدارة الموارد المؤسسية الأكثر تطوراً في السعودية والخليج",
      inLanguage: "ar-SA",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://erp90.cloud/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  }
};

// Helper function to generate page-specific SEO data
export const generatePageSEO = (page: string, customData?: Partial<SEOData>) => {
  const baseData = {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: seoConfig.keywords.homepage,
    canonical: `${seoConfig.siteUrl}/${page === 'home' ? '' : page}`,
    openGraph: {
      ...seoConfig.openGraph,
      url: `${seoConfig.siteUrl}/${page === 'home' ? '' : page}`
    }
  };
  
  // Page-specific overrides
  const pageConfigs = {
    home: {
      title: seoConfig.defaultTitle,
      description: seoConfig.defaultDescription,
      keywords: seoConfig.keywords.homepage
    },
    services: {
      title: "خدمات ERP90 المتكاملة | حلول إدارة الأعمال الذكية",
      description: "اكتشف مجموعة واسعة من خدمات ERP90 المتكاملة: إدارة المبيعات والمشتريات، المحاسبة، المخزون، الموارد البشرية، CRM وأكثر. حلول ذكية لجميع احتياجات شركتك",
      keywords: seoConfig.keywords.services
    },
    pricing: {
      title: "أسعار ERP90 | باقات وعروض خاصة لأنظمة إدارة الأعمال",
      description: "اطلع على أسعار وباقات ERP90 المرنة. خطط مناسبة لجميع أحجام الشركات مع تجربة مجانية 14 يوم. ابدأ رحلتك الرقمية اليوم",
      keywords: seoConfig.keywords.pricing
    },
    contact: {
      title: "تواصل معنا | فريق دعم ERP90 المختص",
      description: "تواصل مع فريق خبراء ERP90 للحصول على استشارة مجانية. نحن هنا لمساعدتك في اختيار الحل المناسب لشركتك. اتصل بنا الآن",
      keywords: ["تواصل ERP90", "دعم فني", "استشارة مجانية", "فريق دعم"]
    }
  };
  
  const pageConfig = pageConfigs[page as keyof typeof pageConfigs];
  
  return {
    ...baseData,
    ...pageConfig,
    ...customData
  };
};

export default seoConfig;
