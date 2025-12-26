import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CLUBS } from '../constants';
import { MapPin, Phone, CheckCircle2, Star, Maximize, ArrowRight } from 'lucide-react';

const Clubs: React.FC = () => {
  const [hoveredClubIndex, setHoveredClubIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus Clubs" 
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
                ЛОКАЦИИ
              </h1>
              <h1 className="text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                <span className="text-nautilus">КЛУБОВ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-bold italic mt-8">
              Два гиганта фитнеса. Бескомпромиссное оснащение. Выбирай свою арену.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clubs List */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-64">
            {CLUBS.map((club, i) => (
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                key={club.id} 
                className={`flex flex-col lg:flex-row gap-20 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                onMouseEnter={() => setHoveredClubIndex(i)}
                onMouseLeave={() => setHoveredClubIndex(null)}
              >
                <div className="flex-1 group">
                  <div className="relative overflow-hidden rounded-[4rem]">
                    <img 
                      src={club.image} 
                      className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                      alt={club.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 p-12 flex items-end">
                      <div className="w-full flex justify-between items-center">
                        <div>
                          <p className="text-nautilus font-black text-6xl italic leading-none">{club.area}</p>
                          <p className="text-xs font-black uppercase tracking-widest opacity-70">КВАДРАТНЫХ МЕТРОВ</p>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                          <Maximize size={32}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 py-10">
                  <div className="flex items-center gap-4 mb-8">
                    <Star className="text-nautilus fill-nautilus" size={24}/>
                    <span className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">СПЕЦИФИКАЦИЯ ЭЛИТ-КЛУБА</span>
                  </div>
                  <h2 className="text-7xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter leading-none">{club.name}</h2>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4 text-white/70">
                      <MapPin className="text-nautilus" size={24}/>
                      <span className="text-xl font-bold italic">{club.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                      <Phone className="text-nautilus" size={24}/>
                      <span className="text-xl font-bold italic">{club.phone}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md mb-12">
                    <h4 className="font-black text-xs uppercase tracking-widest text-white/30 mb-8">КЛЮЧЕВАЯ ИНФРАСТРУКТУРА</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                      {club.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-lg font-black italic uppercase group">
                          <CheckCircle2 size={18} className="text-nautilus group-hover:scale-125 transition-transform"/>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/clubs/${club.id}`}
                    className="w-full py-6 font-black text-xl italic transition-all transform hover:-translate-y-2 uppercase flex items-center justify-center gap-3 group rounded-xl"
                    style={{
                      backgroundColor: hoveredClubIndex === i ? '#372da5' : 'white',
                      color: hoveredClubIndex === i ? 'white' : 'black'
                    }}
                  >
                    <span style={{ color: hoveredClubIndex === i ? 'white' : 'black', transition: 'color 0.3s' }}>
                      ПОДРОБНЕЕ О КЛУБЕ
                    </span>
                    <ArrowRight 
                      size={20} 
                      className="group-hover:translate-x-2 transition-transform"
                      style={{ color: hoveredClubIndex === i ? 'white' : 'black', transition: 'color 0.3s' }}
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clubs;
