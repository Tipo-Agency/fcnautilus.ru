import React from 'react';

export const OfferSection3: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        3. Регистрация клиента и порядок расчетов
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">3.1.</p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            При заключении настоящего Договора производится регистрация Клиента и клиенту выдается Клубный индивидуальный электронный браслет или клубная персональная карта (далее по тексту – Браслет/Карта), который является собственностью Клуба. При утрате Браслета Клиент возмещает Клубу его стоимость.
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            Регистрация клиента производится с использованием биометрических данных клиента, в т.ч. данные изображения лица и/или отпечатков пальцев. Подписывая настоящий договор, клиент одновременно дает согласие на осуществление Клубом фотографирования лица клиента, подтверждение изображения клиента, полученного с помощью программного обеспечения и/или подтверждение личности клиента с помощью отпечатка пальца, полученного с помощью программного обеспечения.
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            В случае отказа клиента от предоставления биометрических данных после заключения настоящего договора клубная карта/браслет ему не выдается и проход клиента на территорию клуба осуществляется при идентификации личности клиента по документу, удостоверяющему личность с обязательной фиксацией время входа-выхода в специальном журнале.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Стоимость одной регистрации Клиента входит в стоимость выбранного абонемента.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">3.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Браслет является основанием для входа в Клуб и получения Клиентом базового набора услуг, определённого выбранным абонементом, а также дополнительных услуг за отдельную плату, согласно Прайс-Листа Клуба.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">3.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При регистрации Клиента производится регистрация Лицевого счета Клиента, на котором отражаются все финансовые операции с Клиентом.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">3.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Оформление и активация Браслета осуществляется в Отделе продаж. Активация браслета происходит при первом посещении Клуба. Если Клиент не посетил Клуб в течение двух недель с даты заключения договора, браслет активируется на 15 день с даты заключения договора. Активация Браслета означает предоставление Клиенту права пользования выбранными и оплаченными услугами Клуба и производится при полной оплате стоимости выбранного абонемента. Клуб оказывает услугу Клиенту только при наличии положительного баланса на Лицевом счете Клиента.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">3.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб вправе предоставить рассрочку платежа, в таком случае Клиенту предоставляется право пользования услугами Клуба при условии, что Клиент соблюдает график внесения платежей. При нарушении графика внесения платежей Клуб вправе приостановить оказание услуг.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">3.6.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Распределение стоимости абонемента: <span className="font-bold text-white">30 %</span> - плата за регистрацию клиента, подготовку и выдачу Браслета, <span className="font-bold text-white">70 %</span> - цена доступа к услугам клуба на период, определенный абонементом.
          </p>
        </div>
      </div>
    </>
  );
};
