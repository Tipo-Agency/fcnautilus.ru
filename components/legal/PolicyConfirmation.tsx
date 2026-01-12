import React from 'react';

export const PolicyConfirmation: React.FC = () => {
  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="bg-nautilus/10 rounded-2xl p-8 border border-nautilus/30">
        <p className="text-sm md:text-base leading-relaxed font-bold">
          Подтверждаю, что ознакомлен(а) с положениями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных», права и обязанности в области защиты персональных данных мне разъяснены.
        </p>
      </div>
    </div>
  );
};
