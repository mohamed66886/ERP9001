import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: "الرئيسية", href: "/" },
    { name: "الخدمات", href: "/services" },
    { name: "الأسعار", href: "/pricing" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "اتصل بنا", href: "/contact" },
    { name: "المساعدة", href: "/docs" }
  ];

  return (

    <nav className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container mx-auto"> 
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Right side for RTL */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img src="/header.png" alt="Logo" className="h-8 w-auto" />
          </div>
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-lg font-bold transition-colors hover:text-primary ${
                isActive(item.href) 
                  ? "text-primary" 
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs - Left side */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
            دخول
          </Button>
          <Link
            to="/free-signup"
            className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-2 text-sm font-bold transition-colors"
          >
            ابدأ الاستخدام مجانًا
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-xl font-bold transition-colors hover:text-primary py-2 ${
                      isActive(item.href) 
                        ? "text-primary" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex flex-col gap-3 pt-6 border-t">
                <Button variant="outline" size="lg" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                  دخول
                </Button>
                <Link
                  to="/free-signup"
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-3 text-lg font-bold transition-colors text-center"
                >
                  ابدأ الاستخدام مجانًا
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
          </div>
    </nav>

  );
};

export default Navbar;