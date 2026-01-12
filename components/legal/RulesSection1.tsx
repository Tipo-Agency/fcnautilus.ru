import React from 'react';

export const RulesSection1: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        1. Общие положения
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">1.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Посещение клуба возможно только при наличии действующего абонемента и клубной карты/браслета. При входе в клуб необходимо предъявить клубную карту/браслет администратору.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">1.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Время работы клуба: <span className="font-bold text-white">Будни 06:00-23:30, выходные 07:00-22:30</span>. Посещение клуба вне указанного времени не допускается.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">1.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб оставляет за собой право ограничивать доступ в определенные зоны клуба в связи с проведением технических работ, соревнований или других мероприятий. Информация об ограничениях размещается на информационных стендах и на сайте клуба.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">1.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Посетители обязаны соблюдать правила техники безопасности, санитарно-гигиенические требования и правила общественного порядка.
          </p>
        </div>
      </div>
    </>
  );
};
