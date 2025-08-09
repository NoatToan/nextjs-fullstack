'use client';
import { useSession } from 'next-auth/react';

export default function DashboardScreen() {
  // TODO: Consider to secure this information by doing anything in server side

  const sessionClient = useSession();
  return (
    <div className='font-sans min-h-screen'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      {JSON.stringify(sessionClient, null, 2)}
    </div>
  );
}
