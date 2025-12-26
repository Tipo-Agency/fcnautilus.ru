import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NEWS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

const News: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus News" 
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
                НОВОСТИ
              </h1>
              <h1 className="text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                <span className="text-nautilus">СЕТИ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-bold italic mt-8">
              Следи за пульсом Nautilus. События, обновления, драйв Хабаровска.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {NEWS.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[3rem] mb-8 h-[500px]">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-xs font-black uppercase border border-white/20">
                    <Calendar size={14} className="text-nautilus"/> {item.date}
                  </div>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-4 group-hover:text-nautilus transition-colors leading-none">{item.title}</h3>
                <button className="flex items-center gap-3 text-nautilus font-black text-xs uppercase tracking-widest group-hover:gap-6 transition-all italic">
                  ЧИТАТЬ ПОЛНОСТЬЮ <ArrowRight size={14}/>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
