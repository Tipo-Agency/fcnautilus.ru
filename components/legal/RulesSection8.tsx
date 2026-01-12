import React from 'react';

export const RulesSection8: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        8. Заморозка абонемента
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">8.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Заморозка абонемента (приостановка действия) возможна только в случаях, предусмотренных приобретенным абонементом (договорная заморозка).
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">8.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Минимальный срок договорной заморозки составляет 7 календарных дней. Максимальный срок заморозки определяется условиями приобретенного абонемента.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">8.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Для оформления заморозки необходимо обратиться на рецепцию клуба с заявлением и предоставить документы, подтверждающие необходимость заморозки (медицинская справка, командировочное удостоверение и т.д.), если это предусмотрено условиями абонемента.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">8.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Заморозка не предоставляется по основаниям, независящим от клуба (отпуск, личные обстоятельства и т.д.), если это не предусмотрено условиями абонемента.
          </p>
        </div>
      </div>
    </>
  );
};
