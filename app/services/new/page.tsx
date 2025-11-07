'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '../../lib/storage';
import ServiceForm from '../../components/ServiceForm';

export default function NewServicePage() {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8">
      <ServiceForm />
    </div>
  );
}
