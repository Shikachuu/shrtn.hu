import { z } from "zod"

export const generateUrlSchema = z.object({
  url: z.string().url({ message: "Wrong url format" }),
})

export type GenerateUrlSchema = z.infer<typeof generateUrlSchema>