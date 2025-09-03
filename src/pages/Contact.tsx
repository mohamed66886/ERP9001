import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+966 11 234 5678", "+966 50 123 4567"],
      description: "متاح من الأحد إلى الخميس، 8 ص - 8 م"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@erp90.com", "support@erp90.com"],
      description: "سنرد عليك خلال 24 ساعة"
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["الرياض، المملكة العربية السعودية"],
      description: "طريق الملك فهد، حي الصحافة"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 8:00 - 17:00"],
      description: "الدعم الفني متاح 24/7"
    }
  ];

  const offices = [
    {
      city: "الرياض",
      address: "طريق الملك فهد، حي الصحافة",
      phone: "+966 11 234 5678",
      isMain: true
    },
    {
      city: "جدة",
      address: "طريق الأمير سلطان، حي الروضة",
      phone: "+966 12 345 6789",
      isMain: false
    },
    {
      city: "الدمام",
      address: "طريق الظهران، حي الفيصلية",
      phone: "+966 13 456 7890",
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            اتصل بنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا في أي وقت وسيسعدنا الإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" placeholder="اسمك الأول" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" placeholder="اسم عائلتك" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" placeholder="+966 50 123 4567" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">اسم الشركة</Label>
                    <Input id="company" placeholder="اسم شركتك" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع الرسالة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الموضوع" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">طلب عرض توضيحي</SelectItem>
                        <SelectItem value="pricing">استفسار عن الأسعار</SelectItem>
                        <SelectItem value="support">دعم فني</SelectItem>
                        <SelectItem value="partnership">شراكة</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea 
                    id="message" 
                    placeholder="أخبرنا كيف يمكننا مساعدتك..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up delay-200">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-card transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground mb-1">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-muted-foreground mt-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Quick Action */}
              <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    تحتاج مساعدة فورية؟
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    تحدث مع أحد خبرائنا الآن
                  </p>
                  <Button variant="hero" size="sm" className="w-full">
                    دردشة مباشرة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="animate-fade-in-up delay-300">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            مكاتبنا
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card 
                key={index} 
                className={`shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${
                  office.isMain ? 'border-primary' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  {office.isMain && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-4">
                      المكتب الرئيسي
                    </div>
                  )}
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">
                    {office.city}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {office.address}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {office.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-lg hero-gradient animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            جاهز لتحويل أعمالك؟
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            احجز عرض توضيحي مجاني اليوم واكتشف كيف يمكن لـ ERP90 تحسين كفاءة أعمالك
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              احجز عرض توضيحي
            </Button>
            <Button variant="outline-hero" size="lg">
              ابدأ التجربة المجانية
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;