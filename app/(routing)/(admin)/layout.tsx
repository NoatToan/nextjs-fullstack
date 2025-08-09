'use client';

import { SessionProvider } from 'next-auth/react';

// use client to add SessionProvider

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
