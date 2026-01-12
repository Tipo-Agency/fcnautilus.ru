import React from 'react';

export const RulesSection9: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        9. Ответственность посетителей
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">9.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Посетители несут полную ответственность за свое здоровье и безопасность во время занятий. Клуб рекомендует пройти медицинский осмотр перед началом занятий.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">9.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Посетители несут материальную ответственность за порчу оборудования и имущества клуба. Стоимость ремонта или замены поврежденного имущества взимается с виновного посетителя.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">9.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб не несет ответственности за сохранность личных вещей посетителей, оставленных без присмотра или в шкафчиках.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">9.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При нарушении настоящих Правил клуб вправе отказать посетителю в обслуживании и расторгнуть договор в одностороннем порядке без возврата денежных средств.
          </p>
        </div>
      </div>
    </>
  );
};
