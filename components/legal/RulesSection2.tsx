import React from 'react';

export const RulesSection2: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        2. Порядок входа и выхода
      </h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">2.1.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Вход в клуб осуществляется через турникет при предъявлении клубной карты/браслета. При первом посещении необходимо пройти регистрацию на рецепции.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">2.2.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При утере клубной карты/браслета необходимо немедленно сообщить об этом администратору. Восстановление карты/браслета производится за дополнительную плату согласно прайс-листу.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">2.3.</p>
          <p className="text-sm md:text-base leading-relaxed">
            Передача клубной карты/браслета третьим лицам запрещена. В случае обнаружения факта передачи карты/браслета другому лицу, клуб вправе заблокировать карту/браслет и расторгнуть договор в одностороннем порядке.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
          <p className="font-bold text-nautilus mb-3 text-lg">2.4.</p>
          <p className="text-sm md:text-base leading-relaxed">
            При превышении времени посещения клуба, предусмотренного выбранным абонементом, с посетителя взимается плата за дополнительное время согласно прайс-листу, либо автоматически происходит списание очередного посещения (если абонемент предусматривает ограниченное количество посещений).
          </p>
        </div>
      </div>
    </>
  );
};
