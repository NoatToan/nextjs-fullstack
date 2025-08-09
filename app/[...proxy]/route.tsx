import { NextResponse } from 'next/server';

// async function handler(request: NextRequest) {
async function handler() {
  console.log('123', 123);
  // const headers = new Headers(request.headers);
  // headers.set('Authorization', `Bearer ${session?.accessToken}`);

  // let backendUrl =
  //   process.env.THIRD_PARTY_API_EXAMPLE_BACKEND ??
  //   'https://third-party-backend.authjs.dev';

  // let url = request.nextUrl.href.replace(request.nextUrl.origin, backendUrl);
  // let result = await fetch(url, { headers, body: request.body });

  return NextResponse.json({ message: 'This is a proxy response' });
}

export const dynamic = 'force-dynamic';

export {
  // handler as GET,
  handler as POST,
};
