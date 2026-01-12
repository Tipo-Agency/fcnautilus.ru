
export interface Club {
  id: string;
  name: string;
  address: string;
  phone: string;
  image: string;
  features: string[];
  area: number;
  cards?: ClubCard[];
  mapCoordinates?: {
    lat: number;
    lon: number;
  };
}

export interface ClubCard {
  id: string;
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Coach {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'gym' | 'pool' | 'group' | 'kids' | 'spa';
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  coach: string;
  clubId: string;
  category: string;
  duration: string;
}

export interface Vacancy {
  id: string;
  title: string;
  salary: string;
  description: string;
  requirements: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  membership?: Membership;
  metrics?: UserMetrics[];
  visits?: Visit[];
  personalSchedule?: PersonalScheduleItem[];
}

export interface Membership {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'frozen' | 'expired';
  remainingDays: number;
  remainingWorkouts?: number;
  clubId: string;
}

export interface UserMetrics {
  id: string;
  date: string;
  weight?: number;
  height?: number;
  bodyFat?: number;
  muscleMass?: number;
  notes?: string;
}

export interface Visit {
  id: string;
  date: string;
  time: string;
  clubId: string;
  clubName: string;
  duration: number;
  activity?: string;
}

export interface PersonalScheduleItem {
  id: string;
  date: string;
  time: string;
  title: string;
  coach: string;
  clubId: string;
  category: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface ServicePurchase {
  id: string;
  name: string;
  type: 'membership' | 'workout' | 'solarium' | 'massage' | 'other';
  price: number;
  quantity?: number;
  description: string;
}
