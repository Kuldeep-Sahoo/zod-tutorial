import z from "zod";

export const userFormSchema = z
  .object({
    name: z.string().min(1, "name is req"),
    email: z.string().email("Invalid Email"),
    age: z
      .number()
      .min(18, "Age must be atleast 18")
      .int("Age Must be a number"),
    password: z
      .string()
      .min(8, "Password must be at least 8 character")
      .regex(/[A-Z]/, "password must conyain at least uppercase letters")
      .regex(/[0-9]/, "password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "password must contain at least one special character"
      )
      .regex(/[a-z]/, "password must contain at least one lowercase letter"),
    confirmPassword: z.string(),
    phone: z.number().min(10, "Phone must be at least 10 characters"),
    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Please select a valid gender" }),
    }),
  })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password does not match",
        path: ["confirmPassword"], // attach path to the confirmPassword
  
  });


export type UserFormSchema = z.infer<typeof userFormSchema>;
  
export type FormErrors=Partial<Record<keyof UserForm,string[]>>