import { z } from "zod";

// zodSchema
const Schema = z.object({
    name: z.string(),
    description: z.string(),
    subTasks: z.array(z.object({
        name: z.string()
    })),
    tasks: z.array(z.object({
        name: z.string()
    }))
});

export default Schema;