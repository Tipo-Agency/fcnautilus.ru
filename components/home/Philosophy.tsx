import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ChevronRight, Maximize, Waves, Users } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-white text-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Левая часть: Фото с бейджем */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Фото */}
              <img 
                src="/images/10-let.jpg" 
                className="rounded-[3.5rem] w-full aspect-[4/5] object-cover shadow-2xl"
                alt="Nautilus Core"
                onError={(e) => {
                  console.error('Ошибка загрузки изображения:', e);
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/10-let.jpg';
                }}
              />
              
              {/* Бейдж "10+ ЛЕТ" */}
              <div className="absolute top-[35%] -right-4 md:-right-10 bg-[#372da5] text-white p-10 md:p-14 rounded-[2.8rem] shadow-[0_25px_60px_rgba(55,45,165,0.4)]">
                <p className="text-4xl md:text-5xl font-extrabold italic leading-none mb-3 uppercase tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                  10+ ЛЕТ
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-90 text-center whitespace-nowrap">
                  ЛИДЕРСТВА В ХАБАРОВСКЕ
                </p>
              </div>
            </motion.div>
          </div>

          {/* Правая часть: Текст + Статистика + Видео */}
          <div className="lg:col-span-7 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Текст о Наутилусе */}
              <div className="space-y-6 mb-12">
                <p className="text-[#64748b] text-lg md:text-xl font-medium leading-relaxed">
                  Наутилус — самая крупная сеть фитнес-центров в Хабаровске, основанная профессионалами в фитнесе и людьми, которые так же успели добиться успеха в других направлениях бизнеса!
                </p>
                <p className="text-[#64748b] text-lg md:text-xl font-medium leading-relaxed">
                  Нашей сети фитнес-клубов уже более 10 лет. Она включает в себя 2 современных, больших фитнес-центра, которые подойдут и взрослым, и детям. Если вы ждали какого-то знака свыше, чтобы изменить себя — вот он! У нас есть все необходимые условия, чтобы помочь вам в этом!
                </p>
              </div>

              {/* Статистика - новый дизайн */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12">
                {/* Блок 1: 8000 М² */}
                <div className="border-l-4 border-[#372da5] bg-white">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Maximize size={18} className="text-[#372da5]" />
                    </div>
                    <div className="mb-2">
                      <div className="text-3xl md:text-4xl font-black text-black leading-tight">
                        8000 <span className="text-xl md:text-2xl">М²</span>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      СОВРЕМЕННОГО ФИТНЕСА
                    </p>
                  </div>
                </div>

                {/* Блок 2: 25м */}
                <div className="border-l-4 border-[#372da5] bg-white">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Waves size={18} className="text-[#372da5]" />
                    </div>
                    <div className="mb-2">
                      <div className="text-3xl md:text-4xl font-black text-black leading-tight">
                        25м
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      БОЛЬШОЙ БАССЕЙН
                    </p>
                  </div>
                </div>

                {/* Блок 3: 50+ */}
                <div className="border-l-4 border-[#372da5] bg-white">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Users size={18} className="text-[#372da5]" />
                    </div>
                    <div className="mb-2">
                      <div className="text-3xl md:text-4xl font-black text-black leading-tight">
                        50+
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      ГРУППОВЫХ ПРОГРАММ
                    </p>
                  </div>
                </div>
              </div>

              {/* Кнопка видео-обзора */}
              <Link 
                to="/video-tour" 
                className="flex items-center justify-between w-full bg-[#f8fafc] hover:bg-slate-100 p-10 rounded-[2.8rem] group transition-all border border-slate-100/50"
              >
                <div className="flex items-center gap-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#372da5] shadow-md group-hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-extrabold italic uppercase tracking-widest mb-1 leading-none text-black">
                      СМОТРЕТЬ ВИДЕО-ОБЗОР
                    </h4>
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.25em]">
                      ПОГРУЖЕНИЕ В АТМОСФЕРУ КЛУБА
                    </p>
                  </div>
                </div>
                <ChevronRight size={36} className="text-[#1a1a1a] group-hover:translate-x-3 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
