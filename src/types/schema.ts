import z from "zod"

// primitive data type


const stringSchema = z.string()

const result =stringSchema.parse(12)

// export const UserSchema = z.object({
    
// })