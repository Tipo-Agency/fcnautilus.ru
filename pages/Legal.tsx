import React from 'react';
import { motion } from 'framer-motion';
import { OfferSection1 } from '../components/legal/OfferSection1';
import { OfferSection2 } from '../components/legal/OfferSection2';
import { OfferSection3 } from '../components/legal/OfferSection3';
import { OfferSection4 } from '../components/legal/OfferSection4';
import { OfferSection5 } from '../components/legal/OfferSection5';
import { OfferRequisites } from '../components/legal/OfferRequisites';

const Legal: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nautilus/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">
              <span className="outline-text">ПУБЛИЧНАЯ</span> <br />
              <span className="text-nautilus">ОФЕРТА</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-bold italic">
              О заключении договора абонентского оказания<br />
              физкультурно-оздоровительных услуг
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl"
        >
          {/* Header с утверждением */}
          <div className="text-right mb-12 pb-8 border-b border-white/10">
            <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">УТВЕРЖДАЮ</p>
            <p className="text-base font-bold mb-1">Генеральный директор</p>
            <p className="text-base font-bold mb-1">ООО «Контур Билд»</p>
            <p className="text-base font-bold mb-2">Донских С.Г.</p>
            <p className="text-sm font-bold text-white/60 mt-4">г. Хабаровск</p>
          </div>

          <div className="space-y-8">
            <OfferSection1 />
            <OfferSection2 />
            <OfferSection3 />
            <OfferSection4 />
            <OfferSection5 />
            <OfferRequisites />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
