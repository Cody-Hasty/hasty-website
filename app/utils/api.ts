import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ItemType, PostSchema } from '@/types/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const item: ItemType = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = realSlug
    }
    if (field === 'content') {
      item[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      item[field] = data[field]
    }
  })
  return PostSchema.parse(item)
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
