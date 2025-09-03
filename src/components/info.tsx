import React from "react";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <div className="bg-[#f7fafd]">
      <div className="flex flex-col md:flex-row items-center justify-between container min-h-screen p-4 md:p-16">
        {/* القسم الأيمن:  وصورة شخصية */}
        <motion.div
          className="flex flex-row items-center justify-center mt-6 md:mt-0 gap-4 md:gap-8"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="https://www.daftra.com//themed/multi_language/images/home/home-accounting-sc.webp" alt="person" className="w-[310px] md:w-[500px] z-10" />
        </motion.div>
        {/* القسم الأيسر: النص العربي */}
        <motion.div
          className="md:w-1/2 w-full text-right flex flex-col justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-xl md:text-4xl font-bold mb-3 md:mb-4 text-[#232a3b]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            برنامج <span className="text-blue-600">محاسبة</span> وقيود يومية متكامل لمتابعة أكثر دقة لأعمالك
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg text-[#6c7890] mb-4 md:mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            تابع دفاتر حساباتك وقيود اليومية في شركتك وتابع المعاملات المختلفة وراقب المصروفات والإيرادات إلخ. بالإضافة إلى دليل حسابات جاهز وقابل للتعديل حسب احتياجاتك، إدارة الماليات والدخول بين فروع شركتك المختلفة بإحترافية، مع متابعة دقيقة للتدفقات النقدية ومراكز التكلفة والموازنة العامة، راقب الأداء مع تقارير مفصلة عن الأرباح والخسائر لديك.
          </motion.p>
          <motion.ul
            className="space-y-3 md:space-y-4 text-base md:text-xl font-medium"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, delayChildren: 0.8 }
              }
            }}
            viewport={{ once: true }}
          >
            <motion.li
              className="flex items-center justify-end gap-1 md:gap-2"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <span>دليل الحسابات وقيود اليومية</span>
              <span className="bg-[#eaf0fa] p-1 md:p-2 rounded text-[#232a3b] text-sm md:text-base"><i className="fas fa-book"></i></span>
            </motion.li>
            <motion.li
              className="flex items-center justify-end gap-1 md:gap-2"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <span>المالية وإدارة المصروفات</span>
              <span className="bg-[#eaf0fa] p-1 md:p-2 rounded text-[#232a3b] text-sm md:text-base"><i className="fas fa-wallet"></i></span>
            </motion.li>
            <motion.li
              className="flex items-center justify-end gap-1 md:gap-2"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <span>إدارة الأصول</span>
              <span className="bg-[#eaf0fa] p-1 md:p-2 rounded text-[#232a3b] text-sm md:text-base"><i className="fas fa-building"></i></span>
            </motion.li>
            <motion.li
              className="flex items-center justify-end gap-1 md:gap-2"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <span>مراكز التكلفة</span>
              <span className="bg-[#eaf0fa] p-1 md:p-2 rounded text-[#232a3b] text-sm md:text-base"><i className="fas fa-cogs"></i></span>
            </motion.li>
            <motion.li
              className="flex items-center justify-end gap-1 md:gap-2"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <span>دورة الشيكات</span>
              <span className="bg-[#eaf0fa] p-1 md:p-2 rounded text-[#232a3b] text-sm md:text-base"><i className="fas fa-money-check-alt"></i></span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}