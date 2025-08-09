'use client';

import Box from '@/_modules/components/Box';
import { SessionProvider } from 'next-auth/react';

// use client to add SessionProvider

/**
 * This layout to apply to Admin routes only
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminHeader />
      <Box className='min-h-[calc(100vh-8rem)]'>{children}</Box>
      <AdminFooter />
    </SessionProvider>
  );
}

function AdminHeader() {
  return (
    <header className='bg-green-800 text-white p-4'>
      <h1 className='text-xl'>Admin Header</h1>
    </header>
  );
}
function AdminFooter() {
  return (
    <footer className='bg-green-800 text-white p-4 mt-auto'>
      <p className='text-center'>Admin Footer</p>
    </footer>
  );
}
