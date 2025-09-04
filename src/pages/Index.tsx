import Hero from "@/components/Hero";
import BusinessApplications from "@/components/ApplicationsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import Info from "@/components/info";
import Dutycycle from "@/components/Dutycycle";
import Erp90Section from "@/components/erp90";
import Pricing from "@/components/Pricing";
import WHY from "@/components/WHY";
import SEO from "@/components/SEO";
import { seoConfig } from "@/lib/seo";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ERP90 - الصفحة الرئيسية",
    description: "نظام إدارة الموارد المؤسسية الأكثر تطوراً في السعودية والخليج العربي",
    url: "https://erp90.cloud",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "ERP90",
      description: "نظام إدارة الموارد المؤسسية المتكامل",
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
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://erp90.cloud"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        page="home"
        structuredData={structuredData}
        canonical="https://erp90.cloud"
      />
      <Hero />
      <BusinessApplications />
      <FeaturesGrid />
      <IndustriesSection />
      <Info />
      <Dutycycle />
      <Pricing />
      <Erp90Section />
      <WHY />
    </div>
  );
};

export default Index;
