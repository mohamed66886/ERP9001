import { Card, CardContent } from "@/components/ui/card";
import { 
  Store, 
  Utensils, 
  Shirt, 
  Stethoscope, 
  GraduationCap, 
  Car,
  Building2,
  Palette,
  Wrench,
  ShoppingBag
} from "lucide-react";
import { motion } from "framer-motion";

const IndustriesSection = () => {
  const industries = [
    {
      title: "التجارة الإلكترونية",
      description: "إدارة المتاجر والمبيعات الرقمية",
      image: "https://www.nutajr.com/blog/wp-content/uploads/2023/04/10-1.png"
    },
    {
      title: "المطاعم والمقاهي",
      description: "إدارة نقاط البيع والمخزون",
      image: "https://tryorder.com/wp-content/uploads/2024/03/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D9%88%D8%A7%D9%84%D9%83%D8%A7%D9%81%D9%8A%D9%87%D8%A7%D8%AA-03.jpg"
    },
    {
      title: "التصنيع والإنتاج",
      description: "إدارة المصانع وخطوط الإنتاج",
      image: "https://erpdova.com/wp-content/uploads/2020/12/Image-6.jpg"
    },
    {
      title: "التجارة والتوزيع",
      description: "إدارة سلاسل التوريد والمبيعات",
      image: "https://provisiontn.com/wp-content/uploads/2021/08/pexels-photo-6169668-1125x729.jpeg"
    },
    {
      title: "الخدمات الطبية",
      description: "إدارة العيادات والمراكز الطبية",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqhGw8toeFYgj8PIoatnI-jb2CrMtwH1ych8zi7VY-sIPYYQhPwXc7ED09ABnuhLJHnY&usqp=CAU"
    },

    {
      title: "المقاولات والإنشاءات",
      description: "إدارة المشاريع والموارد",
      image: "https://masteringstep.com/wp-content/uploads/2023/09/%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D9%85%D8%AE%D8%AA%D9%84%D9%81%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D9%88%D8%A3%D9%87%D9%85%D9%8A%D8%AA%D9%87%D8%A7-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%A5%D9%86%D8%B4%D8%A7%D8%A6%D9%8A.jpg.webp"
    },

  ];

  return (
    <section className=" pb-20 md:py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">أيًا كان مجال عملك</h1>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-2">
            <span className="text-primary">سيـساعدك دفتره في إدارته بكفاءة</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            نظام دفتره مصمم ليناسب مجالات العمل كافة من خلال العديد من البرامج القابلة للتخصيص بالكامل
          </p>
          <a href="#industries" className="text-base sm:text-lg text-primary font-bold underline">استعرض كل مجالات العمل</a>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6 items-end">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="flex flex-col items-center w-40 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(0,0,0,0.18)', y: -8 }}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-44 h-40 sm:h-52 object-cover rounded-lg shadow-md mb-2 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-1"
              />
              <h3 className="font-semibold text-foreground text-center text-base mb-1 group-hover:text-primary transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;