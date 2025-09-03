import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image/Illustration */}
          <div className="relative animate-fade-in delay-200 order-first lg:order-last">
            <img src="/hero.png" alt="" />
          </div>
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up order-last lg:order-first">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                نظام{" "}
                <span className="text-gradient">ERP</span>{" "}
                متكامل
                <br />
            
                لإدارة كافة أعمالك
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              يعد ERP90 برنامج ERP متكامل يعمل على مساعدتك في إدارة كل جوانب أعمالك بواجهة
              سهلة الاستخدام تدعم اللغة العربية وأحدث قوانين ضريبة القيمة المضافة، وإدارة مبيعاتك ومخزونك وعملاؤك
              وموظفيك وحساباتك ودورة العمل لديك.
            </motion.p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                جاهز للعمل فوراً
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                من دون بطاقة ائتمانية
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                تجربة مجانية
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button variant="hero" size="lg" className="group bg-green-600 hover:bg-green-700 text-white">
                ابدأ الاستخدام مجانًا
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;