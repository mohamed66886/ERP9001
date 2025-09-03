import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqSections = [
    {
      title: "عام",
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
      title: "التقني",
      icon: MessageCircle,
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
      title: "الفوترة والدفع",
      icon: Phone,
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
      title: "الدعم والتدريب",
      icon: Mail,
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
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            إجابات شاملة على الأسئلة الأكثر شيوعاً حول نظام ERP90 وخدماتنا
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          {faqSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.title}
                className="mb-12 animate-fade-in-up"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${sectionIndex}-${faqIndex}`}
                      className="border rounded-lg px-6 shadow-soft hover:shadow-card transition-shadow"
                    >
                      <AccordionTrigger className="text-right hover:no-underline py-6">
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-20">
          <Card className="shadow-card">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                لا تزال لديك أسئلة؟
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                فريق الدعم الفني لدينا جاهز لمساعدتك في أي وقت. تواصل معنا وسنجيب على جميع استفساراتك
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  دردشة مباشرة
                </Button>
                <Button variant="outline-hero" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  اتصل بنا
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  راسلنا
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;