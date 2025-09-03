import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, Star, Users, Zap, Clock, Shield, BarChart3, Phone, MessageCircle, Play } from "lucide-react";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  stats: { value: string; label: string }[];
  videoUrl?: string;
  caseStudy?: { title: string; result: string };
};

const serviceData: Record<string, Service> = {
  sales: {
    title: "إدارة المبيعات",
    description: "حل متكامل لتحويل إدارة المبيعات إلى تجربة ذكية وسلسة، مع تتبع دقيق للعملاء وتحليلات متقدمة تدعم قراراتك لتحقيق نمو متسارع وإيرادات أعلى.",
    icon: "📊",
    features: [
      "إدارة شاملة ودقيقة لقاعدة بيانات العملاء",
      "تتبع كامل لدورة البيع من أول تواصل حتى إغلاق الصفقة",
      "تقارير لحظية وتحليلات تنبؤية متقدمة",
      "إدارة فرق المبيعات مع تحديد الأهداف ومتابعة الإنجاز",
      "تكامل مباشر مع أدوات التسويق الإلكتروني",
      "لوحات تحكم تفاعلية لتوقعات النمو وأداء المبيعات",
      "إدارة ذكية للعروض والخصومات",
      "قياس وتقييم أداء مندوبي المبيعات بشكل لحظي"
    ],
    benefits: [
      "زيادة الإيرادات بما يصل إلى 35% خلال أول عام",
      "رفع كفاءة فرق المبيعات بنسبة تتجاوز 45%",
      "قرارات استراتيجية مدعومة بالبيانات والتحليلات",
      "تجربة عملاء أكثر احترافية تعزز الولاء والثقة"
    ],
    stats: [
      { value: "45%", label: "تحسين الكفاءة" },
      { value: "35%", label: "زيادة المبيعات" },
      { value: "97%", label: "رضا العملاء" }
    ]
  },
  inventory: {
    title: "إدارة المخزون",
    description: "نظام ذكي لمراقبة وإدارة المخزون في الوقت الفعلي مع تنبيهات استباقية، يضمن كفاءة أعلى وتكلفة أقل وتوريد أكثر انسيابية.",
    icon: "📦",
    features: [
      "تتبع حركة المنتجات بدقة لحظية",
      "إنذارات ذكية عند اقتراب نفاد المخزون",
      "إدارة متعددة المستودعات والفروع من مكان واحد",
      "تقييم تلقائي وحديث للمخزون",
      "متابعة صلاحيات وتواريخ الانتهاء",
      "تقارير دقيقة ومفصلة لحركة المخزون",
      "إدارة المشتريات والتوريد بشكل آلي",
      "مراقبة الجودة والفحص الدوري"
    ],
    benefits: [
      "خفض تكاليف التخزين بنسبة تصل إلى 30%",
      "منع توقف المبيعات بسبب نفاد المنتجات",
      "تحسين التدفقات النقدية ودورة المخزون",
      "تقليل الهدر وزيادة دقة التوريد"
    ],
    stats: [
      { value: "30%", label: "توفير التكاليف" },
      { value: "99.5%", label: "دقة الجرد" },
      { value: "65%", label: "تقليل الهدر" }
    ]
  },
  accounting: {
    title: "النظام المحاسبي",
    description: "نظام محاسبي متكامل ومعتمد يضمن لك دقة وشفافية في جميع معاملتك المالية، مع التوافق الكامل مع معايير المحاسبة السعودية والدولية.",
    icon: "🧮",
    features: [
      "دليل حسابات مرن وقابل للتخصيص حسب نشاطك",
      "إنشاء القيود اليومية بشكل أوتوماتيكي",
      "إعداد القوائم المالية (ميزانية – قائمة دخل) بدقة",
      "تقارير مالية تفاعلية قابلة للتخصيص",
      "إدارة الفواتير والمصروفات والمدفوعات بكفاءة",
      "التوافق التام مع الضرائب واللوائح المحلية",
      "إدارة دقيقة للمصروفات والنفقات اليومية",
      "تقارير ضريبية شاملة وجاهزة للتدقيق"
    ],
    benefits: [
      "صفر أخطاء في العمليات المالية",
      "امتثال كامل للمعايير المحاسبية والضريبية",
      "تبسيط عمليات التدقيق والمراجعة",
      "رؤية أوضح للتدفقات النقدية والتحكم في الميزانية"
    ],
    stats: [
      { value: "100%", label: "توافق محاسبي" },
      { value: "55%", label: "توفير الوقت" },
      { value: "0%", label: "أخطاء محاسبية" }
    ]
  },
  hr: {
    title: "شؤون الموظفين",
    description: "إدارة متكاملة للموارد البشرية بدءًا من التوظيف وحتى إدارة الرواتب والإجازات، مع نظام يضمن الامتثال والشفافية.",
    icon: "👨‍💼",
    features: [
      "إدارة بيانات الموظفين والملفات الوظيفية",
      "تتبع الحضور والانصراف بسلاسة",
      "إدارة الرواتب والمكافآت والخصومات",
      "إدارة الإجازات والطلبات بسهولة",
      "لوحات تحكم لتحليل أداء الموظفين",
      "تكامل مع الأنظمة المالية والمحاسبية",
      "إدارة عملية التوظيف والاختيار",
      "التوافق مع قوانين العمل المحلية"
    ],
    benefits: [
      "تحسين إدارة الموارد البشرية بنسبة 50%",
      "رفع رضا الموظفين وزيادة الإنتاجية",
      "دقة عالية في حساب الرواتب والخصومات",
      "توفير وقت وجهد قسم الموارد البشرية"
    ],
    stats: [
      { value: "50%", label: "تحسين الكفاءة" },
      { value: "98%", label: "رضا الموظفين" },
      { value: "40%", label: "توفير الوقت" }
    ]
  },
  crm: {
    title: "علاقات العملاء",
    description: "نظام CRM متطور لبناء علاقات قوية مع العملاء، وتحويل التفاعل إلى فرص بيع حقيقية وزيادة الولاء.",
    icon: "🤝",
    features: [
      "إدارة بيانات العملاء والتاريخ الشرائي",
      "متابعة الاستفسارات والدعم الفني",
      "أتمتة حملات التسويق والمتابعة",
      "تقسيم العملاء حسب الشرائح والسلوك",
      "تحليل ولاء العملاء ومعدل الاحتفاظ",
      "مؤشرات أداء لقياس تجربة العميل",
      "تكامل مع أنظمة المبيعات والتسويق",
      "إشعارات وتنبيهات فورية لطلبات العملاء"
    ],
    benefits: [
      "زيادة ولاء العملاء بنسبة 60%",
      "تحويل العملاء المحتملين إلى مبيعات فعلية",
      "تجربة عملاء متكاملة واحترافية",
      "رؤية أوضح لرحلة العميل بالكامل"
    ],
    stats: [
      { value: "60%", label: "زيادة الولاء" },
      { value: "50%", label: "تحويل العملاء" },
      { value: "95%", label: "رضا العملاء" }
    ]
  },
  operations: {
    title: "إدارة العمليات",
    description: "أتمتة وإدارة شاملة لجميع العمليات اليومية لرفع الكفاءة وتقليل الأخطاء وضمان سير الأعمال بانسيابية.",
    icon: "⚙️",
    features: [
      "إدارة تدفق العمليات من البداية للنهاية",
      "مراقبة الأداء والتقارير اللحظية",
      "إدارة المهام والمشاريع بسهولة",
      "تكامل كامل مع باقي الأقسام",
      "أتمتة الإجراءات الروتينية لتوفير الوقت",
      "مؤشرات أداء لتقييم كفاءة العمليات",
      "إدارة الجودة ومتابعة التحسين المستمر",
      "إدارة الصلاحيات والموافقات"
    ],
    benefits: [
      "توفير أكثر من 40% من الوقت المهدر",
      "تقليل الأخطاء التشغيلية بنسبة 70%",
      "رفع كفاءة سير العمل اليومي",
      "سهولة اتخاذ القرارات بناءً على البيانات"
    ],
    stats: [
      { value: "70%", label: "تقليل الأخطاء" },
      { value: "40%", label: "توفير الوقت" },
      { value: "90%", label: "تحسين الكفاءة" }
    ]
  },
  security: {
    title: "الأمان والحماية",
    description: "أعلى مستويات الأمان السيبراني لحماية بياناتك المالية والتجارية من أي تهديدات داخلية أو خارجية.",
    icon: "🔒",
    features: [
      "تشفير متقدم للبيانات",
      "مصادقة ثنائية للمستخدمين",
      "نسخ احتياطي دوري للبيانات",
      "حماية ضد محاولات الاختراق والفيروسات",
      "مراقبة لحظية لجميع الأنشطة",
      "صلاحيات وصول مخصصة",
      "تنبيهات فورية لأي نشاط مشبوه",
      "التوافق مع معايير الأمان العالمية"
    ],
    benefits: [
      "حماية بياناتك بنسبة 100%",
      "طمأنينة كاملة للعملاء والشركاء",
      "ضمان استمرارية الأعمال بلا مخاطر",
      "الامتثال الكامل لمعايير الأمان الدولية"
    ],
    stats: [
      { value: "100%", label: "حماية البيانات" },
      { value: "0%", label: "اختراقات" },
      { value: "24/7", label: "مراقبة دائمة" }
    ]
  },
  cloud: {
    title: "الخدمات السحابية",
    description: "الوصول إلى نظامك من أي مكان وفي أي وقت مع أمان عالي ومرونة كاملة في التوسع.",
    icon: "☁️",
    features: [
      "الوصول إلى النظام من أي جهاز",
      "تخزين بيانات آمن على السحابة",
      "توسّع مرن مع نمو أعمالك",
      "نسخ احتياطي واستعادة تلقائية",
      "تكامل سلس مع خدمات أخرى",
      "تحديثات لحظية للنظام",
      "تجربة مستخدم سلسة وسريعة",
      "توفر دائم بنسبة 99.9%"
    ],
    benefits: [
      "حرية الوصول إلى بياناتك في أي وقت",
      "أمان مضاعف وحماية من فقدان البيانات",
      "مرونة أكبر للتوسع مع نمو أعمالك",
      "توفير تكاليف البنية التحتية"
    ],
    stats: [
      { value: "99.9%", label: "توافر الخدمة" },
      { value: "100%", label: "أمان البيانات" },
      { value: "∞", label: "مرونة التوسع" }
    ]
  },
  pricing: {
    title: "سعر اقتصادي",
    description: "حلول متقدمة بأسعار مرنة تناسب جميع أحجام الشركات دون التأثير على جودة الخدمة.",
    icon: "💰",
    features: [
      "خطط مرنة تناسب الشركات الصغيرة والمتوسطة",
      "دفع شهري أو سنوي حسب رغبتك",
      "دون رسوم مخفية",
      "أعلى قيمة مقابل التكلفة",
      "دعم فني مجاني",
      "ترقية أو خفض الخطة في أي وقت",
      "تجربة مجانية قبل الاشتراك",
      "أسعار مدروسة تناسب السوق المحلي"
    ],
    benefits: [
      "أفضل قيمة مقابل السعر",
      "إمكانية التحكم الكامل في التكاليف",
      "مرونة عالية في إدارة الاشتراكات",
      "تجربة مضمونة قبل الالتزام"
    ],
    stats: [
      { value: "70%", label: "توفير التكاليف" },
      { value: "100%", label: "شفافية" },
      { value: "0", label: "رسوم مخفية" }
    ]
  },
  updates: {
    title: "تحديثات دورية",
    description: "تطوير مستمر للنظام مع إضافة مميزات جديدة وتحسين الأداء بشكل دائم.",
    icon: "🔄",
    features: [
      "تحديثات شهرية تلقائية",
      "إضافة خصائص جديدة باستمرار",
      "تحسين واجهة المستخدم وتجربة الاستخدام",
      "دعم كامل لإصدارات جديدة",
      "تصحيح الثغرات الأمنية فورًا",
      "تطوير بناءً على آراء العملاء",
      "تكامل مع أحدث التقنيات",
      "ضمان عمل النظام بدون توقف"
    ],
    benefits: [
      "نظام حديث دائمًا مواكب للتطور",
      "حماية مستمرة ضد التهديدات",
      "تحسينات مستمرة لزيادة الكفاءة",
      "مميزات جديدة بدون أي تكاليف إضافية"
    ],
    stats: [
      { value: "100%", label: "مواكبة التطوير" },
      { value: "0%", label: "تأخير" },
      { value: "∞", label: "تحسينات" }
    ]
  },
  efficiency: {
    title: "توفير الوقت والجهد",
    description: "أتمتة العمليات لتقليل المهام الروتينية وتوفير وقتك للتركيز على القرارات الاستراتيجية.",
    icon: "⏱️",
    features: [
      "أتمتة إدخال البيانات",
      "إشعارات وتنبيهات فورية",
      "تقارير جاهزة بضغطة زر",
      "جدولة العمليات بشكل تلقائي",
      "تكامل كامل بين الأقسام",
      "واجهة استخدام سهلة وسريعة",
      "توفير دعم بالذكاء الاصطناعي",
      "تقليل الأخطاء البشرية"
    ],
    benefits: [
      "توفير 50% من وقت العمل اليومي",
      "تقليل الضغط على الموظفين",
      "تركيز أكبر على تطوير الأعمال",
      "زيادة سرعة الاستجابة للعملاء"
    ],
    stats: [
      { value: "50%", label: "توفير الوقت" },
      { value: "45%", label: "تقليل الأخطاء" },
      { value: "90%", label: "تحسين الإنتاجية" }
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("features");

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الخدمة غير موجودة</h1>
          <Button asChild variant="outline">
            <Link to="/services">العودة للخدمات</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary transition-colors">الخدمات</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-sm font-semibold bg-primary/10 text-primary">
                خدمة متخصصة
              </Badge>
              <h1 className="text-base md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-6">
                {service.title}
              </h1>
              <p className="text-xs md:text-xl text-muted-foreground mb-3 md:mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-8">
                {service.stats.map((stat, index) => (
                  <Card key={index} className="text-center border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-2 md:p-4">
                      <div className="text-xs md:text-2xl font-bold text-primary mb-0.5 md:mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4 md:mb-8">
              <TabsList className="grid grid-cols-2 mb-3 md:mb-6 text-xs md:text-base">
                <TabsTrigger value="features" className="data-[state=active]:bg-primary">
                  الميزات
                </TabsTrigger>
                <TabsTrigger value="benefits" className="data-[state=active]:bg-primary">
                  الفوائد
                </TabsTrigger>
              </TabsList>

              <TabsContent value="features">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-2 md:gap-3 p-2 md:p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all"
                    >
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-base text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="benefits">
                <div className="space-y-2 md:space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-4 rounded-lg bg-card border border-border">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-base text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Case Study */}
            {service.caseStudy && (
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">دراسة حالة</h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">{service.caseStudy.title}:</span> 
                    {" "}{service.caseStudy.result}
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    اقرأ القصة الكاملة
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="shadow-lg border-border">
                <CardContent className="p-6">
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-4">
                    ابدأ الآن
                  </h3>
                  <p className="text-xs md:text-muted-foreground mb-3 md:mb-6">
                    احصل على تجربة مجانية لمدة 30 يوم واكتشف قوة هذه الخدمة
                  </p>
                  <div className="space-y-2 md:space-y-3 mb-3 md:mb-6">
                    <Button size="lg" className="w-full gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3">
                      <Zap className="w-4 h-4 md:w-5 md:h-5" />
                      تجربة مجانية
                    </Button>
                    <Button variant="outline" size="lg" className="w-full gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3">
                      <Play className="w-4 h-4 md:w-5 md:h-5" />
                      عرض توضيحي
                    </Button>
                  </div>
                  <div className="text-center pt-2 md:pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-1 md:mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      تقييم 4.9/5 من أكثر من 1000+ عميل
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="shadow-lg border-border">
                <CardContent className="p-6">
                  <h3 className="text-xs md:text-lg font-semibold text-foreground mb-2 md:mb-4">
                    تحتاج مساعدة؟
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">
                    تحدث مع أحد خبرائنا للحصول على استشارة مخصصة
                  </p>
                  <div className="space-y-1 md:space-y-2">
                    <Button variant="outline" size="sm" className="w-full gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      اتصل بنا
                    </Button>
                    <Button variant="outline" size="sm" className="w-full gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3">
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                      دردشة مباشرة
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Features Icons */}
              <Card className="shadow-lg border-border">
                <CardContent className="p-6">
                  <h3 className="text-xs md:text-lg font-semibold text-foreground mb-2 md:mb-4">لماذا تختارنا؟</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <span className="text-xs md:text-sm">أمان وحماية بيانات متكاملة</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                      </div>
                      <span className="text-xs md:text-sm">دعم فني متاح 24/7</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                      </div>
                      <span className="text-xs md:text-sm">تحديثات مستمرة وتحسينات</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Back to Services */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/services">
              <ArrowLeft className="w-4 h-4" />
              العودة لجميع الخدمات
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;