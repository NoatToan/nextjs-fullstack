'use server';

import Box from '@/_modules/components/Box';
import Col from '@/_modules/components/Col';
import PageWrapper from '@/_modules/components/PageWrapper';
/**
 * This layout to apply the scale to whole app including
 * public routes
 */
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <Col>
        <GuestHeader />
        <Box className='min-h-[calc(100vh-10rem)]'>{children}</Box>
        <GuestFooter />
      </Col>
    </PageWrapper>
  );
}

function GuestHeader() {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <h1 className='text-xl'>Guest Header</h1>
    </header>
  );
}
function GuestFooter() {
  return (
    <footer className='bg-gray-800 text-white p-4 mt-auto'>
      <p className='text-center'>Guest Footer</p>
    </footer>
  );
}
