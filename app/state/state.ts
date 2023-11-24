import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ItemType, PostSchema, PostType } from '@/types/post'

export const allPostKeys = [...Object.keys(PostSchema.shape)] as (keyof PostType)[]

const postsDirectory = join(process.cwd(), '_posts')

export function getDirectorySlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getDirectoryPostBySlug(slug: string, fields: string[] = allPostKeys) {
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

export function getAllPostsFromDirectory(fields: string[] = allPostKeys) {
  const slugs = getDirectorySlugs()
  const posts = slugs
    .map((slug) => getDirectoryPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllPostsFromDirectoryByTag(tag: string, fields: string[] = allPostKeys) {
  const slugs = getDirectorySlugs()
  const posts = slugs
    .map((slug) => getDirectoryPostBySlug(slug, fields))
    .filter((post) => post.tags ? post.tags.includes(tag): false)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

