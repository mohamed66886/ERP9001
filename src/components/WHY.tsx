import React from "react";
import { Headset } from "lucide-react";
import { motion } from "framer-motion";
import { MdViewModule, MdWidgets, MdDeveloperBoard , MdOutlineComputer , MdSecurity , MdLocalOffer
, MdAutorenew
,MdCloudUpload
,MdAccessTime
 } from "react-icons/md";
const features = [
  {
    title: "واجهة سهلة الاستخدام",
    desc: "أدر أعمالك بسهولة مع العديد من الخصائص والأدوات المضمنة في النظام.",
    icon: (
        <MdWidgets className="w-10 h-10 text-blue-600" />
    ),
  },
  {
    title: "تجربة مخصصة بالكامل",
    desc: "خصص النظام بما يتوافق مع مجال عملك من خلال تفعيل التطبيقات المناسبة.",
    icon: (
        <MdOutlineComputer className="w-10 h-10 text-blue-600" />
    ),
  },
  {
    title: "الأمان والحماية",
    desc: "يولي نظام دفترة اهتماماً بالغاً بسلامة بياناتكم على خوادمه، لذا استخدمه بثقة.",
    icon: (
        <MdSecurity className="w-10 h-10 text-blue-600" />
    ),
  },
  {
    title: "دعم فني متوفر مجاناً",
    desc: "احصل على دعم فني مجاني من فريق مكرس للرد على استفساراتكم واستشاراتكم.",
    icon: (
      <Headset className="w-10 h-10 text-blue-600" />    ),
  },
  {
    title: "سعر اقتصادي",
    desc: "احصل على نظام متكامل يتضمن كل ما تحتاجه بتكلفة تناسب كل الأعمال.",
    icon: (
        <MdLocalOffer className="w-10 h-10 text-blue-600" />
    ),
  },
  {
    title: "تحديثات دورية مجاناً",
    desc: "يعمل دفترة باستمرار على تطوير النظام بالكامل وتحديث تطبيقاته مجاناً.",
    icon: (
        <MdAutorenew className="w-10 h-10 text-blue-600" />),
  },
  {
    title: "من أي مكان وفي أي وقت",
    desc: "كونه نظاماً سحابياً على خوادم مؤمنة بالكامل، فسجل دفترة في متناولك دائماً.",
    icon: (
        <MdCloudUpload className="w-10 h-10 text-blue-600" />),
  },
  {
    title: "توفير الوقت والجهد",
    desc: "تابع مؤشرات أعمالك بدقة وأدر عملياتك بفعالية في خطوات بسيطة.",
    icon: (
        <MdAccessTime className="w-10 h-10 text-blue-600" />),
  },
];

export default function WHY() {
  return (
    <section className="bg-[#f7f9fa] py-16 px-2 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#222] leading-tight break-words"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          لماذا يُعَدّ <span className="text-blue-600">ERP90</span> شريكًا مثاليًا لأعمالك؟
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-[#222] mb-6 sm:mb-8 font-medium break-words"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          اكتشف كيف يساعدك نظام دفترة في إدارة أعمالك بكفاءة وفعالية
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, delayChildren: 0.5 }
            }
          }}
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center min-h-[180px] sm:min-h-[220px] hover:shadow-xl transition"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-[#222]">{feature.title}</h3>
              <p className="text-[#444] text-xs sm:text-sm font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
