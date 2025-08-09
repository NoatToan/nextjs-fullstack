'use client';
import { useSession } from 'next-auth/react';

export default function DashboardScreen() {
  // TODO: Consider to secure this information by doing anything in server side

  const sessionClient = useSession();
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      {JSON.stringify(sessionClient, null, 2)}
    </div>
  );
}
