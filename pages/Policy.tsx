import React from 'react';
import { motion } from 'framer-motion';
import { PolicyIntro } from '../components/legal/PolicyIntro';
import { PolicySection1 } from '../components/legal/PolicySection1';
import { PolicySection2 } from '../components/legal/PolicySection2';
import { PolicySection3 } from '../components/legal/PolicySection3';
import { PolicySection4 } from '../components/legal/PolicySection4';
import { PolicyConfirmation } from '../components/legal/PolicyConfirmation';

const Policy: React.FC = () => {
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
              <span className="outline-text">СОГЛАСИЕ</span> <br />
              <span className="text-nautilus">НА ОБРАБОТКУ ДАННЫХ</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-bold italic">
              Персональных и биометрических данных<br />
              (в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ)
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
          <div className="space-y-8">
            <PolicyIntro />
            <PolicySection1 />
            <PolicySection2 />
            <PolicySection3 />
            <PolicySection4 />
            <PolicyConfirmation />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Policy;
