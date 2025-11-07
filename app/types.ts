export interface User {
  id: string;
  email: string;
  password: string; // In production, this should be hashed
}

export interface Service {
  id: string;
  userId: string;
  title: string;
  description: string;
  price: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  date: string; // ISO date string
  time: string; // Time string
  status: 'scheduled' | 'completed' | 'cancelled';
  paymentMethod?: 'cash' | 'stripe';
  paymentStatus: 'pending' | 'paid';
  notes: string;
  createdAt: string;
}
