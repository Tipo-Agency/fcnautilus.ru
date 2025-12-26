
import { Club, Coach, Service, PricingPlan, ScheduleItem, Vacancy } from './types';

export const CLUBS: Club[] = [
  {
    id: 'nautilus-south',
    name: 'Южный',
    address: 'ул. Суворова, 25а',
    phone: '+7 (4212) 95-09-31',
    image: 'https://i.ibb.co/3994hQC0/3S7A2512.jpg',
    features: ['Олимпийский бассейн', 'Зал 1500м²', 'Зона единоборств', 'Luxury SPA', 'Детская арена'],
    area: 8000,
    cards: [
      {
        id: 'south-1',
        name: 'ЭЛИТ PRO',
        description: 'Максимальный доступ ко всем зонам клуба',
        features: ['Бассейн олимпийского уровня', 'Luxury SPA', 'Персональный коуч', '24/7 Доступ'],
        popular: true
      },
      {
        id: 'south-2',
        name: 'СТАНДАРТ',
        description: 'Все необходимое для эффективных тренировок',
        features: ['Тренажерный зал', 'Групповые программы', 'Сауна', 'Детский клуб']
      },
      {
        id: 'south-3',
        name: 'БАЗОВЫЙ',
        description: 'Начни свой путь к идеальной форме',
        features: ['Тренажерный зал', 'Групповые программы', 'Сауна']
      }
    ],
    mapCoordinates: {
      lat: 48.4802,
      lon: 135.0719
    }
  },
  {
    id: 'nautilus-zagarodny',
    name: 'Загородный',
    address: 'ул. Воровского, 17',
    phone: '+7 (4212) 600-200',
    image: 'https://i.ibb.co/jZH8t3Yb/3S7A2671.jpg',
    features: ['CrossFit бокс', 'Сайкл студия', 'Бойцовский клуб', 'Био-сауна', 'Лаборатория фитнеса'],
    area: 3200,
    cards: [
      {
        id: 'zagarodny-1',
        name: 'ЭЛИТ PRO',
        description: 'Полный доступ к премиум-зонам',
        features: ['CrossFit бокс', 'Сайкл студия', 'Био-сауна', '24/7 Доступ'],
        popular: true
      },
      {
        id: 'zagarodny-2',
        name: 'СТАНДАРТ',
        description: 'Все для эффективных тренировок',
        features: ['Тренажерный зал', 'Групповые программы', 'Бойцовский клуб', 'Сауна']
      },
      {
        id: 'zagarodny-3',
        name: 'БАЗОВЫЙ',
        description: 'Начни свой путь к результату',
        features: ['Тренажерный зал', 'Групповые программы', 'Сауна']
      }
    ],
    mapCoordinates: {
      lat: 48.5000,
      lon: 135.1000
    }
  }
];

export const SERVICES: Service[] = [
  { id: 'pool', title: 'БАССЕЙН И ТЕРМАЛЬНЫЙ КОМПЛЕКС', description: 'Бассейн олимпийского уровня и термальные зоны для восстановления.', category: 'pool', image: '/images/basseyn.jpg' },
  { id: 'gym', title: 'ТРЕНАЖЕРНЫЙ ЗАЛ', description: 'Хардкорный тренинг на лучшем железе мира.', category: 'gym', image: '/images/trenazhernyy-zal.jpg' },
  { id: 'group', title: 'ПОПУЛЯРНЫЕ ГРУППОВЫЕ ПРОГРАММЫ', description: 'Энергия команды: от HIIT до функционального тренинга.', category: 'group', image: '/images/gruppovye-programmy.jpg' },
  { id: 'martial', title: 'БОЕВЫЕ ИСКУССТВА', description: 'Бокс, ММА, кикбоксинг для всех уровней подготовки.', category: 'martial', image: '/images/boycovskiy-klub.jpg' },
  { id: 'kids', title: 'ДЕТСКИЙ КЛУБ', description: 'Развиваем атлетов с самого детства.', category: 'kids', image: '/images/detskiy-klub.jpg' },
  { id: 'yoga', title: 'ЙОГА И ПИЛАТЕС ДЛЯ ВСЕХ УРОВНЕЙ ПОДГОТОВКИ', description: 'Гармония тела и духа. Классы для начинающих и продвинутых.', category: 'yoga', image: '/images/yoga-i-pilates.jpg' }
];

export const COACHES: Coach[] = [
  {
    id: 'c1',
    name: 'Артем Золотарев',
    specialty: 'Элит-тренер PRO',
    experience: '15 ЛЕТ',
    image: 'https://i.ibb.co/7xynmSSD/3S7A2142.jpg',
    achievements: ['МСМК', 'Чемпион Мира']
  },
  {
    id: 'c2',
    name: 'Виктория Ким',
    specialty: 'Эксперт по движению',
    experience: '7 ЛЕТ',
    image: 'https://i.ibb.co/prxB8j3W/3S7A2943.jpg',
    achievements: ['Мастер йоги', 'Специалист по реабилитации']
  }
];

export const VACANCIES: Vacancy[] = [
  { 
    id: 'v1', 
    title: 'Фитнес-коуч эксперт', 
    salary: 'от 100 000 ₽', 
    description: 'Мы ищем лучших. Только для тех, кто живет результатом.', 
    requirements: ['Спортивное образование', 'Харизма', 'Опыт от 3 лет'] 
  },
  { 
    id: 'v2', 
    title: 'Ниндзя продаж', 
    salary: 'от 80 000 ₽', 
    description: 'Твоя задача — продавать образ жизни, а не просто карты.', 
    requirements: ['Успешные кейсы в продажах', 'Драйв'] 
  }
];

export const NEWS = [
  { id: 1, title: 'Ночной тренинг: Новый уровень', date: '24.05.2024', image: 'https://i.ibb.co/fVPkqLx8/3S7A2952.jpg', slug: 'night-training' },
  { id: 2, title: 'Зона Hammer Strength обновлена', date: '20.05.2024', image: 'https://i.ibb.co/xtb7H5vZ/3S7A2178.jpg', slug: 'new-equipment' },
  { id: 3, title: 'Летняя вечеринка у бассейна', date: '15.05.2024', image: 'https://i.ibb.co/ch4JC0t2/3S7A2784.jpg', slug: 'pool-party' }
];

export const PRICING: PricingPlan[] = [
  { id: '1', name: 'Старт', price: 4500, duration: '1 месяц', features: ['Доступ во все зоны', 'Сауна'] },
  { id: '2', name: 'Элит PRO', price: 42000, duration: '12 месяцев', features: ['Бассейн', 'SPA', 'Сессия с коучем', '24/7 Доступ'], popular: true },
  { id: '3', name: 'Семейный', price: 85000, duration: '12 месяцев', features: ['2 Взрослых + 1 Ребенок', 'Полный доступ', 'Детский клуб'] }
];

export const SCHEDULE: ScheduleItem[] = [
  { id: 's1', time: '07:00', title: 'Утренняя Йога', coach: 'Виктория К.', clubId: 'nautilus-south', category: 'Восстановление', duration: '60м' },
  { id: 's2', time: '18:30', title: 'Power Lift', coach: 'Артем З.', clubId: 'nautilus-zagarodny', category: 'Сила', duration: '55м' }
];

export const FAQS = [
  { q: 'Можно ли заморозить карту?', a: 'Да, от 30 до 90 дней в зависимости от вашего тарифа.' },
  { q: 'Есть ли пробное посещение?', a: 'Запишитесь на первый гостевой визит бесплатно через форму на сайте.' }
];
