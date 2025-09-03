import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Star } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();

  // Mock service data - in real app, this would come from API
  const serviceData = {
    sales: {
      title: "إدارة المبيعات",
      description: "نظام شامل لإدارة المبيعات والعملاء مع تتبع الأداء والتحليلات المتقدمة",
      features: [
        "إدارة شاملة لقاعدة بيانات العملاء",
        "تتبع دورة المبيعات من البداية للنهاية", 
        "تقارير مبيعات تفصيلية وتحليلات متقدمة",
        "إدارة فرق المبيعات والأهداف",
        "تكامل مع أنظمة التسويق الرقمي",
        "تحليل أداء المبيعات وتوقعات النمو"
      ],
      benefits: [
        "زيادة الإيرادات بنسبة تصل إلى 30%",
        "تحسين كفاءة فريق المبيعات",
        "اتخاذ قرارات مدروسة بناء على البيانات",
        "تحسين تجربة العملاء"
      ]
    },
    inventory: {
      title: "إدارة المخزون",
      description: "تتبع دقيق للمخزون مع إنذارات النفاد وإدارة المستودعات المتعددة",
      features: [
        "تتبع حركة المخزون في الوقت الفعلي",
        "إنذارات تلقائية عند نفاد المخزون",
        "إدارة متعددة المستودعات والمواقع",
        "نظام التقييم التلقائي للمخزون",
        "تتبع تواريخ الانتهاء",
        "تقارير حركة المخزون المفصلة"
      ],
      benefits: [
        "تقليل تكاليف المخزون بنسبة 25%",
        "منع نفاد المخزون",
        "تحسين دورة المخزون",
        "دقة في تقييم المخزون"
      ]
    }
  };

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
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary">الخدمات</Link>
          <span>/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">خدمة متخصصة</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="animate-fade-in-up delay-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">الميزات الرئيسية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="animate-fade-in-up delay-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">الفوائد المحققة</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    ابدأ الآن
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    احصل على تجربة مجانية لمدة 30 يوم واكتشف قوة هذه الخدمة
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <Button variant="hero" size="lg" className="w-full">
                      تجربة مجانية
                    </Button>
                    <Button variant="outline-hero" size="lg" className="w-full">
                      عرض توضيحي
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      تقييم 4.9/5 من أكثر من 1000+ عميل
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    تحتاج مساعدة؟
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    تحدث مع أحد خبرائنا للحصول على استشارة مخصصة
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    تواصل معنا
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Back to Services */}
        <div className="mt-16 pt-8 border-t">
          <Button asChild variant="ghost">
            <Link to="/services" className="flex items-center gap-2">
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