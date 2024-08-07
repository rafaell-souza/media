import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email().min(5).max(255),
    password: z.string().min(8).max(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/)
})

export default loginSchema;