import React from 'react';
import { motion } from 'framer-motion';

const Tour3D: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-[12vw] md:text-[8vw] font-black leading-none outline-text italic uppercase mb-6 tracking-tighter">
              3D ТУР
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-bold italic uppercase tracking-widest mb-4">
              ПОГРУЖЕНИЕ В АТМОСФЕРУ КЛУБА
            </p>
            <p className="text-sm md:text-base text-white/50 font-medium max-w-2xl mx-auto">
              Исследуйте наш фитнес-клуб в интерактивном 3D туре. Прогуляйтесь по залам, 
              посмотрите оборудование и почувствуйте атмосферу Наутилус
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Tour Embed Section */}
      <section className="py-12 pb-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-black"
          >
            {/* 3D Tour iframe */}
            <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '480px', paddingBottom: '56.25%' }}>
              <iframe
                width="853"
                height="480"
                src="https://ep.matterport.host/index/?m=DTcCbvNreNQ"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking"
                className="absolute top-0 left-0 w-full h-full"
                style={{ minHeight: '480px', border: 'none', display: 'block' }}
                loading="lazy"
                title="3D Tour Nautilus"
              />
            </div>
          </motion.div>

          {/* Additional info section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 text-sm font-medium max-w-2xl mx-auto">
              Используйте мышь для навигации. Нажмите на точки интереса, чтобы перемещаться между помещениями.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tour3D;
