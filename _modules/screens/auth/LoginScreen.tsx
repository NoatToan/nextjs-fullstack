'use client';
import { actionLogin } from '@/app/lib/actions';
import { Button } from '@heroui/react';
import { useActionState } from 'react';

export default function LoginScreen() {
  const [errorMessage, formAction, isPending] = useActionState(
    actionLogin,
    undefined
  );

  return (
    <div>
      <form className='space-y-3' onSubmit={formAction}>
        Login Screen
        <input
          className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
          id='email'
          type='email'
          name='email'
          placeholder='Enter your email address'
          required
        />
        <input
          className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
          id='password'
          type='password'
          name='password'
          placeholder='Enter password'
          required
          minLength={6}
        />
        <Button className='mt-4 w-full' type='submit'>
          Log in
        </Button>
      </form>
    </div>
  );
}
