'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getCurrentUser, getAppointmentById } from '../../../lib/storage';
import AppointmentForm from '../../../components/AppointmentForm';

export default function EditAppointmentPage() {
  const router = useRouter();
  const params = useParams();
  const appointmentId = params.id as string;

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/');
      return;
    }
    const appointment = getAppointmentById(appointmentId);
    if (!appointment || appointment.userId !== user.id) {
      router.push('/appointments');
    }
  }, [appointmentId, router]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8">
      <AppointmentForm appointmentId={appointmentId} />
    </div>
  );
}
