import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  ArrowLeft
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "sales",
      icon: ShoppingCart,
      title: "إدارة المبيعات",
      description: "نظام شامل لإدارة المبيعات والعملاء مع تتبع الأداء والتحليلات المتقدمة",
      features: ["إدارة العملاء", "تتبع المبيعات", "التقارير المفصلة", "إدارة الفرق"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "inventory",
      icon: Package,
      title: "إدارة المخزون",
      description: "تتبع دقيق للمخزون مع إنذارات النفاد وإدارة المستودعات المتعددة",
      features: ["تتبع المخزون", "إنذارات النفاد", "إدارة المستودعات", "التقييم التلقائي"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "accounting",
      icon: Calculator,
      title: "النظام المحاسبي",
      description: "نظام محاسبي متكامل يدعم معايير المحاسبة السعودية والدولية",
      features: ["دليل الحسابات", "القيود المحاسبية", "الميزانية العمومية", "التقارير المالية"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "crm",
      icon: Users,
      title: "إدارة علاقات العملاء",
      description: "نظام CRM شامل لإدارة العملاء وتحسين التفاعل معهم",
      features: ["قاعدة بيانات العملاء", "تتبع التفاعلات", "إدارة الفرص", "التسويق المباشر"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: "reports",
      icon: FileText,
      title: "التقارير والتحليلات",
      description: "تقارير تفصيلية وتحليلات ذكية لاتخاذ قرارات مدروسة",
      features: ["التقارير المالية", "تحليل الأداء", "التوقعات", "لوحات المتابعة"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "التحليلات المتقدمة",
      description: "رؤى ذكية وتحليلات متقدمة لنمو أعمالك",
      features: ["التحليل التنبؤي", "الذكاء الاصطناعي", "تحليل السوق", "التوصيات الذكية"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            خدماتنا المتكاملة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة شاملة من الحلول التقنية المتطورة لإدارة أعمالك بكفاءة وفعالية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-0 shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-center group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary"
                  >
                    <Link to={`/services/${service.id}`}>
                      اعرف أكثر
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-lg hero-gradient animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            جاهز لتجربة حلولنا المتكاملة؟
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكن لـ ERP90 تحسين أداء أعمالك
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              ابدأ التجربة المجانية
            </Button>
            <Button variant="outline-hero" size="lg">
              تحدث مع خبير
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;