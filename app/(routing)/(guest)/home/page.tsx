'use server';

import { getServerSession } from 'next-auth';

export default async function Page() {
  const sessionServer = await getServerSession();

  return (
    <div>Home Server session:{JSON.stringify(sessionServer, null, 2)}</div>
  );
}
