import { Button, Link } from '@heroui/react';
import NextComponent from '../components/NextComponent';
import Col from '../components/Col';

export default function IndexScreen() {
  return (
    <Col className='p-10'>
      <Button color='primary'>Button</Button>
      <Link as={NextComponent.NextLink} href='auth/login'>
        Login
      </Link>
      <Link as={NextComponent.NextLink} href='home'>
        Home
      </Link>
    </Col>
  );
}
