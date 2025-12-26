import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus Services" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-[12vw] font-black leading-none mb-6 md:mb-4 outline-text tracking-tighter italic uppercase text-center">
                КАТАЛОГ
              </h1>
              <h1 className="text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                <span className="text-nautilus">НАПРАВЛЕНИЙ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-bold italic mt-8">
              Мы собрали все передовые методики фитнеса под одной крышей. От силового тренинга до медитативных практик.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-64">
            {SERVICES.map((s, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                key={s.id} 
                className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                onMouseEnter={() => setHoveredServiceIndex(idx)}
                onMouseLeave={() => setHoveredServiceIndex(null)}
              >
                <div className="flex-1 group">
                  <div className="relative overflow-hidden rounded-[4rem]">
                    <img 
                      src={s.image} 
                      className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                      alt={s.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-nautilus font-black text-xs uppercase tracking-[0.3em] mb-6 block">#{idx + 1} НАПРАВЛЕНИЕ</span>
                  <h2 className="text-6xl md:text-8xl font-black mb-8 italic uppercase leading-none tracking-tighter">{s.title}</h2>
                  <p className="text-xl text-white/70 mb-12 leading-relaxed italic">{s.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {['Индивидуальный подход', 'Современное оборудование', 'Сертифицированные тренеры', 'Результат через 3 месяца'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg font-black italic uppercase">
                        <CheckCircle2 size={20} className="text-nautilus shrink-0"/>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const openForm = (window as any).openContactForm;
                      if (openForm && typeof openForm === 'function') {
                        openForm();
                      } else {
                        window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                      }
                    }}
                    className="px-12 py-6 font-black text-xl italic transition-all duration-300 transform hover:scale-110 uppercase flex items-center gap-4"
                    style={{
                      backgroundColor: hoveredServiceIndex === idx ? '#372da5' : 'white',
                      color: hoveredServiceIndex === idx ? 'white' : '#372da5'
                    }}
                  >
                    <span style={{ color: hoveredServiceIndex === idx ? 'white' : '#372da5', transition: 'color 0.3s' }}>
                      ЗАПИСАТЬСЯ
                    </span>
                    <ArrowRight 
                      size={24} 
                      style={{ 
                        color: hoveredServiceIndex === idx ? 'white' : '#372da5',
                        transition: 'color 0.3s'
                      }} 
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
