'use server';

import MongoDBService, { IUser } from '@/_modules/backend/database/mongoose';
import NextComponent from '@/_modules/components/NextComponent';
import Row from '@/_modules/components/Row';
import HomeIndexScreen from '@/_modules/screens/home/HomeIndexScreen';
import { Link } from '@heroui/react';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const sessionServer = await getServerSession();

  // Server actions
  const user = (await MongoDBService.getModels()
    .User.find({})
    .lean()) as IUser[];
  // Server actions --- end

  return (
    <>
      <div>Home Server session:{JSON.stringify(sessionServer, null, 2)}</div>
      <HomeIndexScreen user={user} />
      <Row className='w-[50%]'>
        <Link as={NextComponent.NextLink} href='/dashboard'>
          Dashboard
        </Link>
      </Row>
    </>
  );
}
