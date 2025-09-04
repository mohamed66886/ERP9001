import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { 
  ShoppingCart, 
  Package, 
  Users, 
  Calculator, 
  FileText, 
  BarChart3,
  CreditCard,
  Settings,
  Building,
  Truck,
  Phone,
  Globe,
  ArrowLeft,
  CheckCircle,
  Star,
  Target,
  Zap,
  Shield,
  HeadphonesIcon,
  FolderKanban,
  Factory,
  HardDrive,
  FileSignature,
  Loader
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ctaLoading, setCtaLoading] = useState<string | null>(null);

const services = [
  // المبيعات
  {
    id: "sales",
    icon: ShoppingCart,
    title: "إدارة المبيعات",
    description: "نظام شامل لإدارة المبيعات والعملاء مع تتبع الأداء والتحليلات المتقدمة",
    features: ["إدارة العملاء", "تتبع المبيعات", "التقارير المفصلة", "إدارة الفرق", "إدارة العروض", "تحليل الربحية"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    category: "operations",
    popular: true
  },

  // المخزون
  {
    id: "inventory",
    icon: Package,
    title: "إدارة المخزون",
    description: "تتبع دقيق للمخزون مع إنذارات النفاد وإدارة المستودعات المتعددة",
    features: ["تتبع المخزون", "إنذارات النفاد", "إدارة المستودعات", "التقييم التلقائي", "إدارة المشتريات", "مراقبة الجودة"],
    color: "text-green-600",
    bgColor: "bg-green-50",
    category: "operations",
    popular: false
  },

  // النظام المحاسبي
  {
    id: "accounting",
    icon: Calculator,
    title: "النظام المحاسبي",
    description: "نظام محاسبي متكامل يدعم معايير المحاسبة السعودية والدولية",
    features: ["دليل الحسابات", "القيود المحاسبية", "الميزانية العمومية", "التقارير المالية", "إدارة الفواتير", "المصروفات"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    category: "finance",
    popular: true
  },

  // CRM
  {
    id: "crm",
    icon: Users,
    title: "إدارة علاقات العملاء",
    description: "نظام CRM شامل لإدارة العملاء وتحسين التفاعل معهم",
    features: ["قاعدة بيانات العملاء", "تتبع التفاعلات", "إدارة الفرص", "التسويق المباشر", "إدارة الشكاوى", "تحليل رضا العملاء"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    category: "marketing",
    popular: false
  },

  // التقارير
  {
    id: "reports",
    icon: FileText,
    title: "التقارير والتحليلات",
    description: "تقارير تفصيلية وتحليلات ذكية لاتخاذ قرارات مدروسة",
    features: ["التقارير المالية", "تحليل الأداء", "التوقعات", "لوحات المتابعة", "تقارير مخصصة", "تصدير البيانات"],
    color: "text-red-600",
    bgColor: "bg-red-50",
    category: "analytics",
    popular: true
  },

  // التحليلات المتقدمة
  {
    id: "analytics",
    icon: BarChart3,
    title: "التحليلات المتقدمة",
    description: "رؤى ذكية وتحليلات متقدمة لنمو أعمالك",
    features: ["التحليل التنبؤي", "الذكاء الاصطناعي", "تحليل السوق", "التوصيات الذكية", "نمذجة البيانات", "تحليل الاتجاهات"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    category: "analytics",
    popular: false
  },

  // الموارد البشرية
  {
    id: "hr",
    icon: Users,
    title: "إدارة الموارد البشرية",
    description: "نظام متكامل لإدارة شؤون الموظفين والحضور والرواتب",
    features: ["إدارة الموظفين", "الحضور والانصراف", "إدارة الرواتب", "التقييم الوظيفي", "الإجازات", "التدريب والتطوير"],
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    category: "operations",
    popular: false
  },

  // المشتريات
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "إدارة المشتريات",
    description: "إدارة كاملة لدورة المشتريات من الطلبات حتى الاستلام",
    features: ["طلبات الشراء", "إدارة الموردين", "المقارنات السعرية", "المستودعات", "مراقبة الجودة", "المخازن"],
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    category: "operations",
    popular: false
  },

  // الدعم الفني
  {
    id: "support",
    icon: HeadphonesIcon,
    title: "نظام الدعم الفني",
    description: "إدارة طلبات الدعم ومتابعة البلاغات وحل المشكلات",
    features: ["تذاكر الدعم", "متابعة البلاغات", "إدارة الأولويات", "تقارير الأداء", "قاعدة المعرفة", "الدعم عن بعد"],
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    category: "support",
    popular: false
  },

  // المشاريع
  {
    id: "projects",
    icon: FolderKanban,
    title: "إدارة المشاريع",
    description: "إدارة متكاملة لدورات حياة المشاريع ومتابعة المهام",
    features: ["المهام", "الجداول الزمنية", "التكاليف", "الموارد", "لوحات كانبان", "التقارير"],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    category: "operations",
    popular: false
  },

  // الإنتاج والتصنيع
  {
    id: "manufacturing",
    icon: Factory,
    title: "إدارة التصنيع",
    description: "تخطيط وجدولة الإنتاج ومتابعة خطوط التصنيع",
    features: ["أوامر العمل", "تخطيط الإنتاج", "إدارة الموارد", "جداول الصيانة", "التكاليف", "مراقبة الجودة"],
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    category: "operations",
    popular: false
  },

  // الأصول
  {
    id: "assets",
    icon: HardDrive,
    title: "إدارة الأصول",
    description: "نظام لإدارة الأصول الثابتة وتتبع دورة حياتها",
    features: ["تسجيل الأصول", "الإهلاكات", "تتبع المواقع", "الصيانة", "التقارير", "إدارة التأمين"],
    color: "text-lime-600",
    bgColor: "bg-lime-50",
    category: "finance",
    popular: false
  },

  // العقود
  {
    id: "contracts",
    icon: FileSignature,
    title: "إدارة العقود",
    description: "إدارة كاملة للعقود مع العملاء والموردين",
    features: ["العقود الدورية", "الإشعارات", "الفواتير المرتبطة", "المرفقات", "صلاحيات الوصول", "التقارير"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    category: "operations",
    popular: false
  }
];

const categories = [
  { id: "all", name: "جميع الخدمات" },
  { id: "operations", name: "العمليات" },
  { id: "finance", name: "المالية" },
  { id: "marketing", name: "التسويق" },
  { id: "analytics", name: "التحليلات" },
  { id: "support", name: "الدعم" }
];


  const stats = [
    { value: "500+", label: "عميل راضي" },
    { value: "98%", label: "معدل رضا العملاء" },
    { value: "24/7", label: "دعم فني" },
    { value: "15+", label: "عام خبرة" }
  ];

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "خدمات ERP90 المتكاملة",
    description: "اكتشف مجموعة واسعة من خدمات ERP90 المتكاملة لإدارة جميع جوانب أعمالك",
    url: "https://erp90.cloud/services",
    mainEntity: {
      "@type": "ItemList",
      name: "خدمات ERP90",
      description: "قائمة بجميع خدمات نظام ERP90",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: "ERP90"
          }
        }
      }))
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://erp90.cloud"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "الخدمات",
          item: "https://erp90.cloud/services"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <SEO 
        page="services"
        structuredData={structuredData}
        canonical="https://erp90.cloud/services"
      />
      <div className="container max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <Badge variant="outline" className="mb-2 md:mb-4 px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm font-semibold bg-primary/10 text-primary">
            حلول متكاملة لأعمالك
          </Badge>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-6">
            خدماتنا المتكاملة
          </h1>
          <p className="text-xs md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الحلول التقنية المتطورة لإدارة أعمالك بكفاءة وفعالية
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-8 md:mb-16">
          <Card className="rounded-2xl border border-blue-100 bg-white text-center shadow-sm">
            <CardContent className="p-4 md:p-6">
              <div className="text-base md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">500+</div>
              <div className="text-xs md:text-base text-blue-600">عميل راضي</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-blue-100 bg-white text-center shadow-sm">
            <CardContent className="p-4 md:p-6">
              <div className="text-base md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">98%</div>
              <div className="text-xs md:text-base text-blue-600">معدل رضا العملاء</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-blue-100 bg-white text-center shadow-sm">
            <CardContent className="p-4 md:p-6">
              <div className="text-base md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-base text-blue-600">دعم فني</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-blue-100 bg-white text-center shadow-sm">
            <CardContent className="p-4 md:p-6">
              <div className="text-base md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">15+</div>
              <div className="text-xs md:text-base text-blue-600">عام خبرة</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-4 mb-4 md:mb-12">
          {/* الفلاتر الرئيسية */}
          {categories.filter(c => c.id !== "support").map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="rounded-full px-4 py-2 text-xs md:text-base min-w-[90px] md:min-w-[120px] border border-blue-100 shadow-sm bg-white font-medium"
              style={{ marginBottom: '8px' }}
            >
              {category.name}
            </Button>
          ))}
          {/* زر الدعم في صف منفصل على الموبايل */}
          <div className="w-full flex justify-center md:hidden mt-2">
            <Button
              key="support"
              variant={activeFilter === "support" ? "default" : "outline"}
              onClick={() => setActiveFilter("support")}
              className="rounded-full px-4 py-2 text-xs min-w-[90px] border border-blue-100 shadow-sm bg-white font-medium"
            >
              {categories.find(c => c.id === "support")?.name}
            </Button>
          </div>
          {/* زر الدعم يظهر مع باقي الفلاتر على الشاشات الكبيرة */}
          <Button
            key="support-desktop"
            variant={activeFilter === "support" ? "default" : "outline"}
            onClick={() => setActiveFilter("support")}
            className="rounded-full px-4 py-2 text-xs md:text-base min-w-[90px] md:min-w-[120px] border border-blue-100 shadow-sm bg-white font-medium hidden md:inline-flex"
          >
            {categories.find(c => c.id === "support")?.name}
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-16">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-1">
                    <Badge className="bg-primary text-primary-foreground px-1.5 md:px-2 py-0.5 md:py-1 flex items-center gap-1 text-xs md:text-sm">
                      <Star className="w-3 h-3" />
                      الأكثر طلباً
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-2 md:pb-4 pt-4 md:pt-6">
                  <div className={`w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-5 h-5 md:w-8 md:h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-center group-hover:text-primary transition-colors text-base md:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-[10px] md:p-6">
                  <p className="text-muted-foreground mb-2 md:mb-4 leading-relaxed text-center text-xs md:text-base">
                    {service.description}
                  </p>
 
                  <Button 
                    asChild 
                    variant={service.popular ? "default" : "outline"} 
                    className="w-full gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3 group-hover:shadow-md"
                  >
                    <Link 
                      to={`/services/${service.id}`}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      اكتشف المزيد
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mb-8 md:mb-20">
          <h2 className="text-base md:text-3xl font-bold text-center text-foreground mb-4 md:mb-12">
            لماذا تختار حلولنا؟
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <Card className="text-center border-border hover:shadow-md transition-shadow bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Zap className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">سهولة الاستخدام</h3>
                <p className="text-muted-foreground text-xs md:text-sm">واجهة مستخدم بديهية وسهلة التعلم</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border hover:shadow-md transition-shadow bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">أمان متكامل</h3>
                <p className="text-muted-foreground text-xs md:text-sm">حماية متقدمة لبياناتك ومعلوماتك</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border hover:shadow-md transition-shadow bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Target className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">مخصص لاحتياجاتك</h3>
                <p className="text-muted-foreground text-xs md:text-sm">حلول قابلة للتخصيص حسب متطلباتك</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border hover:shadow-md transition-shadow bg-orange-50">
              <CardContent className="p-4 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <HeadphonesIcon className="w-4 h-4 md:w-6 md:h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">دعم فني دائم</h3>
                <p className="text-muted-foreground text-xs md:text-sm">فريق دعم فني متاح على مدار الساعة</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-4 md:p-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <h2 className="text-base md:text-3xl font-bold text-foreground mb-2 md:mb-6">
            جاهز لتجربة حلولنا المتكاملة؟
          </h2>
          <p className="text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto text-xs md:text-lg">
            احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكن لـ ERP90 تحسين أداء أعمالك
          </p>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
            <Button size="lg" className="px-4 md:px-8 gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3" disabled={ctaLoading === "trial"} onClick={async () => {
  setCtaLoading("trial");
  await new Promise(resolve => setTimeout(resolve, 1200));
  setCtaLoading(null);
  // يمكنك هنا إضافة التنقل أو أي إجراء آخر
}}>
  {ctaLoading === "trial" ? (
    <Loader className="w-4 h-4 animate-spin" />
  ) : (
    <>
      ابدأ التجربة المجانية
      <Zap className="w-4 h-4" />
    </>
  )}
</Button>
<Button variant="outline" size="lg" className="px-4 md:px-8 gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3" disabled={ctaLoading === "expert"} onClick={async () => {
  setCtaLoading("expert");
  await new Promise(resolve => setTimeout(resolve, 1200));
  setCtaLoading(null);
  // يمكنك هنا إضافة التنقل أو أي إجراء آخر
}}>
  {ctaLoading === "expert" ? (
    <Loader className="w-4 h-4 animate-spin" />
  ) : (
    <>
      تحدث مع خبير
      <Phone className="w-4 h-4" />
    </>
  )}
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;