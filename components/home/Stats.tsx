import React from 'react';
import { Maximize, Waves, Users } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
      {/* Первый блок: 800 М² */}
      <div className="border-l-4 border-[#372da5] px-8 py-8 bg-white">
        <div className="relative mb-6">
          <div className="absolute -left-12 top-0 border border-gray-200 p-2 rounded-lg bg-white shadow-sm">
            <Maximize size={16} className="text-[#372da5]" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-8xl font-bold text-black" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '2px' }}>
              800
            </span>
            <span className="text-3xl font-bold text-black">М²</span>
          </div>
        </div>
        <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">
          СОВРЕМЕННОГО ФИТНЕСА
        </p>
      </div>

      {/* Второй блок: 2550 */}
      <div className="border-l-4 border-[#372da5] px-8 py-8 bg-white">
        <div className="flex items-center gap-4 mb-6">
          <Waves size={28} className="text-[#372da5] flex-shrink-0" />
          <span className="text-8xl font-bold text-black" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '2px' }}>
            2550
          </span>
        </div>
        <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">
          БОЛЬШОЙ БАССЕЙН
        </p>
      </div>

      {/* Третий блок: 50+ */}
      <div className="border-l-4 border-[#372da5] px-8 py-8 bg-white">
        <div className="flex items-center gap-4 mb-6">
          <Users size={28} className="text-[#372da5] flex-shrink-0" />
          <span className="text-8xl font-bold text-black" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '2px' }}>
            50+
          </span>
        </div>
        <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">
          ГРУППОВЫХ ПРОГРАММ
        </p>
      </div>
    </div>
  );
};

export default Stats;
