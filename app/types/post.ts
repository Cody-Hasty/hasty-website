import { z } from 'zod'

export type ItemType = {
  [key: string]: string
}

export type PostType = z.infer<typeof DefaultPostSchema>

export type AdjacentPostsType = {
  previous: PostType | null,
  next: PostType | null
}

export const DefaultPostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  blogImage: z.string(),
  excerpt: z.string(),
  ogImage: z.object({
    url: z.string(),
  }).optional(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export const allPostKeys = [...Object.keys(DefaultPostSchema.shape)] as (keyof PostType)[]

export const PostSchema = <T extends keyof PostType>(includeFields: T[] | null = null) => {
  if (includeFields && includeFields.length > 0) {
    const customSchema: { [K in T]: z.ZodType<string, z.ZodTypeDef, string> } = {} as any;
    includeFields.forEach((field) => {
      customSchema[field] = z.string();
    });
    return z.object(customSchema) as z.ZodType<Pick<PostType, T>, z.ZodTypeDef, Pick<PostType, T>>;
  } else {
    return DefaultPostSchema;
  }
}
