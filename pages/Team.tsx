import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COACHES } from '../constants';
import { Award, Target, MessageSquare, ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCoachIndex, setHoveredCoachIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus Team" 
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
                КОМАНДА
              </h1>
              <h1 className="text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                <span className="text-nautilus">ЧЕМПИОНОВ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-bold italic mt-8">
              Наши тренеры — это действующие атлеты, методисты и эксперты в области здоровья.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {['all', 'Тренажерный зал', 'Бассейн', 'Йога'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-4 rounded-full font-black text-sm italic uppercase transition-all ${
                  filter === cat 
                    ? 'bg-nautilus text-white' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat === 'all' ? 'ВСЕ ЭКСПЕРТЫ' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {COACHES.map((coach, idx) => (
              <motion.div 
                key={coach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredCoachIndex(idx)}
                onMouseLeave={() => setHoveredCoachIndex(null)}
              >
                <div className="relative overflow-hidden rounded-[3rem] mb-6 h-[500px]">
                  <img 
                    src={coach.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    alt={coach.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-xs font-black uppercase border border-white/20">
                      <Target size={14} className="text-nautilus"/> {coach.experience}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-black italic uppercase mb-2">{coach.name}</h3>
                  <p className="text-nautilus font-black text-xs uppercase tracking-[0.3em] mb-6">{coach.specialty}</p>
                  <div className="space-y-3 mb-8">
                    {coach.achievements.map((a, i) => (
                      <div key={i} className="flex items-center justify-center gap-3 text-sm font-black italic uppercase">
                        <Award size={16} className="text-nautilus shrink-0"/>
                        <span>{a}</span>
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
                    className="w-full py-4 bg-white text-black font-black text-lg italic uppercase hover:bg-nautilus hover:text-white transition-all rounded-xl flex items-center justify-center gap-3"
                    style={{
                      backgroundColor: hoveredCoachIndex === idx ? '#372da5' : 'white',
                      color: hoveredCoachIndex === idx ? 'white' : 'black'
                    }}
                  >
                    <span style={{ color: hoveredCoachIndex === idx ? 'white' : 'black', transition: 'color 0.3s' }}>
                      ВЫБРАТЬ
                    </span>
                    <ArrowRight 
                      size={20} 
                      style={{ 
                        color: hoveredCoachIndex === idx ? 'white' : 'black',
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

export default Team;
