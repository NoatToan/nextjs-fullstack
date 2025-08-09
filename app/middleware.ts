export { default } from 'next-auth/middleware';

//https://next-auth.js.org/configuration/nextjs#basic-usage
export const config = { matcher: ['/dashboard', '/admin/:path*'] };
