import React from 'react';
import { MdPointOfSale,
  MdWarehouse,
MdAttachMoney,
MdPeople,
MdOutlineTimeline,
MdWorkOutline,

 } from "react-icons/md";
import { motion } from 'framer-motion';

const DefteraSystem = () => {
  const applications = [
    {
      title: "المخزون",
      description: "المنتجات وخدمات تحديد المخزون، المشتريات، المورودون، المستودعات، الجرد، فوائل الاسعار الأدوات المخزنية",
      icon: (
        <MdWarehouse className="h-10 w-10 text-green-500" />
      ),
      color: "bg-red-500"
    },
    {
      title: "المحاسبة العامة",
      description: "دورة الحياة الحسابية العامة، دفاتر وسجود العامة، الحسابات الأصول، مراكز التكلفة، حساب استناد التقارير المالية",
      icon: (
        <MdAttachMoney className="h-10 w-10 text-green-500" />
      ),
      color: "bg-green-500"
        },
        {
      title: "المبيعات",
      description: "النقاط الإلكترونية والشيكات: نقاط البيع، المحاسبة الإلكترونية، المبيعات المستحقة والعروض، الأقساط، التأمينات",
      icon: (
        <MdPointOfSale className="h-10 w-10 text-green-500" />
      ),
      color: "bg-blue-500"
        },
        {
      title: "علاقات العملاء",
      description: "إدارة العملاء، متابعة العملاء، المواعيد، النقاط والرسائل، التحويلات والشراكات، حضور العملاء",
      icon: (
        <MdPeople className="h-10 w-10 text-green-500" />
      ),
      color: "bg-teal-500"
    },
    {
      title: "إدارة العمليات",
      description: "أوامر الشغل المحجوزات، تموين الوقت",
      icon: (
       <MdOutlineTimeline className="h-10 w-10 text-green-500" />
      ),
      color: "bg-blue-500"
    },
    {
      title: "شؤون الموظفين",
      description: "الموظفين، الهيكل التنظيمي، حضور الموظفين، الرواتب، المعاشات، الطلبات، الإجازات، السلف",
      icon: (
<MdWorkOutline className="h-10 w-10 text-green-500" />
      ),
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f7] py-16 px-4 sm:px-6 lg:px-8 font-tajawal" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-right md:text-center mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6" style={{color: '#222e3a'}}>
            تطبيقات إدارة الأعمال المضمّنة في نظام
            <span style={{color: '#2256c7', fontWeight: 'bold', marginRight: 8}}>ERP90</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
            استخدم كافة التطبيقات المضمّنة في نظام دفترة مثاً لفعالية أكبر أو فعّل ما تحتاجه منها فقط حسب احتياجات أعمالك
          </p>
        </div>

        {/* بطاقات التطبيقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => (
            <motion.div 
              key={index}
              className="rounded-xl p-0 flex flex-col items-end text-right bg-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
            >
              <div className="w-full">
                <div className="flex flex-row gap-2 mb-2 justify-start">
                  <span className="flex justify-center">
                    {React.cloneElement(app.icon, { className: `h-8 w-8 md:h-10 md:w-10 ${app.color.replace('bg-', 'text-')} opacity-90` })}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
                      {app.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم الأسفل */}
        <motion.div
          className="mt-12 bg-[#2256c7] rounded-[32px] p-6 md:p-10 flex flex-col-reverse md:flex-row-reverse items-center justify-between relative overflow-hidden min-h-[269px]  md:min-h-[320px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* نقش خلفية SVG */}
          <svg className="absolute hidden md:block left-0 bottom-0 h-full w-2/5" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: 1}}>
            <path opacity="0.25" d="M0 320C200 0 600 0 600 320" stroke="#fff" strokeDasharray="2 4" strokeWidth="2" />
            <circle cx="100" cy="200" r="120" fill="#fff" opacity="0.04" />
          </svg>

          {/* زر أخضر كبير */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end z-10 mb-6 md:mb-0">
            <button className="bg-[#6cc04a] hover:bg-[#5aa53e] text-white font-bold text-base md:text-xl py-2 md:py-4 px-4 md:px-8 rounded-xl shadow-lg transition-all duration-300">
              ابدأ الاستخدام مجاناً
            </button>
          </div>

          {/* النصوص */}
          <div className="w-full md:w-2/3 text-white text-right z-10">
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
              نظام متكامل قابل للتخصيص<br />
              ليناسب أكثر من 50 مجالاً مختلفاً
            </h2>
            <p className="text-sm md:text-2xl font-medium text-white/90">
              إمكانية تخصيص نظام دفترة حسب مجال عملك<br />
              بما في ذلك التطبيقات المضمّنة وتصميمات الواجهة لتحقيق أهداف أعمالك .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DefteraSystem;