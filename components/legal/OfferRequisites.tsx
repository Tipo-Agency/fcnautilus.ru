import React from 'react';

export const OfferRequisites: React.FC = () => {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        Реквизиты и подписи сторон
      </h2>
      
      <div className="bg-nautilus/10 rounded-2xl p-8 border border-nautilus/30">
        <p className="font-bold text-xl mb-6 text-nautilus">Клуб</p>
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p className="font-bold text-lg">ООО «Контур Билд»</p>
          <p>Юр.адрес: 680009 г. Хабаровск проспект 60-летия Октября, 210</p>
          <p>Почтовый адрес:, 680009 г. Хабаровск проспект 60-летия Октября, 210</p>
          <p>ИНН/КПП   2724078830/272401001</p>
          <p>ОГРН 1042700255256</p>
          <p>Р/счет: 40702810220000002550</p>
          <p>в ФИЛИАЛ "ХАБАРОВСКИЙ" АО "АЛЬФА-БАНК"</p>
          <p>К/счет: 30101810800000000770</p>
          <p>БИК: 040813770</p>
        </div>
      </div>
    </div>
  );
};
