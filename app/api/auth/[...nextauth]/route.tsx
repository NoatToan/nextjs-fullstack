'use server';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { NextApiRequest, NextApiResponse } from 'next';

// type User = {
//   id: string;
//   email: string;
//   password: string;
// };

// async function getUser(payload: {
//   email: string;
//   password: string;
// }): Promise<User | undefined> {
//   try {
//     // const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
//     // return user[0];
//     if (
//       payload.email == 'toannt@hblab.vn' &&
//       bcrypt.compareSync(payload.password, '123123')
//     ) {
//       const user: User = {
//         id: '1',
//         email: 'toannt@hblab.vn',
//         password: bcrypt.hashSync('123123', 10),
//       };
//       return user;
//     }
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`

  const providers = [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
        // console.log('credentials', credentials);
        // console.log('req', req);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

        // try {
        //   // const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
        //   // return user[0];
        //   if (
        //     payload.email == 'toannt@hblab.vn' &&
        //     bcrypt.compareSync(payload.password, '123123')
        //   ) {
        //     const user: User = {
        //       id: '1',
        //       email: 'toannt@hblab.vn',
        //       password: bcrypt.hashSync('123123', 10),
        //     };
        //     return user;
        //   }
        // } catch (error) {
        //   console.error('Failed to fetch user:', error);
        //   throw new Error('Failed to fetch user.');
        // }
      },
    }),
  ];

  return await NextAuth(req, res, {
    pages: {
      // @file app/(routing)/auth/login/page.tsx
      signIn: '/auth/login', // Path to your custom sign-in page
      // You can also specify custom pages for signOut, error, etc.

      //
      // signOut: '/auth/signout',
      // error: '/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    providers: providers,
    session: {
      // strategy: 'jwt',
    },
    // secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      // // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async session({ session, token }: { session: any; token: any }) {
        console.log('session', session);
        console.log('token', token);
        return session;
      },
    },
  });
}

export { handler as GET, handler as POST };
