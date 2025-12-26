
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MapPin, Instagram, User, Send, ArrowUpRight, Youtube, MessageCircle, Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFooterButtonHovered, setIsFooterButtonHovered] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const location = useLocation();
  const openFormRef = useRef<() => void>();

  // Устанавливаем функцию открытия формы
  openFormRef.current = () => {
    console.log('Opening contact form');
    setIsContactFormOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleOpenForm = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Event received, opening form');
      setIsContactFormOpen(true);
    };
    
    window.addEventListener('openContactForm', handleOpenForm);
    
    // Устанавливаем глобальную функцию для открытия формы
    (window as any).openContactForm = () => {
      console.log('Global function called');
      if (openFormRef.current) {
        openFormRef.current();
      } else {
        setIsContactFormOpen(true);
      }
    };
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactForm', handleOpenForm);
      delete (window as any).openContactForm;
    };
  }, []);

  const navLinks = [
    { name: 'КЛУБЫ', path: '/clubs' },
    { name: 'УСЛУГИ', path: '/services' },
    { name: 'КОМАНДА', path: '/team' },
    { name: 'РАСПИСАНИЕ', path: '/schedule' },
    { name: 'НОВОСТИ', path: '/news' },
  ];

  const logoUrl = "https://i.ibb.co/G3M5WBjq/image.png";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - красивая шапка без белого фона */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-4' : 'bg-transparent py-8'} text-white`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={logoUrl} 
                alt="NAUTILUS" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-110" 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300 px-4 py-2 rounded-lg ${location.pathname === link.path ? 'text-[#372da5] bg-[#372da5]/10' : 'text-white hover:text-black hover:bg-white/10'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/profile" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white">
              <User size={18} />
            </Link>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-white"><Menu size={32}/></button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-black z-[200] p-12 flex flex-col justify-between text-white"
          >
            <div className="flex justify-between items-center">
              <img src={logoUrl} alt="NAUTILUS" className="h-8 w-auto brightness-0 invert" />
              <button onClick={() => setIsMenuOpen(false)}><X size={40}/></button>
            </div>
            <nav className="flex flex-col gap-6">
              {[...navLinks, { name: 'РАСПИСАНИЕ', path: '/schedule' }, { name: 'ВАКАНСИИ', path: '/vacancies' }].map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-[12vw] font-black italic leading-none uppercase outline-text hover:text-white transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-10 border-t border-white/10 flex justify-between items-end">
               <div>
                 <p className="text-[10px] font-black text-nautilus tracking-[0.4em] mb-4 uppercase">ХАБАРОВСК</p>
                 <a href="tel:+74212600100" className="text-2xl font-black">+7 4212 600-100</a>
               </div>
               <div className="flex gap-4">
                 <a href="https://instagram.com/fc.nautilus" target="_blank" rel="noopener noreferrer"><Instagram size={24}/></a>
                 <a href="https://t.me/fcnautiluskhv" target="_blank" rel="noopener noreferrer"><Send size={24}/></a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Extreme Footer */}
      <footer className="bg-[#050505] text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">
        {/* Background Decorative Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
          <span className="text-[35vw] font-black italic outline-text leading-none uppercase">HARDCORE</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Top Footer CTA */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-[10vw] lg:text-[7vw] font-black italic leading-[0.85] uppercase tracking-tighter mb-8">
                ТВОЙ <br /><span className="text-nautilus">ПРЕДЕЛ</span> <br />ТУТ.
              </h2>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsContactFormOpen(true);
                  }}
                  className="px-10 py-5 font-black italic text-lg transition-all skew-x-[-12deg] flex items-center gap-4 uppercase"
                  style={{
                    backgroundColor: isFooterButtonHovered ? '#372da5' : 'white',
                    color: isFooterButtonHovered ? 'white' : 'black'
                  }}
                  onMouseEnter={() => setIsFooterButtonHovered(true)}
                  onMouseLeave={() => setIsFooterButtonHovered(false)}
                >
                  <span style={{ color: isFooterButtonHovered ? 'white' : 'black', transition: 'color 0.3s' }}>
                    Вступить в клуб
                  </span>
                  <ArrowUpRight 
                    size={24} 
                    style={{ 
                      color: isFooterButtonHovered ? 'white' : 'black',
                      transition: 'color 0.3s'
                    }} 
                  />
                </button>
              </div>
            </motion.div>
            
            <div className="flex flex-col items-end text-right">
              <p className="text-nautilus font-black text-xs tracking-[0.4em] uppercase mb-4">Главный штаб</p>
              <a href="tel:+74212600100" className="text-4xl md:text-6xl font-black italic hover:text-nautilus transition-colors leading-none">+7 (4212) 600-100</a>
              <p className="text-white/40 font-bold mt-2 uppercase italic">Хабаровск, ежедневно 07:00 — 23:00</p>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 border-t border-white/10 pt-20 pb-20">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <img src={logoUrl} alt="NAUTILUS" className="h-12 w-auto brightness-0 invert mb-10" />
              <p className="text-white/50 text-sm leading-relaxed font-medium mb-10 max-w-xs">
                Крупнейшая сеть фитнес-клубов в Хабаровске. Мы создаем атлетов с 2012 года, используя передовые технологии и олдскульный подход к тренировкам.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20}/>, link: 'https://instagram.com/fc.nautilus' },
                  { icon: <Youtube size={20}/>, link: 'https://www.youtube.com/@fc.nautilus' },
                  { icon: <Send size={20}/>, link: 'https://t.me/fcnautiluskhv' },
                  { icon: <Share2 size={20}/>, link: 'https://vk.com/fc.nautilus' },
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-nautilus hover:border-nautilus hover:scale-110 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-nautilus font-black text-[10px] tracking-[0.4em] uppercase mb-10">Навигация</h4>
              <ul className="space-y-4">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-2xl font-black italic uppercase hover:text-nautilus transition-all inline-block hover:translate-x-2">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-nautilus font-black text-[10px] tracking-[0.4em] uppercase mb-10">Локации в ХАБ</h4>
              <div className="space-y-8">
                <div>
                  <h5 className="font-black italic uppercase text-lg mb-2 underline decoration-nautilus underline-offset-4">Южный</h5>
                  <p className="text-white/40 text-xs font-bold uppercase mb-2">ул. Суворова, 25а</p>
                  <a href="tel:+74212600100" className="text-sm font-black hover:text-nautilus transition-colors">+7 (4212) 600-100</a>
                </div>
                <div>
                  <h5 className="font-black italic uppercase text-lg mb-2 underline decoration-nautilus underline-offset-4">Загородный</h5>
                  <p className="text-white/40 text-xs font-bold uppercase mb-2">ул. Воровского, 17</p>
                  <a href="tel:+74212600200" className="text-sm font-black hover:text-nautilus transition-colors">+7 (4212) 600-200</a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-nautilus font-black text-[10px] tracking-[0.4em] uppercase mb-10">Будь в курсе</h4>
              <p className="text-white/40 text-xs font-bold uppercase mb-6 leading-relaxed italic">Подпишись на новости и получи программу тренировок в подарок.</p>
              <form className="relative group">
                <input 
                  type="email" 
                  placeholder="ТВОЙ EMAIL" 
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-xl font-black italic outline-none focus:border-nautilus transition-all text-xs uppercase"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-lg font-black italic text-[10px] hover:bg-nautilus hover:text-white transition-all">
                  ОК
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20">
              © 2026 NAUTILUS FITNESS NETWORK. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
            <div className="flex gap-8 text-[10px] font-black italic uppercase text-white/40">
              <Link to="/legal" className="hover:text-white transition-colors">Политика</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Оферта</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Cookies</Link>
            </div>
            <a 
              href="https://dontask.studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 group/credit"
            >
              <span className="text-[10px] font-black text-white/20 uppercase tracking-widest transition-colors group-hover/credit:text-white/40">DESIGNED BY</span>
              <div className="flex items-center gap-0.5 text-[11px] md:text-[13px] font-black italic uppercase transition-all group-hover/credit:tracking-[0.1em]">
                <span className="text-white">DONT</span>
                <span className="text-[#6768E8] ml-1">ASK</span>
                <span className="ml-1 flex">
                  <span className="studio-outline">STU</span>
                  <span className="text-white">D</span>
                  <span className="studio-outline">IO</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {console.log('Layout render - isContactFormOpen:', isContactFormOpen)}
      <ContactForm isOpen={isContactFormOpen} onClose={() => {
        console.log('Closing form');
        setIsContactFormOpen(false);
      }} />
    </div>
  );
};

export default Layout;

