"use server"

import type { KVNamespace } from "@cloudflare/workers-types"
import { init } from "@paralleldrive/cuid2"
import { GenerateUrlSchema, generateUrlSchema } from "./_schema"

export async function generateUrl(data: GenerateUrlSchema): Promise<string|null> {
  const { shrtn } = (process.env as unknown as { shrtn: KVNamespace })
  const url = generateUrlSchema.safeParse(data)
  const id = init({ length: 5 })()

  if (url.success === false) {
    return null
  }

  await shrtn.put(id, url.data.url, { expirationTtl: 1440 })
  return id
}