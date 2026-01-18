import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Tour3D: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Отладочная информация
    console.log('Tour3D page loaded');
    if (iframeRef.current) {
      console.log('Iframe element found:', iframeRef.current);
      iframeRef.current.addEventListener('load', () => {
        console.log('Iframe loaded successfully');
      });
      iframeRef.current.addEventListener('error', (e) => {
        console.error('Iframe error:', e);
      });
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden w-full max-w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-none outline-text italic uppercase mb-6 tracking-tighter">
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
      <section className="py-12 pb-32 relative w-full max-w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-black"
          >
            {/* 3D Tour iframe */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                ref={iframeRef}
                src="https://ep.matterport.host/index/?m=DTcCbvNreNQ"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking"
                className="w-full h-full"
                style={{ 
                  border: 'none', 
                  display: 'block',
                  minHeight: '600px',
                  width: '100%',
                  height: '100%'
                }}
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
