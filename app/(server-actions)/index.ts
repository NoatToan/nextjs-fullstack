'use server';

import { revalidatePath } from 'next/cache';

export async function serverActionRevalidatePath() {
  // Implementation for revalidating the path
  revalidatePath('/');
}
