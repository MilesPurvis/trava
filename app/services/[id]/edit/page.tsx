'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getCurrentUser, getServiceById } from '../../../lib/storage';
import ServiceForm from '../../../components/ServiceForm';

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params.id as string;

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/');
      return;
    }
    const service = getServiceById(serviceId);
    if (!service || service.userId !== user.id) {
      router.push('/services');
    }
  }, [serviceId, router]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8">
      <ServiceForm serviceId={serviceId} />
    </div>
  );
}
