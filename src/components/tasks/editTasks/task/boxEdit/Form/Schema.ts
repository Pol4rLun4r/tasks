import { z } from "zod";

// zodSchema
const Schema = z.object({
    name: z.string()
        .nonempty('name is required')
        .max(55, 'very long name'),
    description: z.string(),
    subTasks: z.array(z.object({
        name: z.string()
            .nonempty('name is required')
            .max(55, 'very long name')
    }))
});

export default Schema;