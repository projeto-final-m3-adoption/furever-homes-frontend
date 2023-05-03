import { z } from "zod";

export const registerNewPetFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  type: z.string(),
  age: z.string(),    
  gender: z.string(),
  size: z.string(),
  img: z.string().url(),
  description: z.string(),
  address: z.string(),
});

export type TRegisterFormValues = z.infer<typeof registerNewPetFormSchema>;
