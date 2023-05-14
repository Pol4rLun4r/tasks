import { z } from "zod";

// zodSchema
const Schema = z.object({
    username: z.string()
        .nonempty('Username is required')
        .min(3, 'Username must be at least 3 characters long')
        .toLowerCase(),
    password: z.string()
        .nonempty('Password is required')
        .min(5, 'Password must be at least 5 characters')
});

export default Schema;