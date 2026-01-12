import React from 'react';

export const RulesSection3: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        3. Правила поведения в клубе
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">3.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Посетители обязаны вести себя уважительно по отношению к другим посетителям и персоналу клуба. Запрещается использование нецензурной лексики, агрессивное поведение, создание конфликтных ситуаций.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">3.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается посещение клуба в состоянии алкогольного, наркотического или иного опьянения. Лица, находящиеся в таком состоянии, не допускаются в клуб.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">3.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            В клубе запрещено курение, употребление алкогольных напитков и наркотических средств.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">3.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается фото- и видеосъемка других посетителей без их согласия. Съемка для личных целей допускается только в личных зонах (раздевалка, душевая) и только с разрешения администрации.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">3.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Посетители обязаны соблюдать тишину в зонах отдыха и не мешать другим посетителям заниматься.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">3.6.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается порча имущества клуба. Посетители несут материальную ответственность за причиненный ущерб.
          </p>
        </div>
      </div>
    </>
  );
};
