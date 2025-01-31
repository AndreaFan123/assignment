import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  ticker: z.string().min(1),
  description: z.string().min(1),
  image: z
    .instanceof(File, { message: "Please upload a file" })
    .refine((f) => f.size < 500_000, "Max 500kb upload size"),
  socialMedias: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      })
    )
    .optional(),
});
