import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Confetti effect on success
    const confetti = () => {
      // Simple confetti implementation
      for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.cssText = `
          position: fixed;
          top: -10px;
          left: ${Math.random() * 100}%;
          width: 8px;
          height: 8px;
          background: ${['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 4)]};
          z-index: 1000;
          pointer-events: none;
          animation: confetti-fall 3s linear forwards;
        `;
        document.body.appendChild(confettiPiece);
        
        setTimeout(() => {
          confettiPiece.remove();
        }, 3000);
      }
    };

    const style = document.createElement('style');
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(-100vh) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    confetti();
    
    return () => {
      style.remove();
    };
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-4xl">
        {/* Success Animation */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle className="w-16 h-16 text-secondary animate-bounce" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-secondary/10 rounded-full animate-ping mx-auto"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            تم الاشتراك بنجاح! 🎉
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            مرحباً بك في عائلة ERP90. لقد بدأت رحلتك نحو إدارة أعمال أكثر فعالية.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Next Steps */}
          <Card className="shadow-hero animate-fade-in-up">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                الخطوات التالية
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">تحقق من بريدك الإلكتروني</h3>
                    <p className="text-sm text-muted-foreground">
                      سنرسل لك رسالة تحتوي على تفاصيل حسابك وكيفية البدء
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">حمل التطبيق</h3>
                    <p className="text-sm text-muted-foreground">
                      اكمل إعداد النظام عبر التطبيق أو لوحة التحكم الويب
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ابدأ التدريب</h3>
                    <p className="text-sm text-muted-foreground">
                      اشترك في دورة التدريب المجانية لتحقيق أقصى استفادة
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Details */}
          <Card className="shadow-hero animate-fade-in-up">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">تفاصيل الطلب</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">رقم الطلب:</span>
                  <span className="font-mono">#ERP90-2024-001234</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الباقة:</span>
                  <span className="font-semibold">الباقة المتقدمة</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المبلغ المدفوع:</span>
                  <span className="font-semibold">688.85 ريال</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">تاريخ البدء:</span>
                  <span>{new Date().toLocaleDateString('ar-SA')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">نهاية التجربة المجانية:</span>
                  <span>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ar-SA')}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  💡 تذكير: لن يتم خصم أي مبلغ خلال فترة التجربة المجانية (30 يوم)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Button 
            variant="hero" 
            className="h-12"
            onClick={() => window.open('mailto:support@erp90.com')}
          >
            <Mail className="w-4 h-4 mr-2" />
            تحقق من البريد الإلكتروني
          </Button>
          
          <Button 
            variant="outline-hero" 
            className="h-12"
            onClick={() => {/* Download app logic */}}
          >
            <Download className="w-4 h-4 mr-2" />
            حمل التطبيق
          </Button>
          
          <Button 
            variant="outline" 
            className="h-12"
            onClick={() => navigate('/docs')}
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            دليل البدء السريع
          </Button>
        </div>

        {/* Support Card */}
        <Card className="shadow-soft animate-fade-in-up bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-3">هل تحتاج إلى مساعدة؟</h3>
            <p className="text-muted-foreground mb-4">
              فريق الدعم الفني متاح 24/7 لمساعدتك في بدء استخدام النظام
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline">
                تواصل مع الدعم الفني
              </Button>
              <Button variant="ghost">
                احجز جلسة تدريب مجانية
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Return to Homepage */}
        <div className="text-center mt-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            العودة للصفحة الرئيسية
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
