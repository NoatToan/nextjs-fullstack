'use server';
import DashboardScreen from '@/_modules/screens/dashboard/DashboardScreen';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const sessionServer = await getServerSession();
  console.log('sessionServer', sessionServer);
  return <DashboardScreen />;
}
