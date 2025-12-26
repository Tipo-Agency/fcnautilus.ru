
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Play, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Bell, 
  CalendarCheck, 
  Smartphone,
  Download
} from 'lucide-react';
import { SERVICES } from '../constants';
import Philosophy from '../components/home/Philosophy';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const appY = useTransform(scrollYProgress, [0.3, 0.7], [30, -30]);
  const [isCardButtonHovered, setIsCardButtonHovered] = useState(false);
  const [isHeroButtonHovered, setIsHeroButtonHovered] = useState(false);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);
  const [isAppStoreHovered, setIsAppStoreHovered] = useState(false);

  // Убрали функцию кодировки, так как файлы теперь на латинице

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus Hero" 
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
                БЕЗГРАНИЧНАЯ
              </h1>
              <h1 className="text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                СИЛА И <span className="text-nautilus">МОЩЬ</span>
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Hero button clicked');
                  const openForm = (window as any).openContactForm;
                  if (openForm && typeof openForm === 'function') {
                    console.log('Calling global function');
                    openForm();
                  } else {
                    console.log('Dispatching event');
                    window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                  }
                }}
                className="px-12 py-6 font-black text-xl italic transition-all duration-300 transform hover:scale-110 skew-x-[-10deg] uppercase"
                style={{
                  backgroundColor: isHeroButtonHovered ? 'white' : '#372da5',
                  color: isHeroButtonHovered ? '#372da5' : 'white'
                }}
                onMouseEnter={() => setIsHeroButtonHovered(true)}
                onMouseLeave={() => setIsHeroButtonHovered(false)}
              >
                <span style={{ color: isHeroButtonHovered ? '#372da5' : 'white', transition: 'color 0.3s' }}>
                  ПРИСОЕДИНИТЬСЯ К КЛУБУ
                </span>
              </button>
              <button className="flex items-center gap-4 group">
                <span className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Play fill="currentColor" size={24}/>
                </span>
                <span className="font-bold tracking-widest text-sm uppercase italic">СМОТРЕТЬ ФИЛЬМ</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Componentized Philosophy Section */}
      <Philosophy />

      {/* Services Section */}
      <section className="py-40 bg-black overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-[8vw] font-black leading-none outline-text italic uppercase">НАПРАВЛЕНИЯ</h2>
        </div>
        <div className="flex gap-8 px-4 overflow-x-auto no-scrollbar pb-10">
          {SERVICES.map((s, i) => (
            <motion.div 
              whileHover={{ y: -20 }}
              key={i} 
              className="min-w-[400px] h-[600px] relative rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5"
              onMouseEnter={() => setHoveredServiceIndex(i)}
              onMouseLeave={() => setHoveredServiceIndex(null)}
            >
              <img 
                src={s.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0" 
                alt={s.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 p-12 flex flex-col justify-end">
                <span className="text-nautilus font-black text-xs uppercase mb-2">#{i + 1}</span>
                <h3 className="text-4xl font-black text-white mb-4 italic uppercase min-h-[4.5rem] flex items-end leading-tight">{s.title}</h3>
                <p className="text-white/60 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">{s.description}</p>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: hoveredServiceIndex === i ? '#372da5' : 'white',
                  }}
                >
                  <ArrowRight 
                    size={20} 
                    style={{ 
                      color: hoveredServiceIndex === i ? 'white' : 'black',
                      transition: 'color 0.3s'
                    }} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Section */}
      <section className="py-12 bg-zinc-950 relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                 <Smartphone className="text-nautilus" size={20} />
                 <span className="text-nautilus font-black text-[10px] tracking-[0.3em] uppercase">Digital Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 italic uppercase leading-tight">
                Управляй своим <br />прогрессом <span className="text-white opacity-50">в приложении</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {[
                  { icon: <Clock size={14} />, text: 'Расписание' },
                  { icon: <Zap size={14} />, text: 'Запись в клик' },
                  { icon: <Bell size={14} />, text: 'Push-уведомления' },
                  { icon: <CalendarCheck size={14} />, text: 'Абонементы' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-nautilus">{feature.icon}</div>
                    <p className="text-[11px] font-bold uppercase italic tracking-tight text-white/70">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://apps.apple.com/ru/app/%D1%84%D0%BA-%D0%BD%D0%B0%D1%83%D1%82%D0%B8%D0%BB%D1%83%D1%81/id1057973232" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg text-[10px] font-black italic transition-all"
                  style={{
                    backgroundColor: isAppStoreHovered ? '#372da5' : 'white',
                    color: isAppStoreHovered ? 'white' : 'black'
                  }}
                  onMouseEnter={() => setIsAppStoreHovered(true)}
                  onMouseLeave={() => setIsAppStoreHovered(false)}
                >
                  <Download 
                    size={14} 
                    style={{ 
                      color: isAppStoreHovered ? 'white' : 'black',
                      transition: 'color 0.3s'
                    }} 
                  />
                  <span>APP STORE</span>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.itrack.nautilus&hl=ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-white/20 text-white rounded-lg text-[10px] font-black italic hover:border-nautilus hover:text-nautilus transition-all"
                >
                  <Download size={14} />
                  GOOGLE PLAY
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: appY }}
              className="relative w-full max-w-[280px] lg:max-w-[320px]"
            >
              <img 
                src="https://i.ibb.co/wN1Gqjg8/Group-1.png" 
                alt="Nautilus App" 
                className="w-full h-auto drop-shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nautilus/20 blur-[80px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-40 bg-nautilus text-white relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
             <h2 className="text-6xl md:text-8xl font-black leading-none italic uppercase mb-10">Стань часть <br /> легенды.</h2>
             <p className="text-2xl opacity-80 mb-12 italic">Особые условия для новых атлетов до конца мая.</p>
             <ul className="space-y-6 mb-12">
               {['Безлимитный доступ 24/7', 'Персональный разбор целей', 'Доступ во все клубы сети'].map((t, i) => (
                 <li key={i} className="flex items-center gap-4 font-black text-xl italic uppercase">
                   <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                     <CheckCircle2 size={16}/>
                   </div>
                   {t}
                 </li>
               ))}
             </ul>
             <button
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 console.log('Card button clicked');
                 const openForm = (window as any).openContactForm;
                 if (openForm && typeof openForm === 'function') {
                   console.log('Calling global function');
                   openForm();
                 } else {
                   console.log('Dispatching event');
                   window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                 }
               }}
               className="px-16 py-8 font-black text-2xl skew-x-[-10deg] transition-all duration-300 inline-flex items-center gap-4 uppercase italic"
               style={{
                 backgroundColor: isCardButtonHovered ? 'black' : 'white',
                 color: isCardButtonHovered ? 'white' : '#372da5'
              }}
              onMouseEnter={() => setIsCardButtonHovered(true)}
              onMouseLeave={() => setIsCardButtonHovered(false)}
             >
               <span style={{ color: isCardButtonHovered ? 'white' : '#372da5', transition: 'color 0.3s' }}>ВЫБРАТЬ КАРТУ</span>
               <ArrowUpRight size={28} style={{ color: isCardButtonHovered ? 'white' : '#372da5', transition: 'color 0.3s' }} />
             </button>
           </div>
           <div className="relative">
             <div className="absolute -inset-10 bg-white/10 blur-[100px] rounded-full"></div>
              <img 
                src="/images/stan-chastyu-legendy.jpg" 
                alt="Nautilus Interior" 
                className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 w-full aspect-[4/5] object-cover"
              />
           </div>
        </div>
        <div className="absolute top-0 right-0 text-[20rem] font-black opacity-5 select-none pointer-events-none -translate-y-1/2 uppercase italic">ВСТУПАЙ</div>
      </section>
    </div>
  );
};

export default Home;
