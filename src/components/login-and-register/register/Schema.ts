import { z } from "zod";

const Schema = z.object({
    username: z.string()
        .nonempty('Username is required')
        .min(3, 'Username must be at least 3 characters long')
        .toLowerCase(),
    password: z.string()
        .nonempty('Password is required')
        .min(5, 'Password must be at least 5 characters'),
    confirmPass: z.string()
        .nonempty('Confirm your password')
        .min(5, 'Confirm Password must be at least 5 characters')
}).refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"]
});

export default Schema;