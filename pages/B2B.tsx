
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, LineChart, Shield, ArrowRight } from 'lucide-react';

const B2B: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter">NAUTILUS CORPORATE</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Здоровье сотрудников — это продуктивность вашего бизнеса. Специальные программы для компаний от 10 человек.
          </p>
          <button className="bg-nautilus text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-nautilus/30">
            ОБСУДИТЬ УСЛОВИЯ
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-nautilus blur-[150px] rounded-full"></div>
           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 blur-[120px] rounded-full"></div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Heart className="text-nautilus" size={32}/>, title: "Здоровая команда", desc: "Снижение больничных листов на 30%" },
              { icon: <LineChart className="text-nautilus" size={32}/>, title: "Лояльность", desc: "Укрепление HR-бренда компании" },
              { icon: <Briefcase className="text-nautilus" size={32}/>, title: "Налоговые льготы", desc: "Возможность оптимизации налогообложения" },
              { icon: <Shield className="text-nautilus" size={32}/>, title: "Сервис", desc: "Персональный менеджер 24/7" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl">
             <h2 className="text-4xl font-black mb-10 text-center uppercase tracking-tight">Заявка на партнерство</h2>
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-4">Компания</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-nautilus outline-none" placeholder="ООО Ромашка"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-4">Количество сотрудников</label>
                  <input type="number" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-nautilus outline-none" placeholder="10+"/>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-4">Ваше имя и телефон</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-nautilus outline-none" placeholder="Иван +7..."/>
                </div>
                <button className="md:col-span-2 bg-nautilus text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
                  ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ <ArrowRight/>
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
