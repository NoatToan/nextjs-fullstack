import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';

import bcrypt from 'bcrypt';

type User = {
  id: string;
  email: string;
  password: string;
};

async function getUser(payload: {
  email: string;
  password: string;
}): Promise<User | undefined> {
  try {
    // const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    // return user[0];
    if (
      payload.email == 'toannt@hblab.vn' &&
      bcrypt.compareSync(payload.password, '123123')
    ) {
      const user: User = {
        id: '1',
        email: 'toannt@hblab.vn',
        password: bcrypt.hashSync('123123', 10),
      };
      return user;
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const NextAuthResult = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('credentials', credentials);
        const parsedCredentials = z
          .object({
            email: z.string(),
            // .email(),
            password: z.string(),
            // .min(6)
          })
          .safeParse(credentials);
        console.log('parsedCredentials', parsedCredentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser({ email, password });
          if (!user) return null;
        }

        return null;
      },
    }),
  ],
});
