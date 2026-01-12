import React from 'react';

export const RulesSection7: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        7. Групповые занятия
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">7.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запись на групповые занятия производится заранее через систему бронирования или на рецепции клуба. Количество мест ограничено.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">7.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Отмена бронирования должна быть произведена не менее чем за 2 часа до начала занятия. При неявке на занятие без предварительной отмены бронирования, посетитель может быть лишен права записи на групповые занятия на определенный срок.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">7.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Опоздание на групповое занятие более чем на 10 минут не допускается. Опоздавшие посетители не допускаются в зал, чтобы не мешать занятию.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">7.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Во время групповых занятий необходимо следовать указаниям инструктора и соблюдать технику безопасности.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">7.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается использование мобильных телефонов во время групповых занятий (кроме случаев экстренной необходимости).
          </p>
        </div>
      </div>
    </>
  );
};
