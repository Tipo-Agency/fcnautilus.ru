import React from 'react';

export const RulesSection6: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        6. Водный комплекс и бассейн
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">6.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Перед посещением бассейна обязательно необходимо принять душ с использованием мыла или геля для душа.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">6.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            В бассейне необходимо использовать купальный костюм. Запрещается заходить в бассейн в уличной одежде или обуви.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">6.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            В бассейне запрещено ныряние с бортиков, бег по территории бассейна, создание опасных ситуаций для других посетителей.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">6.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Дети до 14 лет могут посещать бассейн только в сопровождении взрослых. Ответственность за безопасность детей несет сопровождающий взрослый.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">6.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При наличии открытых ран, кожных заболеваний или инфекционных заболеваний посещение бассейна запрещено.
          </p>
        </div>
      </div>
    </>
  );
};
