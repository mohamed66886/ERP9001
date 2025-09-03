import { Card, CardContent } from "@/components/ui/card";
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
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const FeaturesGrid = () => {
  // قائمة المميزات كما في الصورة
  const features = [
    {
      icon: FileText,
      title: "الفواتير وعروض الأسعار",
      iconBg: "bg-white",
      iconColor: "text-blue-600"
    },
    {
      icon: Package,
      title: "نقاط البيع",
      iconBg: "bg-white",
      iconColor: "text-gray-600"
    },
    {
      icon: BarChart3,
      title: "العروض وقوائم الأسعار",
      iconBg: "bg-white",
      iconColor: "text-indigo-600"
    },
    {
      icon: Calculator,
      title: "إدارة الأقساط",
      iconBg: "bg-white",
      iconColor: "text-purple-600"
    },
    {
      icon: CreditCard,
      title: "العمولات والمبيعات المستهدفة",
      iconBg: "bg-white",
      iconColor: "text-teal-600"
    },
    {
      icon: Settings,
      title: "إدارة التأمينات",
      iconBg: "bg-white",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12">

          {/* يمين: المحتوى النصي والمميزات */}
          <motion.div
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-right">
              {/* العنوان والوصف */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-800 mb-6 leading-snug">
                  برنامج إدارة <span className="text-blue-600">مبيعات</span>
                  <br />
                  شامل لتحقيق أرباحك المستهدفة
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                  أصدر فواتيرك الإلكترونية والضريبية وعروض الأسعار بقوالب جاهزة قابلة للتخصيص 
                  حسب احتياجاتك، وحدد العروض على منتجاتك أو خدماتك، إلى جانب إمكانية إدارة 
                  التأمينات ومدفوعات العملاء مع خيارات دفع متعددة، أدر عمليات البيع من خلال نقاط 
                  البيع أو واجهة التسوق عبر الإنترنت، بما في ذلك تحديد مبيعاتك المستهدفة وعمولات 
                  ممثلي المبيعات لديك، مع تقارير تفصيلية لمتابعة العملية بأكملها.
                </p>
              </motion.div>

              {/* المميزات */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="flex items-center gap-2 sm:gap-3 text-right p-2 sm:p-3 rounded-lg hover:bg-slate-50 transition-colors"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${feature.iconBg} border border-slate-200`}>
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.iconColor}`} />
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 flex-1">{feature.title}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
          {/* يسار: صورة توضيحية */}
          <motion.div
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <img 
                src="https://daftra.com/themed/multi_language/images/home/home-sales-sc.webp" 
                alt="فاتورة" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;