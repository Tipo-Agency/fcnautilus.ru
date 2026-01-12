import React from 'react';

export const RulesSection5: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        5. Раздевалки и душевые
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">5.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Шкафчики предоставляются во временное пользование на время посещения клуба. Ключи от шкафчиков выдаются на рецепции под залог или возвращаются при выходе из клуба.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">5.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб не несет ответственности за сохранность вещей, оставленных в шкафчиках. Для хранения ценных вещей рекомендуется использовать сейфовые ячейки, которые можно арендовать на рецепции.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">5.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            После использования душевой необходимо привести ее в порядок: убрать за собой использованные полотенца и средства гигиены.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">5.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Запрещается оставлять личные вещи в раздевалке после окончания посещения. Вещи, оставленные более чем на 24 часа, могут быть удалены администрацией.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">5.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            В раздевалках и душевых запрещено курение, употребление пищи и напитков.
          </p>
        </div>
      </div>
    </>
  );
};
