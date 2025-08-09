'use server';

import NextComponent from '@/_modules/components/NextComponent';
import { Link } from '@heroui/react';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const sessionServer = await getServerSession();

  return (
    <>
      <div>Home Server session:{JSON.stringify(sessionServer, null, 2)}</div>
      <Link as={NextComponent.NextLink} href='/dashboard'>
        Dashboard
      </Link>
    </>
  );
}
