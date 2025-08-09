'use client';

import { SessionProvider } from 'next-auth/react';

// use client to add SessionProvider

/**
 * This layout to apply to Admin routes only
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
