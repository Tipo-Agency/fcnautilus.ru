import React from 'react';

export const RulesSection4: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        4. Правила использования оборудования
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">4.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Перед использованием тренажеров необходимо убедиться в их исправности. При обнаружении неисправности следует немедленно сообщить об этом администратору или тренеру.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">4.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Использование тренажеров должно осуществляться в соответствии с их назначением и инструкциями. При необходимости можно обратиться за консультацией к тренеру.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">4.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            После использования тренажеров необходимо вернуть инвентарь на место и протереть оборудование специальными салфетками, предоставленными клубом.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">4.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается оставлять личные вещи на тренажерах и в рабочих зонах. Личные вещи должны храниться в шкафчиках раздевалки.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">4.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается использование оборудования в обуви, которая может повредить покрытие или оборудование. Для занятий в тренажерном зале рекомендуется использовать спортивную обувь с чистой подошвой.
          </p>
        </div>
      </div>
    </>
  );
};
