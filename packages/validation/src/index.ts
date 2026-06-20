import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const reportSchema = z.object({
  type: z.string().min(1, 'Issue type is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  latitude: z.number(),
  longitude: z.number(),
});
