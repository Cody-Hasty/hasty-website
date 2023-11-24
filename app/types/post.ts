import { z } from 'zod'

export const PostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  coverImage: z.string(),
  excerpt: z.string(),
  ogImage: z.object({
    url: z.string(),
  }).optional(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export type PostType = z.infer<typeof PostSchema>

export type ItemType = {
  [key: string]: string
}
