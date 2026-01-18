import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const location = useLocation();

  // Прокрутка к нужной секции при загрузке страницы
  useEffect(() => {
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Небольшая задержка для полной загрузки страницы
        setTimeout(() => {
          const headerOffset = 100; // Отступ от верха для фиксированного хедера
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
      }
    };

    // Проверяем state для scrollTo
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      scrollToSection(state.scrollTo);
      return;
    }

    // Также проверяем hash в URL (на случай прямого перехода)
    const hash = location.hash || window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '').split('/').pop() || hash.substring(1);
      if (sectionId && sectionId !== 'services') {
        scrollToSection(sectionId);
      }
    }
  }, [location.pathname, location.hash, location.state]);

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full max-w-full">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="/images/херо блок.jpg" 
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
              <h1 className="text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[12vw] font-black leading-none mb-6 md:mb-4 outline-text tracking-tighter italic uppercase text-center">
                КАТАЛОГ
              </h1>
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-6 sm:-mt-8 md:-mt-20 lg:-mt-24 text-center">
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
      <section className="py-40 bg-black w-full max-w-full">
        <div className="container mx-auto px-4">
          <div className="space-y-64">
            {SERVICES.map((s, idx) => (
              <motion.div 
                id={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                key={s.id} 
                className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} scroll-mt-24`}
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
