'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '../../lib/storage';
import AppointmentForm from '../../components/AppointmentForm';

export default function NewAppointmentPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8">
      <AppointmentForm />
    </div>
  );
}
