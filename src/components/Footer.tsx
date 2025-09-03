import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowLeft
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "من نحن", href: "/about" },
    { name: "فريق العمل", href: "/team" },
    { name: "الوظائف", href: "/careers" },
    { name: "الأخبار", href: "/news" },
  ];

  const productLinks = [
    { name: "الميزات", href: "/features" },
    { name: "الأسعار", href: "/pricing" },
    { name: "التحديثات", href: "/updates" },
    { name: "الأمان", href: "/security" },
  ];

  const supportLinks = [
    { name: "مركز المساعدة", href: "/help" },
    { name: "اتصل بنا", href: "/contact" },
    { name: "الدعم الفني", href: "/support" },
    { name: "البرامج التعليمية", href: "/tutorials" },
  ];

  const legalLinks = [
    { name: "شروط الاستخدام", href: "/terms" },
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "سياسة الكوكيز", href: "/cookies" },
    { name: "الامتثال", href: "/compliance" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container py-8 px-4 sm:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 sm:mb-4">
              ابق على اطلاع بآخر التحديثات
            </h3>
            <p className="text-background/80 mb-4 sm:mb-6 text-sm sm:text-base">
              اشترك في نشرتنا الإخبارية لتحصل على آخر الأخبار والتحديثات
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="البريد الإلكتروني"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60 text-sm sm:text-base"
              />
              <Button variant="secondary" className="whitespace-nowrap text-sm sm:text-base flex items-center justify-center">
                اشتراك
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-10 px-4 sm:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">ERP90</span>
            </Link>
            <p className="text-background/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              نظام إدارة الموارد المؤسسية الأكثر تطوراً في الشرق الأوسط. 
              نساعد الشركات على تنظيم أعمالها وزيادة كفاءتها من خلال حلول تقنية متقدمة.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-background/80 text-xs sm:text-sm">+966 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-background/80 text-xs sm:text-sm">info@erp90.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-background/80 text-xs sm:text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="hidden sm:block mb-8 lg:mb-0">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">الشركة</h4>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="hidden sm:block mb-8 lg:mb-0">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">المنتج</h4>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="hidden sm:block">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">الدعم</h4>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-background/10" />

      {/* Bottom Bar */}
      <div className="container py-4 px-4 sm:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-background/60 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} ERP90. جميع الحقوق محفوظة.
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-end">
            {legalLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="text-background/60 hover:text-background text-xs sm:text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;