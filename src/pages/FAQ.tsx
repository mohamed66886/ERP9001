import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, HelpCircle, ChevronDown, ChevronUp, HeadphonesIcon, CreditCard, Cloud, Shield, Users } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [activeSection, setActiveSection] = useState<string | null>("general");

  const faqSections = [
    {
      id: "general",
      title: "أسئلة عامة",
      icon: HelpCircle,
      questions: [
        {
          question: "ما هو نظام ERP90؟",
          answer: "ERP90 هو نظام إدارة الموارد المؤسسية متكامل يساعد الشركات على إدارة جميع جوانب أعمالها من المبيعات والمشتريات والمخزون والمحاسبة والموارد البشرية في مكان واحد."
        },
        {
          question: "هل النظام يدعم اللغة العربية؟",
          answer: "نعم، النظام مصمم خصيصاً لدعم اللغة العربية بالكامل مع واجهة مستخدم تدعم النصوص من اليمين إلى اليسار (RTL) والتقارير باللغة العربية."
        },
        {
          question: "هل يمكنني تجربة النظام قبل الشراء؟",
          answer: "نعم، نوفر تجربة مجانية لمدة 30 يوم كاملة دون الحاجة لبطاقة ائتمانية. يمكنك الوصول لجميع الميزات واختبار النظام بالكامل."
        },
        {
          question: "كم من الوقت يستغرق تطبيق النظام؟",
          answer: "يختلف وقت التطبيق حسب حجم الشركة وتعقيد العمليات. للشركات الصغيرة، يمكن أن يستغرق من أسبوع إلى أسبوعين، بينما الشركات الكبيرة قد تحتاج من شهر إلى شهرين."
        }
      ]
    },
    {
      id: "technical",
      title: "أسئلة تقنية",
      icon: Cloud,
      questions: [
        {
          question: "هل النظام يعمل على السحابة؟",
          answer: "نعم، ERP90 هو نظام سحابي بالكامل مما يعني أنه يمكنك الوصول إليه من أي مكان وفي أي وقت عبر متصفح الإنترنت أو تطبيق الهاتف المحمول."
        },
        {
          question: "ما هي متطلبات النظام؟",
          answer: "النظام يعمل على أي جهاز متصل بالإنترنت. ننصح باستخدام متصفحات حديثة مثل Chrome أو Firefox أو Safari أو Edge. لا توجد حاجة لتثبيت برامج إضافية."
        },
        {
          question: "هل البيانات آمنة؟",
          answer: "نعم، نحن نطبق أعلى معايير الأمان بما في ذلك التشفير من طرف إلى طرف، النسخ الاحتياطي المتعدد، ومراكز البيانات المؤمنة. جميع البيانات محمية وفقاً لمعايير الأمان الدولية."
        },
        {
          question: "هل يمكن تكامل النظام مع أنظمة أخرى؟",
          answer: "نعم، ERP90 يدعم التكامل مع العديد من الأنظمة الخارجية مثل البنوك، منصات التجارة الإلكترونية، أنظمة المحاسبة الأخرى، وأكثر من ذلك عبر APIs متقدمة."
        }
      ]
    },
    {
      id: "billing",
      title: "الفوترة والدفع",
      icon: CreditCard,
      questions: [
        {
          question: "ما هي طرق الدفع المتاحة؟",
          answer: "نقبل جميع البطاقات الائتمانية الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، التحويل البنكي، والدفع عبر منصات الدفع الإلكتروني مثل مدى وSTCPay."
        },
        {
          question: "هل يمكنني تغيير الباقة؟",
          answer: "نعم، يمكنك ترقية أو تخفيض باقتك في أي وقت. التغييرات ستطبق فوراً ولن تدفع إلا الفرق في السعر للفترة المتبقية."
        },
        {
          question: "هل هناك رسوم إضافية؟",
          answer: "لا، جميع الأسعار شاملة. لا توجد رسوم إعداد أو رسوم خفية. السعر المعلن هو ما ستدفعه شهرياً أو سنوياً."
        },
        {
          question: "ماذا يحدث إذا ألغيت الاشتراك؟",
          answer: "يمكنك إلغاء اشتراكك في أي وقت. ستحتفظ بالوصول للنظام حتى نهاية الفترة المدفوعة. بعدها يمكنك تصدير بياناتك قبل إغلاق الحساب."
        }
      ]
    },
    {
      id: "support",
      title: "الدعم والتدريب",
      icon: HeadphonesIcon,
      questions: [
        {
          question: "ما هي أوقات الدعم الفني؟",
          answer: "نوفر دعم فني على مدار الساعة طوال أيام الأسبوع للباقة المؤسسية. للباقات الأخرى، الدعم متاح من الأحد إلى الخميس من 8 صباحاً إلى 8 مساءً."
        },
        {
          question: "هل تقدمون تدريب على استخدام النظام؟",
          answer: "نعم، نقدم جلسات تدريب مجانية لجميع العملاء، بالإضافة إلى مكتبة شاملة من الفيديوهات التعليمية والأدلة المفصلة باللغة العربية."
        },
        {
          question: "كيف يمكنني الحصول على الدعم؟",
          answer: "يمكنك التواصل معنا عبر الهاتف، البريد الإلكتروني، الدردشة المباشرة في النظام، أو تقديم تذكرة دعم فني. جميع القنوات متاحة باللغة العربية."
        },
        {
          question: "هل تقدمون استشارات لتحسين العمليات؟",
          answer: "نعم، فريق الخبراء لدينا يقدم استشارات مجانية لمساعدتك في تحسين عمليات أعمالك والاستفادة القصوى من النظام."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl px-2 md:px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            إجابات شاملة على الأسئلة الأكثر شيوعاً حول نظام ERP90 وخدماتنا. ابحث عن ما تحتاجه أو تواصل معنا للمزيد من المساعدة.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 md:gap-4 mb-6 md:mb-14 max-w-xs md:max-w-none mx-auto">
          {faqSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
                className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full transition-all text-xs md:text-base w-auto min-w-[140px] md:min-w-0 shadow-sm"
                style={{flex: '1 1 45%', maxWidth: '180px'}}
              >
                <span className="flex items-center gap-1">
                  {section.title}
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </Button>
            );
          })}
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-8">
          {/* Sidebar for desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <Card className="sticky top-24 shadow-md border-border">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-4">أقسام الأسئلة</h3>
                <div className="space-y-1 md:space-y-2">
                  {faqSections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <Button
                        key={section.id}
                        variant={activeSection === section.id ? "secondary" : "ghost"}
                        onClick={() => setActiveSection(section.id)}
                        className="w-full justify-start gap-1 md:gap-2 text-xs md:text-base"
                      >
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                        {section.title}
                      </Button>
                    );
                  })}
                </div>
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
                  <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-4">لا تجد إجابتك؟</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-4">
                    فريق الدعم لدينا جاهز لمساعدتك في أي وقت
                  </p>
                  <Button className="w-full gap-1 md:gap-2 mb-1 md:mb-2 text-xs md:text-base">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    دردشة مباشرة
                  </Button>
                  <Button variant="outline" className="w-full gap-1 md:gap-2 text-xs md:text-base">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    إرسال رسالة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Sections */}
          <div className="lg:col-span-3">
            {faqSections
              .filter(section => !activeSection || section.id === activeSection)
              .map((section, sectionIndex) => {
                const IconComponent = section.icon;
                return (
                  <div 
                    key={section.id}
                    id={section.id}
                    className="mb-6 md:mb-12 last:mb-0"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <h2 className="text-base md:text-2xl font-bold text-foreground">{section.title}</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
                      {section.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${section.id}-${faqIndex}`}
                          className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="flex items-center justify-between w-full px-3 md:px-5 py-2 md:py-4 text-right hover:no-underline hover:bg-muted/50 transition-colors">
                            <span className="font-medium text-foreground text-sm md:text-lg flex-1 text-right">
                              {faq.question}
                            </span>
                            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground shrink-0 transition-transform duration-200 ml-1 md:ml-2" />
                          </AccordionTrigger>
                          <AccordionContent className="px-3 md:px-5 pb-3 md:pb-5 pt-1 md:pt-2 text-muted-foreground leading-relaxed text-sm md:text-lg bg-muted/20">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Still Have Questions Section - Mobile */}
        <div className="mt-8 md:mt-16 lg:hidden">
          <Card className="shadow-lg border-primary/20">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <HelpCircle className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-sm md:text-xl font-bold text-foreground mb-2 md:mb-3">
                لا تزال لديك أسئلة؟
              </h2>
              <p className="text-xs md:text-muted-foreground md:mb-5 mb-2">
                فريق الدعم الفني لدينا جاهز لمساعدتك في أي وقت. تواصل معنا وسنجيب على جميع استفساراتك
              </p>
              <div className="flex flex-row flex-wrap items-center justify-center gap-1 md:gap-3">
                <Button className="gap-1 flex-1 text-xs md:text-base py-1 md:py-3">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  دردشة مباشرة
                </Button>
                <Button variant="outline" className="gap-1 flex-1 text-xs md:text-base py-1 md:py-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  اتصل بنا
                </Button>
                <Button variant="outline" className="gap-1 flex-1 text-xs md:text-base py-1 md:py-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  راسلنا
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Help Section */}
        <div className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          <Card className="text-center border-border hover:shadow-md transition-shadow hidden md:block">
            <CardContent className="p-4 md:p-6">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                <Mail className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">البريد الإلكتروني</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">أرسل استفسارك وسنرد خلال ساعات</p>
              <Button variant="outline" size="sm" className="gap-2 text-xs md:text-sm py-1 md:py-2">
                support@erp90.com
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                <HeadphonesIcon className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">الدعم الهاتفي</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">اتصل بنا من الأحد إلى الخميس</p>
              <Button variant="outline" size="sm" className="gap-2 text-xs md:text-sm py-1 md:py-2">
                9200 12345
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-base">الدردشة المباشرة</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">احصل على مساعدة فورية الآن</p>
              <Button size="sm" className="gap-2 text-xs md:text-sm py-1 md:py-2">
                بدء المحادثة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;