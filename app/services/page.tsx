'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, getServicesByUserId, deleteService } from '../lib/storage';
import { Service } from '../types';
import Link from 'next/link';

export default function ServicesPage() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [user, setUser] = useState(getCurrentUser());

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/');
      return;
    }
    setUser(currentUser);
    setServices(getServicesByUserId(currentUser.id));
  }, [router]);

  const handleDelete = (serviceId: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      deleteService(serviceId);
      setServices(services.filter(service => service.id !== serviceId));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 text-sm">
              ← Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Services
            </h1>
          </div>
          <button
            onClick={() => router.push('/services/new')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            + Add Service
          </button>
        </div>
        {services.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8 text-center">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              No services yet. Add your first service!
            </p>
            <button
              onClick={() => router.push('/services/new')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Add Service
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-4 border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {service.title}
                  </h3>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {service.price}
                  </span>
                  <button
                    onClick={() => router.push(`/services/${service.id}`)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
