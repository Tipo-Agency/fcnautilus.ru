import React from 'react';
import { motion } from 'framer-motion';

const Tour3D: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-[12vw] md:text-[8vw] font-black leading-none outline-text italic uppercase mb-6 tracking-tighter">
              3D ТУР
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-bold italic uppercase tracking-widest">
              ПОГРУЖЕНИЕ В АТМОСФЕРУ КЛУБА
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Tour Embed Section */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://ep.matterport.host/index/?m=DTcCbvNreNQ"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking"
                className="absolute top-0 left-0 w-full h-full"
                style={{ minHeight: '480px' }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tour3D;
