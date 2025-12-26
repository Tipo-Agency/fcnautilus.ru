import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Send } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  console.log('ContactForm render - isOpen:', isOpen);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить отправку данных
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-white/10 rounded-[3rem] p-8 md:p-12 max-w-2xl w-full pointer-events-auto relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#372da5]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-2 text-white">
                  Вступить в клуб
                </h2>
                <p className="text-white/60 mb-8 text-lg">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                      Ваше имя
                    </label>
                    <div className="relative">
                      <User 
                        size={20} 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Иван Иванов"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#372da5] focus:bg-white/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="relative">
                    <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                      Номер телефона
                    </label>
                    <div className="relative">
                      <Phone 
                        size={20} 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+7 (999) 123-45-67"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#372da5] focus:bg-white/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                      Email (необязательно)
                    </label>
                    <div className="relative">
                      <Mail 
                        size={20} 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ivan@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#372da5] focus:bg-white/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-[#372da5] text-white px-8 py-5 rounded-2xl font-black text-lg uppercase italic hover:bg-[#2a2280] transition-all flex items-center justify-center gap-3 mt-8"
                  >
                    <Send size={20} />
                    Отправить заявку
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
    </AnimatePresence>
  );
};

export default ContactForm;

