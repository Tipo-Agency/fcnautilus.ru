
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MapPin, Instagram, User, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';

// Иконка VK (ВКонтакте)
const VKIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size * 0.571} viewBox="0 0 657 375" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M321.447 373.238H360.716C360.716 373.238 372.575 371.931 378.638 365.407C384.212 359.411 384.033 348.158 384.033 348.158C384.033 348.158 383.265 295.466 407.717 287.706C431.83 280.058 462.787 338.631 495.596 361.155C520.409 378.194 539.263 374.464 539.263 374.464L627.002 373.238C627.002 373.238 672.897 370.407 651.134 334.321C649.353 331.373 638.456 307.628 585.896 258.841C530.877 207.778 538.252 216.039 604.522 127.713C644.881 73.9223 661.013 41.0847 655.972 27.0211C651.169 13.6214 621.482 17.161 621.482 17.161L522.697 17.7718C522.697 17.7718 515.368 16.7747 509.94 20.0228C504.631 23.1992 501.223 30.6209 501.223 30.6209C501.223 30.6209 485.581 72.2427 464.737 107.646C420.748 182.339 403.157 186.293 395.966 181.647C379.238 170.836 383.418 138.226 383.418 115.051C383.418 42.6626 394.398 12.4809 362.037 4.66825C351.3 2.07715 343.39 0.362853 315.927 0.0829225C280.676 -0.275667 250.849 0.191667 233.956 8.46699C222.717 13.9708 214.046 26.2322 219.33 26.9378C225.861 27.8077 240.644 30.9286 248.482 41.5937C258.608 55.3705 258.254 86.2971 258.254 86.2971C258.254 86.2971 264.073 171.51 244.669 182.091C231.355 189.351 213.088 174.531 173.87 106.765C153.78 72.053 138.605 33.6793 138.605 33.6793C138.605 33.6793 135.684 26.5098 130.464 22.6718C124.135 18.0217 115.29 16.548 115.29 16.548L21.4138 17.161C21.4138 17.161 7.32466 17.5543 2.14709 23.6827C-2.45905 29.1379 1.77927 40.4069 1.77927 40.4069C1.77927 40.4069 75.2693 212.349 158.49 298.999C234.805 378.453 321.447 373.238 321.447 373.238Z" fill="currentColor"/>
  </svg>
);

// Иконка Telegram
const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size * 0.832} viewBox="0 0 131 109" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.92914 46.6C43.9291 31.4 67.2291 21.3 78.9291 16.4C112.229 2.5 119.229 0.1 123.729 0C124.729 0 126.929 0.200001 128.429 1.4C129.629 2.4 129.929 3.7 130.129 4.7C130.329 5.7 130.529 7.8 130.329 9.4C128.529 28.4 120.729 74.5 116.729 95.7C115.029 104.7 111.729 107.7 108.529 108C101.529 108.6 96.2291 103.4 89.5291 99C78.9291 92.1 73.0291 87.8 62.7291 81C50.8291 73.2 58.5291 68.9 65.3291 61.9C67.1291 60.1 97.8291 32.1 98.4291 29.6C98.5291 29.3 98.5291 28.1 97.8291 27.5C97.1291 26.9 96.1291 27.1 95.3291 27.3C94.2291 27.5 77.4291 38.7 44.7291 60.8C39.9291 64.1 35.6291 65.7 31.7291 65.6C27.4291 65.5 19.2291 63.2 13.0291 61.2C5.52914 58.8 -0.470863 57.5 0.0291371 53.3C0.329137 51.1 3.32914 48.9 8.92914 46.6Z" fill="currentColor"/>
  </svg>
);

// Иконка Макс
const MaxIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 765 761" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M390.364 758.828C315.357 758.828 280.5 747.879 219.911 704.079C181.586 753.353 60.2245 791.861 54.932 725.979C54.932 676.522 43.9821 634.73 31.5722 589.105C16.7898 532.895 0 470.298 0 379.597C0 162.971 177.753 0 388.357 0C599.142 0 764.303 171.001 764.303 381.604C765.011 588.951 597.709 757.722 390.364 758.828ZM393.467 187.243C290.902 181.951 210.968 252.943 193.266 364.267C178.666 456.429 204.581 568.665 226.663 574.505C237.248 577.06 263.893 555.525 280.5 538.918C307.961 557.889 339.939 569.282 373.209 571.95C479.482 577.062 570.289 496.156 577.425 389.999C581.579 283.618 499.755 193.514 393.466 187.426L393.467 187.243Z" fill="currentColor"/>
  </svg>
);

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

  // Прокрутка вверх при изменении маршрута (только если нет якоря или state с scrollTo)
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (!location.hash && !state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.state]);

  const navLinks = [
    { name: 'КЛУБЫ', path: '/clubs' },
    { name: 'УСЛУГИ', path: '/services' },
    { name: 'КОМАНДА', path: '/team' },
    { name: 'РАСПИСАНИЕ', path: '/schedule' },
    { name: 'НОВОСТИ', path: '/news' },
    { name: '3D ТУР', path: '/tour3d' },
  ];

  const logoUrl = "https://i.ibb.co/G3M5WBjq/image.png";

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-full">
      {/* Header - красивая шапка без белого фона */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-4' : 'bg-transparent py-8'} text-white max-w-full`}>
        <div className="container mx-auto px-4 flex justify-between items-center w-full max-w-full">
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
                 <a href="tel:+74212950938" className="text-2xl font-black">+7 (4212) 95-09-38</a>
               </div>
               <div className="flex gap-4">
                 <a href="https://www.instagram.com/fc.nautilus/" target="_blank" rel="noopener noreferrer"><Instagram size={24}/></a>
                 <a href="https://t.me/fcnautiluskhv" target="_blank" rel="noopener noreferrer"><TelegramIcon size={24}/></a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow overflow-x-hidden w-full max-w-full">
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
              <h2 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[7vw] font-black italic leading-[0.85] uppercase tracking-tighter mb-6 sm:mb-8">
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
              <p className="text-nautilus font-black text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4">Главный штаб</p>
              <a href="tel:+74212950938" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic hover:text-nautilus transition-colors leading-none">+7 (4212) 95-09-38</a>
              <p className="text-white/40 font-bold mt-2 text-xs sm:text-sm uppercase italic">Хабаровск, будни 06:00-23:30, выходные 07:00-22:30</p>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 md:gap-16 lg:gap-8 border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <img src={logoUrl} alt="NAUTILUS" className="h-10 sm:h-12 w-auto brightness-0 invert mb-6 sm:mb-8 md:mb-10" />
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-medium mb-6 sm:mb-8 md:mb-10 max-w-xs">
                Крупнейшая сеть фитнес-клубов в Хабаровске. Мы создаем атлетов с 2012 года, используя передовые технологии и олдскульный подход к тренировкам.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: <Instagram size={20}/>, link: 'https://www.instagram.com/fc.nautilus/' },
                  { icon: <TelegramIcon size={20}/>, link: 'https://t.me/fcnautiluskhv' },
                  { icon: <VKIcon size={20}/>, link: 'https://vk.com/fc.nautilus' },
                  { icon: <MaxIcon size={20}/>, link: '#' },
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-nautilus hover:border-nautilus hover:scale-110 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-nautilus font-black text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-8 md:mb-10">Навигация</h4>
              <ul className="space-y-3 sm:space-y-4">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-xl sm:text-2xl font-black italic uppercase hover:text-nautilus transition-all inline-block hover:translate-x-2">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links Column */}
            <div>
              <h4 className="text-nautilus font-black text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-8 md:mb-10">Документы</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link to="/legal" className="text-xl sm:text-2xl font-black italic uppercase hover:text-nautilus transition-all inline-block hover:translate-x-2">
                    ОФЕРТА
                  </Link>
                </li>
                <li>
                  <Link to="/rules" className="text-xl sm:text-2xl font-black italic uppercase hover:text-nautilus transition-all inline-block hover:translate-x-2">
                    ПРАВИЛА
                  </Link>
                </li>
                <li>
                  <Link to="/policy" className="text-xl sm:text-2xl font-black italic uppercase hover:text-nautilus transition-all inline-block hover:translate-x-2">
                    ПОЛИТИКА
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-nautilus font-black text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-8 md:mb-10">Локации</h4>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h5 className="font-black italic uppercase text-base sm:text-lg mb-2 underline decoration-nautilus underline-offset-4">Южный</h5>
                  <p className="text-white/40 text-xs font-bold uppercase mb-2">ул. Суворова, 25а</p>
                  <a href="tel:+74212950938" className="text-xs sm:text-sm font-black hover:text-nautilus transition-colors">+7 (4212) 95-09-38</a>
                  <p className="text-white/40 text-xs font-bold mt-1">Будни 06:00-23:30, выходные 07:00-22:30</p>
                </div>
                <div>
                  <h5 className="font-black italic uppercase text-base sm:text-lg mb-2 underline decoration-nautilus underline-offset-4">Загородный</h5>
                  <p className="text-white/40 text-xs font-bold uppercase mb-2">ул. Воровского, 17</p>
                  <a href="tel:+74212950938" className="text-xs sm:text-sm font-black hover:text-nautilus transition-colors">+7 (4212) 95-09-38</a>
                  <p className="text-white/40 text-xs font-bold mt-1">Будни 06:00-23:30, выходные 07:00-22:30</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20">
              © 2026 NAUTILUS FITNESS NETWORK. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
            <div className="flex gap-8 text-[10px] font-black italic uppercase text-white/40">
              <Link to="/policy" className="hover:text-white transition-colors">Политика</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Оферта</Link>
              <Link to="/rules" className="hover:text-white transition-colors">Правила</Link>
            </div>
            <a 
              href="https://dontask.studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 group/credit"
            >
              <span className="text-[10px] font-black text-white/20 uppercase tracking-widest transition-colors group-hover/credit:text-white/40">DESIGNED BY</span>
              <img 
                src="/Group.svg" 
                alt="DONT ASK STUDIO" 
                className="h-4 md:h-5 w-auto opacity-60 group-hover/credit:opacity-100 transition-opacity"
              />
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

