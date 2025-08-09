'use client';

import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

export default function LoginScreen() {
  // const csrfToken = await getCsrfToken();
  const router = useRouter();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await signIn('credentials', {
              email: 'tony',
              password: 'tony',
              redirect: false,
            });

            router.replace('/dashboard');
          } catch (error) {
            console.log('error', error);
            // throw error;
          }
        }}
      >
        <label htmlFor='email'>
          Email
          <input name='email' id='email' />
        </label>
        <label htmlFor='password'>
          Password
          <input name='password' id='password' />
        </label>
        <input type='submit' value='Sign In' />
      </form>
    </div>
  );
}
