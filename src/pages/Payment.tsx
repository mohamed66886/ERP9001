import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Smartphone, Building, Shield, ArrowRight, ArrowLeft, Loader } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get plan details from URL params
  const planName = searchParams.get("plan") || "الباقة المتقدمة";
  const planPrice = searchParams.get("price") || "599";
  
  // Payment method images
  const paymentLogos = {
    card: [
      "/visa-logo.png",
      "/mastercard-logo.png",
      "/mada-logo.png",
      "/amex-logo.webp"
    ],
    mobile: [
      "/apple-pay-logo.png",
      "/stc-pay-logo.jpg",
      "/mada-pay-logo.png"
    ],
    bank: [
      "/alrajhi-bank-logo.png",
      "/albilad-bank.png",
      "/riyad-bank-logo.png"
    ]
  };

  // Plan features based on selection
  const getPlanFeatures = (name: string) => {
    switch (name) {
      case "الباقة الأساسية":
        return [
          "حتى 5 مستخدمين",
          "مساحة تخزين 10 جيجا",
          "إدارة المبيعات الأساسية",
          "إدارة المخزون",
          "تقارير أساسية",
          "دعم عبر البريد الإلكتروني"
        ];
      case "الباقة المتقدمة":
        return [
          "حتى 25 مستخدم",
          "مساحة تخزين 100 جيجا",
          "نظام محاسبي متقدم",
          "إدارة علاقات العملاء (CRM)",
          "تقارير وتحليلات متقدمة",
          "تطبيق الهاتف المحمول",
          "دعم هاتفي"
        ];
      case "الباقة المؤسسية":
        return [
          "مستخدمين غير محدود",
          "مساحة تخزين غير محدودة",
          "جميع الميزات المتاحة",
          "تكامل مع أنظمة خارجية",
          "تخصيص كامل للنظام",
          "تدريب مخصص للفريق",
          "مدير حساب مخصص",
          "دعم فني أولوية عالية 24/7"
        ];
      default:
        return [];
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Navigate to success page or show success message
    navigate("/payment-success");
  };

  const features = getPlanFeatures(planName);
  const tax = Math.round(parseFloat(planPrice) * 0.15);
  const total = parseFloat(planPrice) + tax;

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-6xl">


        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-lg border-border/40 animate-fade-in-up">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard className="w-5 h-5" />
                  معلومات الدفع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Payment Method Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">طريقة الدفع</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 space-x-reverse p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                          <CreditCard className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">بطاقة ائتمانية</div>
                            <div className="text-sm text-muted-foreground">Visa، Mastercard، American Express</div>
                            <div className="flex gap-2 mt-2">
                              {paymentLogos.card.map((logo, index) => (
                                <img key={index} src={logo} alt="card logo" className="h-6 object-contain" />
                              ))}
                            </div>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-3 cursor-pointer flex-1">
                          <Building className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">تحويل بنكي</div>
                            <div className="text-sm text-muted-foreground">التحويل المباشر من البنك</div>
                            <div className="flex gap-2 mt-2">
                              {paymentLogos.bank.map((logo, index) => (
                                <img key={index} src={logo} alt="bank logo" className="h-6 object-contain grayscale opacity-70" />
                              ))}
                            </div>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="flex items-center gap-3 cursor-pointer flex-1">
                          <Smartphone className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">المحفظة الرقمية</div>
                            <div className="text-sm text-muted-foreground">مدى Pay، Apple Pay، STC Pay</div>
                            <div className="flex gap-2 mt-2">
                              {paymentLogos.mobile.map((logo, index) => (
                                <img key={index} src={logo} alt="mobile wallet logo" className="h-6 object-contain" />
                              ))}
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <Separator />
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="cardNumber">رقم البطاقة</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">رمز الأمان</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">اسم حامل البطاقة</Label>
                        <Input
                          id="cardName"
                          placeholder="كما هو مكتوب على البطاقة"
                          className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank Transfer Details */}
                {paymentMethod === "bank" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <Separator />
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h3 className="font-medium mb-2">تفاصيل التحويل البنكي</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">اسم البنك:</span>
                          <span className="font-medium">البنك الأهلي التجاري</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">رقم الحساب:</span>
                          <span className="font-medium">SA03 8000 1234 5678 9012 3456</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">اسم المستفيد:</span>
                          <span className="font-medium">ERP90 للتجارة الإلكترونية</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">IBAN:</span>
                          <span className="font-medium">SA03 8000 1234 5678 9012 3456</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        سيتم تفعيل اشتراكك خلال 24 ساعة عمل بعد استلام التحويل
                      </p>
                    </div>
                  </div>
                )}

                {/* Mobile Wallet Details */}
                {paymentMethod === "mobile" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <Separator />
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="mobileProvider">مزود الخدمة</Label>
                        <select
                          id="mobileProvider"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                        >
                          <option value="">اختر مزود الخدمة</option>
                          <option value="stc">STC Pay</option>
                          <option value="mada">Mada Pay</option>
                          <option value="apple">Apple Pay</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="mobileNumber">رقم الجوال</Label>
                        <Input
                          id="mobileNumber"
                          placeholder="05XXXXXXXX"
                          className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Billing Information */}
                <div className="space-y-4">
                  <Separator />
                  <Label className="text-base font-semibold">معلومات الفوترة</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input id="firstName" className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">اسم العائلة</Label>
                      <Input id="lastName" className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" placeholder="+966 5X XXX XXXX" className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">اسم الشركة</Label>
                    <Input id="company" className="border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors border-gray-300 mt-1" />
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">معاملة آمنة</p>
                    <p className="text-muted-foreground">
                      جميع بياناتك محمية بتشفير SSL 256-bit وتتوافق مع معايير PCI DSS
                    </p>
                  </div>
                </div>

                {/* Payment Button */}
                <Button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full h-12 text-base font-semibold shadow-md"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <Loader className="w-4 h-4 animate-spin" />
                      جاري المعالجة...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      إتمام الدفع - {total} ريال
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-lg border-border/40 animate-fade-in-up sticky top-8">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle>ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Selected Plan */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{planName}</h3>
                      <p className="text-sm text-muted-foreground">اشتراك شهري</p>
                    </div>
                    <Badge variant="secondary" className="px-2 py-1">مُختار</Badge>
                  </div>
                  
                  {/* Plan Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground mb-3">المميزات المشمولة:</p>
                    {features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    {features.length > 4 && (
                      <p className="text-xs text-muted-foreground mt-2">+ {features.length - 4} مميزات أخرى</p>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">سعر الباقة</span>
                    <span className="font-medium">{planPrice} ريال</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">ضريبة القيمة المضافة (15%)</span>
                    <span className="font-medium">{tax} ريال</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>المجموع الكلي</span>
                    <span className="text-primary">{total} ريال</span>
                  </div>
                </div>

                {/* Free Trial Notice */}
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">تجربة مجانية 30 يوم</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    لن يتم خصم أي مبلغ الآن. ستبدأ الفوترة بعد انتهاء فترة التجربة المجانية.
                  </p>
                </div>

                {/* Money Back Guarantee */}
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-foreground">ضمان استرداد المال</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ضمان استرداد كامل خلال 30 يوم من تاريخ الاشتراك
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;