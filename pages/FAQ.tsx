
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-4 italic">Вопросы и ответы</h1>
          <p className="text-slate-500">Все, что вы хотели знать о Nautilus, но боялись спросить.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-100 last:border-0">
              <button 
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-bold transition-colors ${activeIdx === idx ? 'text-nautilus' : 'text-slate-900 group-hover:text-nautilus'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIdx === idx ? 'bg-nautilus text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                  {activeIdx === idx ? <Minus size={18}/> : <Plus size={18}/>}
                </div>
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-slate-500 leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
