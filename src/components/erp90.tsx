import React from "react";
import { motion } from "framer-motion";

const Erp90Section = () => {
  return (
    <section className="w-full pt-8 pb-0 md:py-20 flex items-center justify-center bg-[#0057b8] relative overflow-hidden">
      {/* موجات خلفية */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1920 550" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C600 600 1320 0 1920 550V0H0Z" fill="url(#waveGradient)" fillOpacity="0.2" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1920" y2="550" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.1" />
              <stop offset="1" stopColor="#00eaff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-0 md:gap-20 max-w-5xl px-4 md:px-6">
        {/* الشعار في الأعلى على الموبايل */}
        <motion.div
          className="flex justify-center md:justify-start items-center w-full md:w-1/3 mb-6 md:mb-0 md:mt-0"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-white font-bold text-5xl md:text-7xl tracking-tight select-none">
            E
            <span className="text-[#00eaff]">RP90</span>
          </span>
        </motion.div>
        {/* العناصر تحت الشعار على الموبايل */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-right w-full md:w-2/3"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-white font-bold text-2xl md:text-4xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            احصل على تجربتك المجانية
          </motion.h2>
          <motion.p
            className="text-white text-base md:text-xl mb-6 md:mb-8 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            سجّل حسابك في دفترة في خطوات بسيطة من دون الحاجة إلى بطاقة ائتمان
          </motion.p>
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg text-lg md:text-xl mb-8 md:mb-10 transition self-center md:self-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            ابدأ الاستخدام مجانًا
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Erp90Section;