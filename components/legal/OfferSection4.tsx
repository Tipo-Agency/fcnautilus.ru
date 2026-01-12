import React from 'react';

export const OfferSection4: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        4. Срок действия, порядок изменения и расторжения договора
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">4.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Срок действия договора <span className="font-bold text-white">464 календарных дня</span> (указанный срок не является сроком действия абонемента).
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">4.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клиент вправе в одностороннем порядке отказаться от исполнения настоящего Договора. В таком случае возврат денежных средств происходит пропорционально фактическому сроку действия абонемента на дату получения Клубом заявления Клиента об отказе от исполнения договора и возврата денежных средств. К примеру, если срок действия абонемента по договору 12 месяцев, а на дату написания заявления фактический срок действия абонемента составляет 3 месяца, то расчет происходит: 70% стоимости абонемента/12 месяцев*3месяца.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">4.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При передаче Клиентом всех прав и обязанностей по договору другому лицу (передача договора) Клиент оплачивает стоимость регистрации клиента по тарифам Клуба, действующим в момент регистрации нового Клиента. Передача прав и обязанностей по договору допускается один раз за весь срок действия договора.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">4.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб вправе обрабатывать персональные данные Заказчика в рамках оказания услуг.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">4.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            В соответствии с п. 4 ст. 9 Федерального закона «О персональных данных» от 27.07.2006 N152-ФЗ, Клиент, подписывая настоящий Договор, дает согласие Клубу в период действия Договора, а также в течение трех последующих лет на обработку своих персональных данных (сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, распространение (в том числе и передачу)  , обезличивание, блокирование, уничтожение; а также для передачи третьей стороне, то есть на совершение действий, предусмотренных п. 3 ч. 1 ст. 3 Федерального закона «О персональных данных».
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">4.6.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Стоимость переоформления абонемента – в соответствии с прайс-листом (Допускается однократное переоформление на другого человека, в случае невозможности посещения клуба).
          </p>
        </div>
      </div>
    </>
  );
};
