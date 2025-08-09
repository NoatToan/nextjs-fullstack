'use client';

import { IUser } from '@/_modules/backend/database/mongoose';
import Col from '@/_modules/components/Col';
import { serverActionRevalidatePath } from '@/app/(server-actions)';
import { Button } from '@heroui/react';

export default function HomeIndexScreen({ user }: { user: IUser[] }) {
  console.log('user', user);

  return (
    <Col>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, index) => {
            return (
              <tr key={u.email}>
                <td>{index + 1}</td>
                <td>{u?.email}</td>
                <td>{u?.firstName}</td>
                <td>{u?.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        onPress={async () => {
          await serverActionRevalidatePath();
        }}
      >
        Refresh
      </Button>
    </Col>
  );
}
