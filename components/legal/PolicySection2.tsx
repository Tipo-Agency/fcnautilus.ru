import React from 'react';

export const PolicySection2: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black uppercase mt-12 mb-6 text-nautilus flex items-center gap-4">
        <span className="w-2 h-12 bg-nautilus rounded-full"></span>
        2. Перечень персональных данных
      </h2>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-nautilus/30 transition-colors">
        <p className="text-sm md:text-base leading-relaxed mb-4">
          Перечень персональных данных, на обработку которых дается согласие субъекта персональных данных:
        </p>
        <ul className="space-y-2 text-sm md:text-base leading-relaxed ml-6 list-disc">
          <li>фамилия/фамилия при рождении, имя, отчество</li>
          <li>дата рождения</li>
          <li>место рождения</li>
          <li>государство рождения</li>
          <li>пол</li>
          <li>для несовершеннолетних: фамилия, имя, отчество, адрес и гражданство опекуна/законного представителя</li>
          <li>домашний адрес</li>
          <li>сведения о регистрации</li>
          <li>номер телефона</li>
          <li>адрес электронной почты</li>
          <li>паспортные данные: серия, номер, кем выдан, дата выдачи</li>
          <li>данные внутреннего паспорта</li>
          <li>данные свидетельства о рождении</li>
          <li>биометрические данные: фотография, отпечатки пальцев</li>
        </ul>
      </div>
    </>
  );
};
