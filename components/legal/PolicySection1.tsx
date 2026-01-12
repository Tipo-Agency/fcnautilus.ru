import React from 'react';

export const PolicySection1: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        1. Цель обработки
      </h2>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
        <p className="text-sm md:text-base leading-relaxed">
          Целью обработки персональных и биометрических данных является выполнение поручения физических лиц (субъектов персональных данных), основанного на заключенном в простой письменной форме Договоре об оказании возмездных услуг с Оператором персональных данных об оказании физкультурно-оздоровительных услуг в каком-либо из фитнес-клубов «Панова-Лайф», «Наутилус, «Урбан», «Ривер клаб».
        </p>
      </div>
    </>
  );
};
