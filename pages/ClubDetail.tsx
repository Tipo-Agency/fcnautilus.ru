import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight,
  Play, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Bell, 
  CalendarCheck, 
  Smartphone,
  Download,
  MapPin,
  Phone,
  Maximize,
  Waves,
  Users,
  User,
  Send
} from 'lucide-react';
import { CLUBS, SERVICES } from '../constants';
import Philosophy from '../components/home/Philosophy';
import { ClubCard } from '../types';

const ClubDetail: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const club = CLUBS.find(c => c.id === clubId);
  
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const appY = useTransform(scrollYProgress, [0.3, 0.7], [30, -30]);
  const [isCardButtonHovered, setIsCardButtonHovered] = useState(false);
  const [isHeroButtonHovered, setIsHeroButtonHovered] = useState(false);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);
  const [isAppStoreHovered, setIsAppStoreHovered] = useState(false);
  const [giftFormData, setGiftFormData] = useState({
    name: '',
    phone: '',
  });

  if (!club) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">КЛУБ НЕ НАЙДЕН</h1>
          <Link to="/clubs" className="text-nautilus hover:underline">Вернуться к списку клубов</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src={club.image} 
            alt={`${club.name} Hero`} 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-[12vw] font-black leading-none mb-6 md:mb-4 outline-text tracking-tighter italic uppercase text-center">
                {club.name.toUpperCase()}
              </h1>
              <h1 className="text-[10vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                ФИТНЕС <span className="text-nautilus">КЛУБ</span>
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Hero button clicked');
                  const openForm = (window as any).openContactForm;
                  if (openForm && typeof openForm === 'function') {
                    console.log('Calling global function');
                    openForm();
                  } else {
                    console.log('Dispatching event');
                    window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                  }
                }}
                className="px-12 py-6 font-black text-xl italic transition-all duration-300 transform hover:scale-110 skew-x-[-10deg] uppercase"
                style={{
                  backgroundColor: isHeroButtonHovered ? 'white' : '#372da5',
                  color: isHeroButtonHovered ? '#372da5' : 'white'
                }}
                onMouseEnter={() => setIsHeroButtonHovered(true)}
                onMouseLeave={() => setIsHeroButtonHovered(false)}
              >
                <span style={{ color: isHeroButtonHovered ? '#372da5' : 'white', transition: 'color 0.3s' }}>
                  ПРИСОЕДИНИТЬСЯ К КЛУБУ
                </span>
              </button>
              <button className="flex items-center gap-4 group">
                <span className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Play fill="currentColor" size={24}/>
                </span>
                <span className="font-bold tracking-widest text-sm uppercase italic">СМОТРЕТЬ ФИЛЬМ</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Club Info Section */}
      <section className="py-24 bg-white text-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Левая часть: Фото с информацией */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Фото */}
                <img 
                  src={club.image} 
                  className="rounded-[3.5rem] w-full aspect-[4/5] object-cover shadow-2xl"
                  alt={club.name}
                />
                
                {/* Бейдж с площадью */}
                <div className="absolute top-[35%] -right-4 md:-right-10 bg-[#372da5] text-white p-10 md:p-14 rounded-[2.8rem] shadow-[0_25px_60px_rgba(55,45,165,0.4)]">
                  <p className="text-4xl md:text-5xl font-extrabold italic leading-none mb-3 uppercase tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {club.area} М²
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-90 text-center whitespace-nowrap">
                    ПЛОЩАДЬ КЛУБА
                  </p>
                </div>
              </motion.div>
              
              {/* Кнопка видео-обзора - перенесена под фото */}
              <Link 
                to="/video-tour" 
                className="flex items-center justify-between w-full bg-[#f8fafc] hover:bg-slate-100 p-10 rounded-[2.8rem] group transition-all border border-slate-100/50 mt-8"
              >
                <div className="flex items-center gap-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#372da5] shadow-md group-hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-extrabold italic uppercase tracking-widest mb-1 leading-none text-black">
                      СМОТРЕТЬ ВИДЕО-ОБЗОР
                    </h4>
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.25em]">
                      ПОГРУЖЕНИЕ В АТМОСФЕРУ КЛУБА
                    </p>
                  </div>
                </div>
                <ArrowRight size={36} className="text-[#1a1a1a] group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>

            {/* Правая часть: Информация о клубе */}
            <div className="lg:col-span-7 lg:pl-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Заголовок */}
                <h2 className="text-6xl md:text-8xl font-black italic uppercase mb-8 leading-none">{club.name}</h2>
                
                {/* Контакты */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4 text-[#64748b] text-lg font-medium">
                    <MapPin className="text-[#372da5]" size={24} />
                    <span>{club.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#64748b] text-lg font-medium">
                    <Phone className="text-[#372da5]" size={24} />
                    <span>{club.phone}</span>
                  </div>
                </div>

                {/* Описание */}
                <div className="space-y-6 mb-12">
                  <p className="text-[#64748b] text-lg md:text-xl font-medium leading-relaxed">
                    Фитнес-клуб {club.name} — это современное пространство для достижения ваших целей. 
                    Мы предлагаем все необходимое для эффективных тренировок и восстановления.
                  </p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12">
                  {/* Блок 1: Площадь */}
                  <div className="border-l-4 border-[#372da5] bg-white">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Maximize size={18} className="text-[#372da5]" />
                      </div>
                      <div className="mb-2">
                        <div className="text-3xl md:text-4xl font-black text-black leading-tight">
                          {club.area} <span className="text-xl md:text-2xl">М²</span>
                        </div>
                      </div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                        ПЛОЩАДЬ КЛУБА
                      </p>
                    </div>
                  </div>

                  {/* Блок 2: Бассейн */}
                  <div className="border-l-4 border-[#372da5] bg-white">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Waves size={18} className="text-[#372da5]" />
                      </div>
                      <div className="mb-2">
                        <div className="text-3xl md:text-4xl font-black text-black leading-tight">
                          25м
                        </div>
                      </div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                        БОЛЬШОЙ БАССЕЙН
                      </p>
                    </div>
                  </div>

                  {/* Блок 3: Программы */}
                  <div className="border-l-4 border-[#372da5] bg-white">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Users size={18} className="text-[#372da5]" />
                      </div>
                      <div className="mb-2">
                        <div className="text-3xl md:text-4xl font-black text-black leading-tight">
                          50+
                        </div>
                      </div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                        ГРУППОВЫХ ПРОГРАММ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Особенности */}
                <div className="bg-[#f8fafc] p-10 rounded-[2.8rem] mb-12">
                  <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-8">КЛЮЧЕВАЯ ИНФРАСТРУКТУРА</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    {club.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-lg font-black italic uppercase">
                        <CheckCircle2 size={18} className="text-[#372da5]"/>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 60 дней в подарок Section */}
      <section className="py-40 bg-nautilus text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black leading-none italic uppercase mb-10">
                60 дней – <br />в подарок к карте!
              </h2>
              <p className="text-2xl opacity-90 mb-8 italic leading-relaxed">
                Откройте для себя сеть фитнес-клубов Наутилус: тренажерные залы с оборудованием премиального уровня, плавательные бассейны, детские бассейны, залы групповых программ, сайкл студии, SPA-салоны, детские клубы и многое другое!
              </p>
              
              {/* Форма обратной связи */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!giftFormData.name || !giftFormData.phone) {
                    alert('Пожалуйста, заполните все поля.');
                    return;
                  }
                  console.log('Gift form submitted:', giftFormData);
                  alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                  setGiftFormData({ name: '', phone: '' });
                }}
                className="space-y-6 mt-12"
              >
                <div>
                  <label htmlFor="gift-name" className="block text-white/70 text-sm font-bold mb-2">Имя</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                    <input
                      type="text"
                      id="gift-name"
                      name="name"
                      value={giftFormData.name}
                      onChange={(e) => setGiftFormData({ ...giftFormData, name: e.target.value })}
                      placeholder="Ваше имя"
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="gift-phone" className="block text-white/70 text-sm font-bold mb-2">Телефон</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                    <input
                      type="tel"
                      id="gift-phone"
                      name="phone"
                      value={giftFormData.phone}
                      onChange={(e) => setGiftFormData({ ...giftFormData, phone: e.target.value })}
                      placeholder="+7 (XXX) XXX-XX-XX"
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-nautilus py-4 rounded-xl font-black text-lg uppercase flex items-center justify-center gap-3 hover:bg-white/90 transition-all"
                >
                  Получить подарок <Send size={20} />
                </button>
              </form>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-white/10 blur-[100px] rounded-full"></div>
              <img 
                src="/images/3S7A2142.jpg" 
                alt="Nautilus Gift" 
                className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 text-[20rem] font-black opacity-5 select-none pointer-events-none -translate-y-1/2 uppercase italic">ПОДАРОК</div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-black overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-[8vw] font-black leading-none outline-text italic uppercase">НАПРАВЛЕНИЯ</h2>
        </div>
        <div className="flex gap-8 px-4 overflow-x-auto no-scrollbar pb-10">
          {SERVICES.map((s, i) => (
            <motion.div 
              whileHover={{ y: -20 }}
              key={i} 
              className="min-w-[400px] h-[600px] relative rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5"
              onMouseEnter={() => setHoveredServiceIndex(i)}
              onMouseLeave={() => setHoveredServiceIndex(null)}
            >
              <img 
                src={s.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0" 
                alt={s.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 p-12 flex flex-col justify-end">
                <span className="text-nautilus font-black text-xs uppercase mb-2">#{i + 1}</span>
                <h3 className="text-4xl font-black text-white mb-4 italic uppercase min-h-[4.5rem] flex items-end leading-tight">{s.title}</h3>
                <p className="text-white/60 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">{s.description}</p>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: hoveredServiceIndex === i ? '#372da5' : 'white',
                  }}
                >
                  <ArrowRight 
                    size={20} 
                    style={{ 
                      color: hoveredServiceIndex === i ? 'white' : 'black',
                      transition: 'color 0.3s'
                    }} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-[8vw] font-black leading-none outline-text italic uppercase mb-16 text-center">ГАЛЕРЕЯ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/3S7A2095.jpg',
              '/images/3S7A2165.jpg',
              '/images/3S7A2224.jpg',
              '/images/3S7A2272.jpg',
              '/images/3S7A2295.jpg',
              '/images/3S7A2321.jpg',
              '/images/3S7A2381.jpg',
              '/images/3S7A2418.jpg'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] aspect-[4/5] group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cards Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-[8vw] font-black leading-none outline-text italic uppercase mb-20 text-center text-black">ТОПОВЫЕ КАРТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {club.cards?.map((card: ClubCard, i: number) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative bg-black text-white rounded-[3rem] p-10 flex flex-col h-full ${card.popular ? 'ring-4 ring-nautilus' : ''}`}
              >
                {card.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nautilus text-white px-6 py-2 rounded-full text-xs font-black uppercase z-10">
                    ПОПУЛЯРНО
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-4xl font-black italic uppercase mb-4">{card.name}</h3>
                  <p className="text-white/70 mb-8 italic">{card.description}</p>
                  <ul className="space-y-4">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase">
                        <CheckCircle2 size={18} className="text-nautilus shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const openForm = (window as any).openContactForm;
                    if (openForm && typeof openForm === 'function') {
                      openForm();
                    } else {
                      window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                    }
                  }}
                  className="w-full py-4 bg-nautilus text-white font-black text-lg italic uppercase hover:bg-white hover:text-nautilus transition-all rounded-xl mt-8"
                >
                  ВЫБРАТЬ КАРТУ
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-12 bg-zinc-950 relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                 <Smartphone className="text-nautilus" size={20} />
                 <span className="text-nautilus font-black text-[10px] tracking-[0.3em] uppercase">Digital Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 italic uppercase leading-tight">
                Управляй своим <br />прогрессом <span className="text-white opacity-50">в приложении</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {[
                  { icon: <Clock size={14} />, text: 'Расписание' },
                  { icon: <Zap size={14} />, text: 'Запись в клик' },
                  { icon: <Bell size={14} />, text: 'Push-уведомления' },
                  { icon: <CalendarCheck size={14} />, text: 'Абонементы' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-nautilus">{feature.icon}</div>
                    <p className="text-[11px] font-bold uppercase italic tracking-tight text-white/70">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://apps.apple.com/ru/app/%D1%84%D0%BA-%D0%BD%D0%B0%D1%83%D1%82%D0%B8%D0%BB%D1%83%D1%81/id1057973232" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg text-[10px] font-black italic transition-all"
                  style={{
                    backgroundColor: isAppStoreHovered ? '#372da5' : 'white',
                    color: isAppStoreHovered ? 'white' : 'black'
                  }}
                  onMouseEnter={() => setIsAppStoreHovered(true)}
                  onMouseLeave={() => setIsAppStoreHovered(false)}
                >
                  <Download 
                    size={14} 
                    style={{ 
                      color: isAppStoreHovered ? 'white' : 'black',
                      transition: 'color 0.3s'
                    }} 
                  />
                  <span>APP STORE</span>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.itrack.nautilus&hl=ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-white/20 text-white rounded-lg text-[10px] font-black italic hover:border-nautilus hover:text-nautilus transition-all"
                >
                  <Download size={14} />
                  GOOGLE PLAY
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: appY }}
              className="relative w-full max-w-[280px] lg:max-w-[320px]"
            >
              <img 
                src="https://i.ibb.co/wN1Gqjg8/Group-1.png" 
                alt="Nautilus App" 
                className="w-full h-auto drop-shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nautilus/20 blur-[80px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-40 bg-nautilus text-white relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
             <h2 className="text-6xl md:text-8xl font-black leading-none italic uppercase mb-10">Стань часть <br /> легенды.</h2>
             <p className="text-2xl opacity-80 mb-12 italic">Особые условия для новых атлетов до конца мая.</p>
             <ul className="space-y-6 mb-12">
               {['Безлимитный доступ 24/7', 'Персональный разбор целей', 'Доступ во все клубы сети'].map((t, i) => (
                 <li key={i} className="flex items-center gap-4 font-black text-xl italic uppercase">
                   <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                     <CheckCircle2 size={16}/>
                   </div>
                   {t}
                 </li>
               ))}
             </ul>
             <button
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 console.log('Card button clicked');
                 const openForm = (window as any).openContactForm;
                 if (openForm && typeof openForm === 'function') {
                   console.log('Calling global function');
                   openForm();
                 } else {
                   console.log('Dispatching event');
                   window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                 }
               }}
               className="px-16 py-8 font-black text-2xl skew-x-[-10deg] transition-all duration-300 inline-flex items-center gap-4 uppercase italic"
               style={{
                 backgroundColor: isCardButtonHovered ? 'black' : 'white',
                 color: isCardButtonHovered ? 'white' : '#372da5'
              }}
              onMouseEnter={() => setIsCardButtonHovered(true)}
              onMouseLeave={() => setIsCardButtonHovered(false)}
             >
               <span style={{ color: isCardButtonHovered ? 'white' : '#372da5', transition: 'color 0.3s' }}>ВЫБРАТЬ КАРТУ</span>
               <ArrowUpRight size={28} style={{ color: isCardButtonHovered ? 'white' : '#372da5', transition: 'color 0.3s' }} />
             </button>
           </div>
           <div className="relative">
             <div className="absolute -inset-10 bg-white/10 blur-[100px] rounded-full"></div>
              <img 
                src="/images/stan-chastyu-legendy.jpg" 
                alt="Nautilus Interior" 
                className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 w-full aspect-[4/5] object-cover"
              />
           </div>
        </div>
        <div className="absolute top-0 right-0 text-[20rem] font-black opacity-5 select-none pointer-events-none -translate-y-1/2 uppercase italic">ВСТУПАЙ</div>
      </section>

    </div>
  );
};

export default ClubDetail;

