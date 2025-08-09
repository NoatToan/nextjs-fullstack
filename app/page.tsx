import NextComponent from '@/_modules/components/NextComponent';
import { Button } from '@heroui/button';
import { Link } from '@heroui/react';

export default async function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <Button color='primary'>Button</Button>
      <Link as={NextComponent.NextLink} href={'/home'}>
        Home
      </Link>
      <Link as={NextComponent.NextLink} href={'/auth/login'}>
        Login
      </Link>
    </div>
  );
}
