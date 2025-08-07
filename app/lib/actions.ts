'use server';

import { AuthError } from 'next-auth';
import { NextAuthResult } from '../auth';

export async function actionLogin(prevState, formData: FormData) {
  try {
    await NextAuthResult.signIn('credentials', formData);
  } catch (error) {
    console.log('error', error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
