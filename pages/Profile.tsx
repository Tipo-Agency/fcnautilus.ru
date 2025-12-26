import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  User, 
  Calendar, 
  CreditCard, 
  Activity, 
  Settings, 
  LogOut,
  Clock,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  History,
  ShoppingCart,
  Snowflake,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CLUBS } from '../constants';

// Демо данные пользователя
const demoUser = {
  id: '1',
  name: 'Константин В.',
  email: 'konstantin@example.com',
  phone: '+7 (4212) 600-100',
  membership: {
    id: 'm1',
    type: 'ЭЛИТ PRO',
    startDate: '2024-01-15',
    endDate: '2025-01-15',
    status: 'active' as const,
    remainingDays: 142,
    remainingWorkouts: 8,
    clubId: 'nautilus-south'
  },
  metrics: [
    { id: '1', date: '2024-12-01', weight: 85, height: 180, bodyFat: 15, muscleMass: 65 },
    { id: '2', date: '2024-12-15', weight: 83, height: 180, bodyFat: 14, muscleMass: 66 },
    { id: '3', date: '2024-12-26', weight: 82, height: 180, bodyFat: 13.5, muscleMass: 67 },
  ],
  visits: [
    { id: 'v1', date: '2024-12-25', time: '18:00', clubId: 'nautilus-south', clubName: 'Южный', duration: 90, activity: 'Силовой тренинг' },
    { id: 'v2', date: '2024-12-23', time: '19:30', clubId: 'nautilus-south', clubName: 'Южный', duration: 60, activity: 'Плавание' },
    { id: 'v3', date: '2024-12-20', time: '17:00', clubId: 'nautilus-south', clubName: 'Южный', duration: 45, activity: 'HIIT' },
  ],
  personalSchedule: [
    { id: 'ps1', date: '2024-12-27', time: '18:00', title: 'Силовой тренинг', coach: 'Артем З.', clubId: 'nautilus-south', category: 'Сила', status: 'upcoming' as const },
    { id: 'ps2', date: '2024-12-28', time: '19:00', title: 'Плавание', coach: 'Иван П.', clubId: 'nautilus-south', category: 'Бассейн', status: 'upcoming' as const },
  ]
};

// Расписание для клуба пользователя
const generateScheduleForWeek = (clubId: string, weekOffset: number = 0) => {
  const baseSchedule = [
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
  
  return baseSchedule.filter(item => item.clubId === clubId);
};

const Profile: React.FC = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [isDemoButtonHovered, setIsDemoButtonHovered] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  const userClub = CLUBS.find(c => c.id === demoUser.membership?.clubId);
  const schedule = generateScheduleForWeek(demoUser.membership?.clubId || 'nautilus-south', weekOffset);
  
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  
  const getCurrentWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
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
    return schedule.filter(item => item.day === dayIndex).sort((a, b) => a.time.localeCompare(b.time));
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

  const tabs = [
    { id: 'profile', name: 'ПРОФИЛЬ', icon: User },
    { id: 'my-schedule', name: 'МОЕ РАСПИСАНИЕ', icon: Calendar },
    { id: 'schedule', name: 'ЗАПИСАТЬСЯ', icon: Activity },
    { id: 'membership', name: 'АБОНЕМЕНТ', icon: CreditCard },
    { id: 'metrics', name: 'МЕТРИКИ', icon: TrendingUp },
    { id: 'visits', name: 'ПОСЕЩЕНИЯ', icon: History },
    { id: 'purchase', name: 'КУПИТЬ', icon: ShoppingCart },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-nautilus/20 rounded-full flex items-center justify-center">
                  <User size={48} className="text-nautilus" />
                </div>
                <div>
                  <h2 className="text-3xl font-black italic uppercase mb-2">{demoUser.name}</h2>
                  <p className="text-white/50 text-sm font-bold">ID: 847294</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-nautilus" size={20} />
                  <div>
                    <p className="text-white/50 text-xs font-black uppercase mb-1">EMAIL</p>
                    <p className="text-white font-bold">{demoUser.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-nautilus" size={20} />
                  <div>
                    <p className="text-white/50 text-xs font-black uppercase mb-1">ТЕЛЕФОН</p>
                    <p className="text-white font-bold">{demoUser.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'my-schedule':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <h3 className="text-2xl font-black italic uppercase mb-6">МОЕ РАСПИСАНИЕ</h3>
              <div className="space-y-4">
                {demoUser.personalSchedule?.map((item) => (
                  <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white/50 text-xs font-black uppercase mb-1">{item.date}</p>
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="text-nautilus" />
                          <span className="text-lg font-black italic text-nautilus">{item.time}</span>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-xs font-black uppercase ${
                        item.status === 'upcoming' ? 'bg-nautilus/20 text-nautilus' : 
                        item.status === 'completed' ? 'bg-green-500/20 text-green-500' : 
                        'bg-red-500/20 text-red-500'
                      }`}>
                        {item.status === 'upcoming' ? 'ЗАПЛАНИРОВАНО' : 
                         item.status === 'completed' ? 'ЗАВЕРШЕНО' : 'ОТМЕНЕНО'}
                      </span>
                    </div>
                    <h4 className="text-xl font-black italic uppercase mb-2">{item.title}</h4>
                    <div className="flex items-center gap-4 text-white/70">
                      <span className="text-sm font-bold">Тренер: {item.coach}</span>
                      <span className="text-sm font-bold">•</span>
                      <span className="text-sm font-bold">{item.category}</span>
                    </div>
                    {item.status === 'upcoming' && (
                      <button className="mt-4 px-6 py-2 bg-red-500/20 text-red-500 font-black text-sm italic uppercase rounded-lg hover:bg-red-500/30 transition-all">
                        ОТМЕНИТЬ
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black italic uppercase mb-2">РАСПИСАНИЕ ТРЕНИРОВОК</h3>
                  <p className="text-white/70 font-bold">{userClub?.name} • {userClub?.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPreviousWeek}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToCurrentWeek}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white font-black text-xs italic uppercase hover:bg-white hover:text-black transition-all"
                  >
                    СЕЙЧАС
                  </button>
                  <button
                    onClick={goToNextWeek}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="mb-6 text-center">
                <p className="text-xl font-black italic uppercase text-white/70">
                  {weekDates[0].toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} - {weekDates[6].toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                </p>
              </div>

              <div className="space-y-6">
                {daysOfWeek.map((day, dayIndex) => {
                  const daySchedule = getScheduleForDay(dayIndex);
                  const date = weekDates[dayIndex];
                  const isToday = weekOffset === 0 && date.toDateString() === new Date().toDateString();

                  return (
                    <div
                      key={dayIndex}
                      className={`bg-white/5 border rounded-xl p-6 ${isToday ? 'border-nautilus ring-2 ring-nautilus/50' : 'border-white/10'}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-black italic uppercase">{day}</h4>
                          <p className="text-white/50 text-sm">{date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</p>
                        </div>
                        {isToday && (
                          <span className="px-4 py-2 bg-nautilus/20 text-nautilus rounded-full text-xs font-black uppercase">
                            СЕГОДНЯ
                          </span>
                        )}
                      </div>
                      {daySchedule.length > 0 ? (
                        <div className="space-y-3">
                          {daySchedule.map((item) => (
                            <div key={item.id} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <Clock size={16} className="text-nautilus" />
                                <div>
                                  <h5 className="text-lg font-black italic uppercase">{item.title}</h5>
                                  <p className="text-white/70 text-sm font-bold">{item.coach} • {item.category}</p>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  const openForm = (window as any).openContactForm;
                                  if (openForm && typeof openForm === 'function') {
                                    openForm();
                                  } else {
                                    window.dispatchEvent(new CustomEvent('openContactForm', { bubbles: true }));
                                  }
                                }}
                                className="px-6 py-2 bg-nautilus text-white font-black text-sm italic uppercase rounded-lg hover:bg-white hover:text-nautilus transition-all"
                              >
                                ЗАПИСАТЬСЯ
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white/50 text-center py-4">Нет тренировок в этот день</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'membership':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-black uppercase mb-4 ${
                    demoUser.membership?.status === 'active' ? 'bg-green-500/20 text-green-500' : 
                    demoUser.membership?.status === 'frozen' ? 'bg-blue-500/20 text-blue-500' : 
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {demoUser.membership?.status === 'active' ? 'АКТИВЕН' : 
                     demoUser.membership?.status === 'frozen' ? 'ЗАМОРОЖЕН' : 'ИСТЕК'}
                  </span>
                  <h2 className="text-4xl font-black italic uppercase mb-2">{demoUser.membership?.type}</h2>
                  <div className="flex items-center gap-3 mt-4">
                    <MapPin className="text-nautilus" size={20} />
                    <div>
                      <p className="text-white/70 font-bold">{userClub?.name}</p>
                      <p className="text-white/50 text-sm">{userClub?.address}</p>
                    </div>
                  </div>
                  <p className="text-white/70 font-bold mt-4">Действует до {demoUser.membership?.endDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-xs font-black uppercase mb-2">ОСТАЛОСЬ ДНЕЙ</p>
                  <p className="text-6xl font-black text-nautilus">{demoUser.membership?.remainingDays}</p>
                </div>
              </div>
              
              {demoUser.membership?.remainingWorkouts && (
                <div className="bg-white/5 rounded-xl p-6 mb-6">
                  <p className="text-white/50 text-xs font-black uppercase mb-2">ОСТАЛОСЬ ТРЕНИРОВОК</p>
                  <p className="text-4xl font-black text-nautilus">{demoUser.membership.remainingWorkouts}</p>
                </div>
              )}

              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-nautilus text-white font-black text-lg italic uppercase rounded-xl hover:bg-white hover:text-nautilus transition-all">
                  ПРОДЛИТЬ
                </button>
                <button className="flex-1 py-4 bg-white/10 border border-white/20 text-white font-black text-lg italic uppercase rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Snowflake size={20} />
                  ЗАМОРОЗИТЬ
                </button>
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black italic uppercase">МОИ МЕТРИКИ</h3>
                <button className="px-6 py-3 bg-nautilus text-white font-black text-sm italic uppercase rounded-xl hover:bg-white hover:text-nautilus transition-all">
                  ДОБАВИТЬ ЗАПИСЬ
                </button>
              </div>
              
              {demoUser.metrics && demoUser.metrics.length > 0 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-white/50 text-xs font-black uppercase mb-2">ВЕС</p>
                      <p className="text-3xl font-black text-nautilus">{demoUser.metrics[demoUser.metrics.length - 1].weight} кг</p>
                      <p className="text-green-500 text-xs font-bold mt-1">↓ 3 кг</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-white/50 text-xs font-black uppercase mb-2">РОСТ</p>
                      <p className="text-3xl font-black text-nautilus">{demoUser.metrics[demoUser.metrics.length - 1].height} см</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-white/50 text-xs font-black uppercase mb-2">ЖИР</p>
                      <p className="text-3xl font-black text-nautilus">{demoUser.metrics[demoUser.metrics.length - 1].bodyFat}%</p>
                      <p className="text-green-500 text-xs font-bold mt-1">↓ 1.5%</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-white/50 text-xs font-black uppercase mb-2">МЫШЦЫ</p>
                      <p className="text-3xl font-black text-nautilus">{demoUser.metrics[demoUser.metrics.length - 1].muscleMass} кг</p>
                      <p className="text-green-500 text-xs font-bold mt-1">↑ 2 кг</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-black italic uppercase mb-4">ГРАФИК ДИНАМИКИ ВЕСА</h4>
                    <div className="h-48 flex items-end gap-2 mb-4">
                      {demoUser.metrics.map((metric, idx) => {
                        const maxWeight = Math.max(...demoUser.metrics!.map(m => m.weight || 0));
                        const minWeight = Math.min(...demoUser.metrics!.map(m => m.weight || 0));
                        const range = maxWeight - minWeight || 1;
                        const height = ((metric.weight! - minWeight) / range) * 100;
                        return (
                          <div key={metric.id} className="flex-1 flex flex-col items-center">
                            <div 
                              className="w-full bg-gradient-to-t from-nautilus to-nautilus/50 rounded-t-lg min-h-[20px] mb-2"
                              style={{ height: `${height}%` }}
                            ></div>
                            <p className="text-white/70 text-xs font-bold">{metric.weight} кг</p>
                            <p className="text-white/50 text-xs mt-1">{metric.date.split('-').reverse().join('.')}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h4 className="text-lg font-black italic uppercase mb-4">ИСТОРИЯ ИЗМЕРЕНИЙ</h4>
                    <div className="space-y-3">
                      {demoUser.metrics.map((metric, idx) => (
                        <div key={metric.id} className="flex items-center justify-between py-3 border-b border-white/10">
                          <div>
                            <p className="text-white/70 text-sm font-bold">{metric.date}</p>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-white/50 text-xs">Вес: {metric.weight} кг</span>
                              <span className="text-white/50 text-xs">Жир: {metric.bodyFat}%</span>
                              <span className="text-white/50 text-xs">Мышцы: {metric.muscleMass} кг</span>
                            </div>
                          </div>
                          {idx > 0 && (
                            <div className="text-right">
                              <p className="text-green-500 text-xs font-bold">↓ {demoUser.metrics[idx - 1].weight! - metric.weight!} кг</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'visits':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <h3 className="text-2xl font-black italic uppercase mb-6">ИСТОРИЯ ПОСЕЩЕНИЙ</h3>
              <div className="space-y-4">
                {demoUser.visits?.map((visit) => (
                  <div key={visit.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white/50 text-xs font-black uppercase mb-1">{visit.date}</p>
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="text-nautilus" />
                          <span className="text-lg font-black italic text-nautilus">{visit.time}</span>
                          <span className="text-white/50 text-sm">• {visit.duration} мин</span>
                        </div>
                      </div>
                      <MapPin size={16} className="text-white/50" />
                    </div>
                    <h4 className="text-xl font-black italic uppercase mb-2">{visit.clubName}</h4>
                    {visit.activity && (
                      <p className="text-white/70 font-bold">{visit.activity}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'purchase':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <h3 className="text-2xl font-black italic uppercase mb-6">КУПИТЬ УСЛУГИ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'АБОНЕМЕНТ', description: 'Продление или новый абонемент', price: 'от 4 500 ₽' },
                  { name: 'ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ', description: 'Индивидуальные занятия с тренером', price: 'от 2 500 ₽' },
                  { name: 'СОЛЯРИЙ', description: 'Сеансы в солярии', price: 'от 300 ₽' },
                  { name: 'МАССАЖ', description: 'Расслабляющий или спортивный массаж', price: 'от 1 500 ₽' },
                  { name: 'SPA-ПРОЦЕДУРЫ', description: 'Уходовые процедуры', price: 'от 2 000 ₽' },
                  { name: 'ДЕТСКИЙ КЛУБ', description: 'Абонемент для ребенка', price: 'от 2 500 ₽' },
                ].map((service, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-nautilus/50 transition-all group cursor-pointer">
                    <h4 className="text-xl font-black italic uppercase mb-2 group-hover:text-nautilus transition-colors">{service.name}</h4>
                    <p className="text-white/70 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-black text-nautilus">{service.price}</p>
                      <button className="px-6 py-2 bg-nautilus text-white font-black text-sm italic uppercase rounded-lg hover:bg-white hover:text-nautilus transition-all">
                        КУПИТЬ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white relative min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/spxtrF8C/3S7A1888.jpg" 
            alt="Nautilus Profile" 
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
                ЛИЧНЫЙ
              </h1>
              <h1 className="text-[10vw] md:text-[8vw] font-black leading-none mb-10 tracking-tighter uppercase -mt-8 md:-mt-24 text-center">
                <span className="text-nautilus">КАБИНЕТ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-bold italic mt-8">
              {isDemoMode ? 'Управляй своим прогрессом и абонементом в одном месте.' : 'Мы работаем над созданием вашего личного кабинета.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content - Заглушка или полный кабинет */}
      {!isDemoMode ? (
        <section className="py-40 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-12">
                <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-6 text-center">
                  В РАЗРАБОТКЕ
                </h2>
                <p className="text-xl text-white/70 font-bold italic leading-relaxed text-center">
                  Мы работаем над созданием вашего личного кабинета. 
                  Скоро здесь появится возможность управлять абонементом, 
                  просматривать историю посещений и многое другое.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-40 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sticky top-32">
                    <nav className="space-y-2">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl font-black text-sm italic uppercase transition-all ${
                              activeTab === tab.id
                                ? 'bg-nautilus text-white'
                                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            <Icon size={20} />
                            <span>{tab.name}</span>
                          </button>
                        );
                      })}
                    </nav>
                    <button className="w-full mt-6 flex items-center gap-4 px-4 py-4 rounded-xl font-black text-sm italic uppercase bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-all">
                      <LogOut size={20} />
                      <span>ВЫЙТИ</span>
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Кнопка "Демо режим" в правом нижнем углу */}
      <button
        onClick={() => setIsDemoMode(!isDemoMode)}
        className="fixed bottom-8 right-8 z-50 px-8 py-4 bg-nautilus text-white font-black text-lg italic uppercase rounded-xl flex items-center gap-3 shadow-2xl hover:bg-white hover:text-nautilus transition-all transform hover:scale-110"
        style={{
          backgroundColor: isDemoButtonHovered ? 'white' : '#372da5',
          color: isDemoButtonHovered ? '#372da5' : 'white'
        }}
        onMouseEnter={() => setIsDemoButtonHovered(true)}
        onMouseLeave={() => setIsDemoButtonHovered(false)}
      >
        <Eye size={20} style={{ color: isDemoButtonHovered ? '#372da5' : 'white', transition: 'color 0.3s' }} />
        <span style={{ color: isDemoButtonHovered ? '#372da5' : 'white', transition: 'color 0.3s' }}>
          {isDemoMode ? 'ВЫХОД ИЗ ДЕМО' : 'ДЕМО РЕЖИМ'}
        </span>
      </button>
    </div>
  );
};

export default Profile;
