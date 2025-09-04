import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Pricing = () => {
  const navigate = useNavigate();
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  
  // Add schema markup for pricing
  useEffect(() => {
    const pricingSchema = {
      "@context": "https://schema.org",
      "@type": "PriceSpecification",
      name: "ERP90 Pricing Plans",
      description: "أسعار وباقات نظام ERP90 المرنة لجميع أحجام الشركات",
      priceCurrency: "SAR",
      offers: [
        {
          "@type": "Offer",
          name: "الباقة الأساسية",
          price: "299",
          priceCurrency: "SAR",
          description: "مثالية للشركات الناشئة والصغيرة"
        },
        {
          "@type": "Offer", 
          name: "الباقة المتقدمة",
          price: "599",
          priceCurrency: "SAR",
          description: "الأمثل للشركات المتوسطة والمتنامية"
        },
        {
          "@type": "Offer",
          name: "الباقة الاحترافية", 
          price: "999",
          priceCurrency: "SAR",
          description: "للشركات الكبيرة والمؤسسات"
        }
      ]
    };

    const existingPricingScript = document.querySelector('script[data-pricing="schema"]');
    if (existingPricingScript) {
      existingPricingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-pricing', 'schema');
    script.textContent = JSON.stringify(pricingSchema);
    document.head.appendChild(script);

    return () => {
      const pricingScript = document.querySelector('script[data-pricing="schema"]');
      if (pricingScript) {
        pricingScript.remove();
      }
    };
  }, []);
  
  const handleSelectPlan = async (plan: { name: string; price: string }, index: number) => {
    setLoadingIndex(index);
    await new Promise(resolve => setTimeout(resolve, 1200));
    window.scrollTo(0, 0);
    navigate(`/payment?plan=${encodeURIComponent(plan.name)}&price=${plan.price}`);
    setLoadingIndex(null);
  };

  const plans = [
    {
      name: "الباقة الأساسية",
      price: "299",
      period: "شهريًا",
      description: "مثالية للشركات الناشئة والصغيرة",
      featured: false,
      features: [
        "حتى 5 مستخدمين",
        "مساحة تخزين 10 جيجا",
        "إدارة المبيعات الأساسية",
        "إدارة المخزون",
        "تقارير أساسية",
        "دعم عبر البريد الإلكتروني",
        { name: "نظام محاسبي متقدم", included: false },
        { name: "تطبيق الهاتف المحمول", included: false },
        { name: "تكامل مع أنظمة خارجية", included: false }
      ]
    },
    {
      name: "الباقة المتقدمة",
      price: "599",
      period: "شهريًا",
      description: "الأفضل للشركات المتوسطة والنامية",
      featured: true,
      features: [
        "حتى 25 مستخدم",
        "مساحة تخزين 100 جيجا",
        "جميع ميزات الباقة الأساسية",
        "نظام محاسبي متقدم",
        "إدارة علاقات العملاء (CRM)",
        "تقارير وتحليلات متقدمة",
        "تطبيق الهاتف المحمول",
        "دعم هاتفي",
        { name: "تكامل مع أنظمة خارجية", included: false }
      ]
    },
    {
      name: "الباقة المؤسسية",
      price: "1,299",
      period: "شهريًا",
      description: "حلول مخصصة للمؤسسات الكبيرة",
      featured: false,
      features: [
        "مستخدمين غير محدود",
        "مساحة تخزين غير محدودة",
        "جميع الميزات المتاحة",
        "تكامل مع أنظمة خارجية",
        "تخصيص كامل للنظام",
        "تدريب مخصص للفريق",
        "مدير حساب مخصص",
        "دعم فني أولوية عالية 24/7",
        "النسخ الاحتياطي المتقدم"
      ]
    }
  ];

  const faq = [
    {
      question: "هل يمكنني تغيير الباقة لاحقًا؟",
      answer: "نعم، يمكنك ترقية أو تخفيض باقتك في أي وقت. التغييرات ستطبق في دورة الفوترة التالية."
    },
    {
      question: "هل هناك رسوم إعداد؟",
      answer: "لا، جميع باقاتنا لا تتضمن رسوم إعداد. يمكنك البدء فورًا بعد الاشتراك."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل جميع البطاقات الائتمانية الرئيسية، والتحويل البنكي، والدفع عبر الإنترنت."
    },
    {
      question: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
      answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت دون أي التزامات طويلة الأجل."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            خطط الأسعار
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-2 sm:mb-0">
            اختر الباقة المناسبة لحجم أعمالك. جميع الباقات تشمل تجربة مجانية لمدة 30 يوم
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative animate-fade-in-up shadow-card hover:shadow-hero transition-all duration-300 ${
                plan.featured 
                  ? 'border-primary shadow-hero scale-105' 
                  : 'hover:-translate-y-1'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    الأكثر شعبية
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle className="text-lg sm:text-2xl mb-1 sm:mb-2">{plan.name}</CardTitle>
                <div className="mb-2 sm:mb-4">
                  <span className="text-2xl sm:text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground mr-1 text-xs sm:text-base">ريال {plan.period}</span>
                </div>
                <p className="text-xs sm:text-base text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      {typeof feature === 'string' ? (
                        <>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </>
                      ) : (
                        <>
                          {feature.included ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span 
                            className={`text-xs sm:text-sm ${feature.included ? '' : 'text-muted-foreground'}`}
                          >
                            {feature.name}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.featured ? "hero" : "outline-hero"} 
                  size="sm" 
                  className="w-full px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center"
                  onClick={() => handleSelectPlan(plan, index)}
                  disabled={loadingIndex === index}
                >
                  {loadingIndex === index ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    plan.featured ? "ابدأ التجربة المجانية" : "اختر هذه الباقة"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="animate-fade-in-up">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-foreground mb-6 sm:mb-12">
            الأسئلة الشائعة
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-base text-muted-foreground">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-16 p-4 sm:p-8 rounded-lg hero-gradient animate-fade-in-up">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            لا تزال غير متأكد؟
          </h2>
          <p className="text-xs sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            تحدث مع أحد خبرائنا للحصول على استشارة مجانية وتحديد الباقة المناسبة لأعمالك
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Button variant="hero" size="sm" className="px-2 py-1 text-xs sm:text-base sm:px-4 sm:py-2">
              استشارة مجانية
            </Button>
            <Button variant="outline-hero" size="sm" className="px-2 py-1 text-xs sm:text-base sm:px-4 sm:py-2">
              مقارنة الباقات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;