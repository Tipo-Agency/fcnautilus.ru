import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, User as UserIcon, MapPin } from 'lucide-react';
import { CLUBS } from '../constants';

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  coach: string;
  clubId: string;
  category: string;
  duration: string;
  day: number; // 0-6 (понедельник-воскресенье)
}

// Примерные данные расписания для демонстрации
const generateScheduleForWeek = (weekOffset: number = 0): ScheduleItem[] => {
  const baseSchedule: ScheduleItem[] = [
    { id: 's1', time: '07:00', title: 'Утренняя Йога', coach: 'Виктория К.', clubId: 'nautilus-south', category: 'Восстановление', duration: '60м', day: 0 },
    { id: 's2', time: '09:00', title: 'Силовой тренинг', coach: 'Артем З.', clubId: 'nautilus-south', category: 'Сила', duration: '55м', day: 0 },
    { id: 's3', time: '18:30', title: 'Power Lift', coach: 'Артем З.', clubId: 'nautilus-zagarodny', category: 'Сила', duration: '55м', day: 1 },
    { id: 's4', time: '19:00', title: 'HIIT', coach: 'Виктория К.', clubId: 'nautilus-south', category: 'Кардио', duration: '45м', day: 1 },
    { id: 's5', time: '08:00', title: 'Плавание', coach: 'Иван П.', clubId: 'nautilus-south', category: 'Бассейн', duration: '60м', day: 2 },
    { id: 's6', time: '20:00', title: 'Бокс', coach: 'Дмитрий С.', clubId: 'nautilus-zagarodny', category: 'Единоборства', duration: '60м', day: 3 },
    { id: 's7', time: '10:00', title: 'Пилатес', coach: 'Виктория К.', clubId: 'nautilus-south', category: 'Восстановление', duration: '50м', day: 4 },
    { id: 's8', time: '17:00', title: 'CrossFit', coach: 'Артем З.', clubId: 'nautilus-zagarodny', category: 'Сила', duration: '60м', day: 4 },
    { id: 's9', time: '11:00', title: 'Сайкл', coach: 'Мария Л.', clubId: 'nautilus-zagarodny', category: 'Кардио', duration: '45м', day: 5 },
    { id: 's10', time: '12:00', title: 'Стретчинг', coach: 'Виктория К.', clubId: 'nautilus-south', category: 'Восстановление', duration: '60м', day: 6 },
  ];
  
  return baseSchedule;
};

const Schedule: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<string>(CLUBS[0].id); // По умолчанию первый клуб
  const [weekOffset, setWeekOffset] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  const schedule = generateScheduleForWeek(weekOffset);
  
  const filteredSchedule = schedule.filter(item => item.clubId === selectedClub);

  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const shortDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  const getCurrentWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1); // Понедельник
    const monday = new Date(today.setDate(diff + weekOffset * 7));
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  const weekDates = getCurrentWeekDates();

  const getScheduleForDay = (dayIndex: number) => {
    return filteredSchedule.filter(item => item.day === dayIndex).sort((a, b) => a.time.localeCompare(b.time));
  };

  const goToPreviousWeek = () => {
    setWeekOffset(weekOffset - 1);
  };

  const goToNextWeek = () => {
    setWeekOffset(weekOffset + 1);
  };

  const goToCurrentWeek = () => {
    setWeekOffset(0);
  };

  const selectedClubData = CLUBS.find(c => c.id === selectedClub);

  return (
    <div className="bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus Schedule" 
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
              <h1 className="text-[12vw] md:text-[10vw] font-black leading-none mb-6 md:mb-4 outline-text tracking-tighter italic uppercase text-center">
                РАСПИСАНИЕ
              </h1>
              <h1 className="text-[10vw] md:text-[8vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                <span className="text-nautilus">ЗАНЯТИЙ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-bold italic mt-8">
              Выбирайте удобное время и записывайтесь на групповые программы в один клик.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-4">
          {/* Club Selector and Week Navigation */}
          <div className="mb-16 flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Club Selector */}
            <div className="flex items-center gap-6">
              <MapPin className="text-nautilus" size={28} />
              <div className="flex gap-4">
                {CLUBS.map(club => (
                  <button
                    key={club.id}
                    onClick={() => setSelectedClub(club.id)}
                    className={`px-8 py-4 rounded-xl font-black text-lg italic uppercase transition-all ${
                      selectedClub === club.id
                        ? 'bg-nautilus text-white'
                        : 'bg-white/10 text-white/50 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {club.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Week Navigation */}
            <div className="flex items-center gap-6">
              <button
                onClick={goToPreviousWeek}
                className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={goToCurrentWeek}
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-black text-sm italic uppercase hover:bg-white hover:text-black transition-all"
              >
                ТЕКУЩАЯ НЕДЕЛЯ
              </button>
              <button
                onClick={goToNextWeek}
                className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* Week Dates Display */}
          <div className="mb-12 text-center">
            <p className="text-3xl font-black italic uppercase text-white/70 mb-2">
              {weekDates[0].toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} - {weekDates[6].toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
            </p>
            {selectedClubData && (
              <p className="text-xl font-bold italic text-nautilus">
                {selectedClubData.name} • {selectedClubData.address}
              </p>
            )}
          </div>

          {/* Schedule Grid by Days - горизонтальная прокрутка */}
          <div className="overflow-x-auto pb-6 no-scrollbar">
            <div className="flex gap-6 min-w-max">
              {daysOfWeek.map((day, dayIndex) => {
                const daySchedule = getScheduleForDay(dayIndex);
                const date = weekDates[dayIndex];
                const isToday = weekOffset === 0 && date.toDateString() === new Date().toDateString();

                return (
                  <motion.div
                    key={dayIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
                    className={`bg-white/5 border rounded-[2rem] p-6 min-h-[400px] w-[320px] flex-shrink-0 flex flex-col ${isToday ? 'border-nautilus ring-2 ring-nautilus/50' : 'border-white/10'}`}
                  >
                  {/* Day Header */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-2">{shortDays[dayIndex]}</p>
                    <p className="text-xl font-black italic uppercase mb-1 leading-tight">{day}</p>
                    <p className="text-sm font-bold text-white/70">{date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</p>
                  </div>

                  {/* Schedule Items */}
                  <div className="flex-grow space-y-3">
                    {daySchedule.length > 0 ? (
                      daySchedule.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-nautilus/50 transition-all group cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Clock size={14} className="text-nautilus" />
                              <span className="text-sm font-black italic text-nautilus">{item.time}</span>
                            </div>
                            <span className="text-xs text-white/50 font-bold">{item.duration}</span>
                          </div>
                          <h4 className="text-base font-black italic uppercase mb-2 group-hover:text-nautilus transition-colors leading-tight">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 mb-2">
                            <UserIcon size={12} className="text-white/50" />
                            <span className="text-xs text-white/70 font-bold">{item.coach}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-nautilus/20 text-nautilus px-2 py-1 rounded font-black uppercase">
                              {item.category}
                            </span>
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
                            className="w-full mt-3 py-2 bg-nautilus text-white font-black text-xs italic uppercase rounded-lg hover:bg-white hover:text-nautilus transition-all opacity-0 group-hover:opacity-100"
                          >
                            ЗАПИСАТЬСЯ
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center h-full min-h-[200px]">
                        <p className="text-sm text-white/30 italic text-center">Нет занятий</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
