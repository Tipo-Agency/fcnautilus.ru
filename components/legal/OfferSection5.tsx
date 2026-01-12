import React from 'react';

export const OfferSection5: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        5. Ответственность сторон
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб не несет ответственность за состояние здоровья Клиента.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб не несет ответственности за вред, причиненный жизни и здоровью Клиента, в случаях ненадлежащего исполнения Клиентом обязательств по настоящему Договору, нарушений требований инструктора и Правил Клуба.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клиент несет материальную ответственность за порчу оборудования и имущества Клуба за исключением его физического износа.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб не несет ответственность за сохранность личных вещей Клиентов, оставленных без присмотра.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.5.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Клуб не несет ответственности за технические неудобства, вызванные проведением сезонных, профилактических и аварийных работ службами коммунального хозяйства.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.6.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При наступлении обстоятельств непреодолимой силы, находящихся вне разумного предвидения и контроля Сторон, Стороны освобождаются от ответственности по обязательствам, связанным с полным или частичным исполнением Договора во время действия таких обстоятельств либо их последствий.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="font-bold text-nautilus mb-3 text-lg">5.7.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Споры и/или разногласия будут решаться Сторонами путем переговоров, а в случае не достижения согласия, в соответствии с действующим законодательством Российской Федерации.
          </p>
        </div>
      </div>
    </>
  );
};
