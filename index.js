import { z } from 'zod';

const userSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
const requestBody = {
  username: 'sufiyan',
  email: 'sufiyan.sid@example.com',
  password: 'password123',
};
try {
  userSchema.parse(requestBody); 
  console.log('Validation passed!');
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log('Validation failed:', error.errors);
  }
}
