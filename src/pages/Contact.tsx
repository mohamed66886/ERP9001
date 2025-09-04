import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building, Globe, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { submitContactForm, trackEvent } from "@/lib/vercel-utils";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
        formType: 'contact'
      };

      await submitContactForm(data);
      
      setSubmitStatus('success');
      trackEvent('contact_form_submitted', { 
        subject: data.subject,
        hasCompany: !!data.company 
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      trackEvent('contact_form_error', { error: (error as Error).message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+966 11 234 5678", "+966 50 123 4567"],
      description: "متاح من الأحد إلى الخميس، 8 ص - 8 م",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@erp90.com", "support@erp90.com"],
      description: "سنرد عليك خلال 24 ساعة",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["الرياض، المملكة العربية السعودية"],
      description: "طريق الملك فهد، حي الصحافة",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 8:00 - 17:00"],
      description: "الدعم الفني متاح 24/7",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const offices = [
    {
      city: "الرياض",
      address: "طريق الملك فهد، حي الصحافة",
      phone: "+966 11 234 5678",
      email: "riyadh@erp90.com",
      isMain: true
    },
    {
      city: "جدة",
      address: "طريق الأمير سلطان، حي الروضة",
      phone: "+966 12 345 6789",
      email: "jeddah@erp90.com",
      isMain: false
    },
    {
      city: "الدمام",
      address: "طريق الظهران، حي الفيصلية",
      phone: "+966 13 456 7890",
      email: "dammam@erp90.com",
      isMain: false
    }
  ];

  const departments = [
    {
      name: "المبيعات",
      email: "sales@erp90.com",
      phone: "+966 11 234 5000",
      description: "للاستفسارات حول المنتجات والعروض"
    },
    {
      name: "الدعم الفني",
      email: "support@erp90.com",
      phone: "+966 11 234 5600",
      description: "للمساعدة في المشكلات الفنية"
    },
    {
      name: "الشؤون المالية",
      email: "finance@erp90.com",
      phone: "+966 11 234 5700",
      description: "للاستفسارات حول الفواتير والمدفوعات"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "تواصل معنا - ERP90",
    description: "تواصل مع فريق خبراء ERP90 للحصول على استشارة مجانية ودعم فني متخصص",
    url: "https://erp90.cloud/contact",
    mainEntity: {
      "@type": "Organization",
      name: "ERP90",
      url: "https://erp90.cloud",
      logo: "https://erp90.cloud/hero.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+966112345678",
          contactType: "customer service",
          areaServed: "SA",
          availableLanguage: ["Arabic", "English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:00",
            closes: "17:00"
          }
        },
        {
          "@type": "ContactPoint",
          telephone: "+966 50 141 7237",
          contactType: "technical support",
          areaServed: "SA",
          availableLanguage: ["Arabic", "English"],
          hoursAvailable: "24/7"
        },
        {
          "@type": "ContactPoint",
          email: "sales@erp90.com",
          contactType: "sales",
          areaServed: "SA"
        }
      ],
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "طريق الملك فهد، حي الصحافة",
          addressLocality: "الرياض",
          addressRegion: "الرياض",
          postalCode: "12345",
          addressCountry: "SA"
        },
        {
          "@type": "PostalAddress",
          streetAddress: "طريق الأمير سلطان، حي الروضة",
          addressLocality: "جدة",
          addressRegion: "مكة المكرمة",
          postalCode: "23456",
          addressCountry: "SA"
        },
        {
          "@type": "PostalAddress",
          streetAddress: "طريق الظهران، حي الفيصلية",
          addressLocality: "الدمام",
          addressRegion: "المنطقة الشرقية",
          postalCode: "34567",
          addressCountry: "SA"
        }
      ]
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
          name: "تواصل معنا",
          item: "https://erp90.cloud/contact"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <SEO 
        page="contact"
        structuredData={structuredData}
        canonical="https://erp90.cloud/contact"
      />
      <div className="container max-w-6xl px-2 md:px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-6">
            اتصل بنا
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك. تواصل معنا في أي وقت وسيسعدنا الإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-12 mb-10 md:mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-border/50">
              <CardHeader className="bg-muted/30 pb-2 md:pb-4">
                <CardTitle className="text-base md:text-2xl flex items-center gap-1 md:gap-2">
                  <Send className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 md:pt-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">تم إرسال رسالتك بنجاح!</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      سنتواصل معك خلال 24 ساعة للرد على استفسارك.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-100 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-800">
                      <X className="w-5 h-5" />
                      <span className="font-medium">فشل في إرسال الرسالة</span>
                    </div>
                    <p className="text-red-700 text-sm mt-1">
                      {errorMessage}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="firstName" className="text-xs md:text-base">الاسم الأول</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="اسمك الأول" 
                        required 
                        className="h-10 md:h-12 text-xs md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="lastName" className="text-xs md:text-base">اسم العائلة</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="اسم عائلتك" 
                        required 
                        className="h-10 md:h-12 text-xs md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="email" className="text-xs md:text-base">البريد الإلكتروني</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="h-10 md:h-12 text-xs md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="phone" className="text-xs md:text-base">رقم الهاتف</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        placeholder="+966 50 123 4567" 
                        className="h-10 md:h-12 text-xs md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="company" className="text-xs md:text-base">اسم الشركة</Label>
                      <Input 
                        id="company" 
                        name="company"
                        placeholder="اسم شركتك" 
                        className="h-10 md:h-12 text-xs md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="subject" className="text-xs md:text-base">موضوع الرسالة</Label>
                      <Select name="subject" required>
                        <SelectTrigger className="h-10 md:h-12 text-xs md:text-base">
                          <SelectValue placeholder="اختر الموضوع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo" className="text-xs md:text-base">طلب عرض توضيحي</SelectItem>
                          <SelectItem value="pricing" className="text-xs md:text-base">استفسار عن الأسعار</SelectItem>
                          <SelectItem value="support" className="text-xs md:text-base">دعم فني</SelectItem>
                          <SelectItem value="partnership" className="text-xs md:text-base">شراكة</SelectItem>
                          <SelectItem value="other" className="text-xs md:text-base">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="message" className="text-xs md:text-base">الرسالة</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="أخبرنا كيف يمكننا مساعدتك..."
                      className="min-h-[100px] md:min-h-[140px] resize-vertical text-xs md:text-base"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-10 md:h-12 text-xs md:text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 md:gap-2">
                        إرسال الرسالة
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-md border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-base md:text-lg">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground mb-1 text-xs md:text-base">
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Action */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-base md:text-lg">
                  تحتاج مساعدة فورية؟
                </h3>
                <p className="text-muted-foreground mb-2 md:mb-4 text-xs md:text-sm">
                  تحدث مع أحد خبرائنا الآن
                </p>
                <Button size="lg" className="w-full gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  دردشة مباشرة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Departments Contact */}
        <div className="mb-10 md:mb-20">
          <h2 className="text-base md:text-3xl font-bold text-center text-foreground mb-4 md:mb-12">
            تواصل مع الأقسام
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {departments.map((dept, index) => (
              <Card 
                key={index} 
                className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <Building className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 md:mb-3 text-base md:text-lg">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-4">
                    {dept.description}
                  </p>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                    <p className="text-muted-foreground">{dept.email}</p>
                    <p className="text-muted-foreground">{dept.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-10 md:mb-20">
          <h2 className="text-base md:text-3xl font-bold text-center text-foreground mb-4 md:mb-12">
            مكاتبنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {offices.map((office, index) => (
              <Card 
                key={index} 
                className={`text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  office.isMain ? 'border-primary ring-1 ring-primary/20' : ''
                }`}
              >
                <CardContent className="p-4 md:p-6">
                  {office.isMain && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full mb-2 md:mb-4 font-medium">
                      المكتب الرئيسي
                    </div>
                  )}
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <MapPin className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 md:mb-3 text-base md:text-lg">
                    {office.city}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-3">
                    {office.address}
                  </p>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p className="text-muted-foreground">{office.phone}</p>
                    <p className="text-muted-foreground">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="mb-10 md:mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-border">
            <CardContent className="p-4 md:p-8 text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 md:mb-6">
                <Globe className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-base md:text-3xl font-bold text-foreground mb-2 md:mb-4">
                حضور عالمي
              </h2>
              <p className="text-muted-foreground mb-3 md:mb-6 max-w-2xl mx-auto text-xs md:text-lg">
                نحن نخدم عملاء في أكثر من 15 دولة حول العالم، مع فريق دعم متعدد اللغات
              </p>
              <div className="flex flex-wrap justify-center gap-1 md:gap-4">
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">السعودية</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">الإمارات</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">الكويت</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">قطر</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">عُمان</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">البحرين</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">مصر</Badge>
                <Badge variant="secondary" className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-base">الأردن</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center p-4 md:p-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <h2 className="text-base md:text-3xl font-bold text-foreground mb-2 md:mb-6">
            جاهز لتحويل أعمالك؟
          </h2>
          <p className="text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto text-xs md:text-lg">
            احجز عرض توضيحي مجاني اليوم واكتشف كيف يمكن لـ ERP90 تحسين كفاءة أعمالك
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
            <Button size="lg" className="px-6 md:px-8 gap-1 md:gap-2 text-xs md:text-base py-2 md:py-3">
              احجز عرض توضيحي
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-6 md:px-8 text-xs md:text-base py-2 md:py-3">
              ابدأ التجربة المجانية
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;