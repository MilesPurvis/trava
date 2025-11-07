'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from './lib/storage';
import AuthForm from './components/AuthForm';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center p-4">
      <AuthForm />
    </div>
  );
}
