import React from "react";
import { motion } from "framer-motion";

const Dutycycle = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* القسم الأيمن: النص والعناوين */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-start text-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl sm:text-2xl md:text-4xl font-bold text-blue-700 mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              برنامج دورة العمل
            </motion.h2>
            <motion.h3
              className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              لتدفق أعمال أكثر سلاسة
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              أدر دورة العمل في شركتك بكفاءة وسلاسة، أصدر أوامر الشغل وتبع النفقات وعيّن الموظفين للمهام المختلفة، إلى جانب إدارة المواعيد والحجوزات بما يتوافق مع وردية عمل موظفيك. تتبع الوقت المستغرق في العمل على مشروعاتك سواء لفريق الموظفين الداخلي أو الموظفين المستقلين، واجمع الفواتير واحتسب التكاليف لكل مشروع على حدة مع مراقبة أداء تفصيلية عبر التقارير المالية والأرباح والخسائر والتقدم المحرز فيما يخص مشروعاتك المختلفة في الوقت الفعلي بدقة.
            </motion.p>
            {/* قائمة الميزات */}
            <motion.div
              className="flex flex-col gap-3 sm:gap-4 text-base sm:text-lg font-medium text-gray-800"
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
              <motion.div
                className="flex items-center gap-1 sm:gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                {/* أيقونة أمر الشغل */}
                <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#1976D2" strokeWidth="2"/><path d="M8 8h8v2H8zM8 12h8v2H8zM8 16h5v2H8z" fill="#1976D2"/></svg>
                <span>أوامر الشغل</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-1 sm:gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                {/* أيقونة إدارة الحجوزات */}
                <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none"><rect x="4" y="7" width="16" height="13" rx="4" stroke="#4FC3F7" strokeWidth="2"/><path d="M8 4v3M16 4v3" stroke="#4FC3F7" strokeWidth="2"/></svg>
                <span>إدارة الحجوزات</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-1 sm:gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                {/* أيقونة تتبع الوقت */}
                <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none"><circle cx="12" cy="12" r="10" stroke="#43A047" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#43A047" strokeWidth="2"/></svg>
                <span>تتبع الوقت</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
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
        {/* قسم الأسفل */}
        <motion.div
          className="mt-12 bg-[#2256c7]  rounded-[32px] p-4 sm:p-6 md:p-10 flex flex-col-reverse md:flex-row-reverse items-center justify-between relative overflow-hidden"
          style={{minHeight: 220}}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* نقش خلفية SVG */}
          <svg className="absolute hidden md:block left-0 bottom-0 h-full w-2/5" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: 1}}>
            <path opacity="0.25" d="M0 320C200 0 600 0 600 320" stroke="#fff" strokeDasharray="2 4" strokeWidth="2" />
            <circle cx="100" cy="200" r="120" fill="#fff" opacity="0.04" />
          </svg>
          {/* زر أخضر كبير */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center md:justify-end z-10 mt-4 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#6cc04a] hover:bg-[#5aa53e] text-white font-bold text-base sm:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300">
              ابدأ الاستخدام مجاناً
            </button>
          </motion.div>
          {/* النصوص */}
          <motion.div
            className="w-full md:w-2/3 text-white text-right z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 leading-snug">
              نظام متكامل قابل للتخصيص<br />
              ليناسب أكثر من 50 مجالاً مختلفاً
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl font-medium text-white/90">
              إمكانية تخصيص نظام دفترة حسب مجال عملك<br />
              بما في ذلك التطبيقات المضمّنة وتصميمات الواجهة لتحقيق أهداف أعمالك .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dutycycle;
