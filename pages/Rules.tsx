import React from 'react';
import { motion } from 'framer-motion';
import { RulesIntro } from '../components/legal/RulesIntro';
import { RulesSection1 } from '../components/legal/RulesSection1';
import { RulesSection2 } from '../components/legal/RulesSection2';
import { RulesSection3 } from '../components/legal/RulesSection3';
import { RulesSection4 } from '../components/legal/RulesSection4';
import { RulesSection5 } from '../components/legal/RulesSection5';
import { RulesSection6 } from '../components/legal/RulesSection6';
import { RulesSection7 } from '../components/legal/RulesSection7';
import { RulesSection8 } from '../components/legal/RulesSection8';
import { RulesSection9 } from '../components/legal/RulesSection9';
import { RulesFinal } from '../components/legal/RulesFinal';

const Rules: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-12 overflow-hidden w-full max-w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-nautilus/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">
              <span className="outline-text">ПРАВИЛА</span> <br />
              <span className="text-nautilus">ПОСЕЩЕНИЯ КЛУБА</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-bold italic">
              Общие правила и требования<br />
              для всех посетителей фитнес-клуба
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
            <RulesIntro />
            <RulesSection1 />
            <RulesSection2 />
            <RulesSection3 />
            <RulesSection4 />
            <RulesSection5 />
            <RulesSection6 />
            <RulesSection7 />
            <RulesSection8 />
            <RulesSection9 />
            <RulesFinal />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rules;
