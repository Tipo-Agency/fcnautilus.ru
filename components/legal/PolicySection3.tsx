import React from 'react';

export const PolicySection3: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        3. Действия с персональными данными
      </h2>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
        <p className="text-sm md:text-base leading-relaxed mb-4">
          Согласие дается на следующие действия с персональными и биометрическими данными:
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          Обработка вышеуказанных персональных данных будет осуществляться путем смешанной обработки персональных данных (сбор, систематизация, накопление, хранение, уточнение (обновление, изменения использования, распространение), передачу, обезличивание, блокирование, уничтожение персональных данных. Общее описание вышеуказанных способов обработки данных приведено в ФЗ №152 от 27.07.2006 г.
        </p>
      </div>
    </>
  );
};
