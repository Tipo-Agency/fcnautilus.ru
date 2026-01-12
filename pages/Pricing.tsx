
import React from 'react';
import { Check, Shield } from 'lucide-react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Темный героблок для видимости шапки */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase outline-text italic">ВЫБЕРИТЕ СВОЙ ФОРМАТ</h1>
            <p className="text-slate-400 max-w-2xl mx-auto font-bold italic text-xl">
              Инвестируйте в свое здоровье сегодня. У нас есть гибкие тарифы для профессиональных атлетов и дружных семей.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.map(plan => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-[2.5rem] p-10 transition-all hover:scale-[1.02] flex flex-col ${plan.popular ? 'border-2 border-nautilus shadow-2xl' : 'border border-slate-100 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-nautilus font-black px-6 py-2 rounded-full text-xs uppercase tracking-widest shadow-xl">
                  Популярный выбор
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-nautilus">{plan.price.toLocaleString()}</span>
                  <span className="text-slate-400 font-bold">₽</span>
                </div>
                <p className="text-sm text-slate-500 mt-2 italic">Срок действия: {plan.duration}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-green-600" size={12}/>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-nautilus text-white shadow-lg shadow-nautilus/30 hover:bg-slate-800' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                Оформить онлайн
              </button>
            </div>
          ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto bg-white rounded-[2rem] p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 bg-nautilus/10 rounded-3xl flex items-center justify-center shrink-0">
              <Shield className="text-nautilus" size={40}/>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Безопасная онлайн-покупка</h4>
              <p className="text-slate-600 text-sm">
                Мы используем современные протоколы безопасности для защиты ваших платежных данных. 
                После оплаты абонемент будет мгновенно доступен в личном кабинете и на вашей почте.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
