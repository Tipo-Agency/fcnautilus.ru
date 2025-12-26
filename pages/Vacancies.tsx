
import React from 'react';
import { motion } from 'framer-motion';
import { VACANCIES } from '../constants';
import { ArrowUpRight, Zap, Target, Award } from 'lucide-react';

const Vacancies: React.FC = () => {
  return (
    <div className="pt-32 pb-40 bg-black text-white">
      <div className="container mx-auto px-4">
        <header className="mb-32 text-center">
          <h1 className="text-[12vw] font-black leading-none outline-text italic mb-6 uppercase">КАРЬЕРА</h1>
          <h2 className="text-5xl md:text-7xl font-black italic mb-10 -mt-10 md:-mt-20 uppercase text-nautilus">СТАНЬ ЧАСТЬЮ ЭЛИТЫ</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Мы не просто нанимаем сотрудников. Мы создаем команду лидеров, которые меняют жизнь людей каждый день.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {VACANCIES.map((v) => (
            <motion.div 
              key={v.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-12 rounded-[4rem] group hover:bg-white hover:text-black transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="text-nautilus font-black text-xs uppercase mb-2 block tracking-widest">АКТИВНАЯ ВАКАНСИЯ</span>
                  <h3 className="text-4xl font-black italic uppercase leading-none">{v.title}</h3>
                </div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black/20">
                  <ArrowUpRight size={32}/>
                </div>
              </div>
              
              <div className="flex gap-4 mb-10">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-black uppercase group-hover:bg-black/5">{v.salary}</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-black uppercase group-hover:bg-black/5 tracking-wider">ПОЛНАЯ ЗАНЯТОСТЬ</span>
              </div>

              <div className="space-y-6 mb-12">
                 {v.requirements.map((req, idx) => (
                   <div key={idx} className="flex items-center gap-3 font-bold text-sm italic uppercase">
                      <Zap size={14} className="text-nautilus"/> {req}
                   </div>
                 ))}
              </div>

              <button className="w-full py-4 bg-nautilus text-white font-black italic uppercase rounded-2xl hover:bg-black transition-colors">
                ОТКЛИКНУТЬСЯ
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 bg-nautilus p-12 md:p-24 rounded-[5rem] flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
           <div className="flex-1 relative z-10 text-white">
             <h3 className="text-6xl font-black italic uppercase mb-8">Не нашел себя?</h3>
             <p className="text-xl opacity-80 mb-10">Если ты считаешь, что можешь усилить Nautilus — присылай свое резюме с пометкой "Свободный атлет".</p>
             <button className="px-12 py-6 bg-white text-nautilus font-black text-xl italic skew-x-[-10deg] hover:bg-black hover:text-white transition-all uppercase">
               ОТПРАВИТЬ РЕЗЮМЕ
             </button>
           </div>
           <div className="flex-1 grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
                 <Target className="mb-4" size={32}/>
                 <p className="font-black italic uppercase">АМБИЦИИ</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
                 <Award className="mb-4" size={32}/>
                 <p className="font-black italic uppercase">ПЕРФЕКЦИОНИЗМ</p>
              </div>
           </div>
           <div className="absolute top-0 right-0 text-[30rem] font-black opacity-10 italic translate-x-1/2 translate-y-1/2 select-none pointer-events-none uppercase">СИЛА</div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
