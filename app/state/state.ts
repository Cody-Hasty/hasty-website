import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ItemType, PostSchema, DefaultPostSchema, allPostKeys } from '@/types/post'

const postsDirectory = join(process.cwd(), '_posts')
export const getChronologicalPostSlugs = () => getAllPostsFromDirectory(["date", "slug"]).sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
export const getDirectorySlugs = () => fs.readdirSync(postsDirectory).map((slug) => slug.replace(/\.md$/, ''))
export const isValidSlug = (slug: string) => getDirectorySlugs().includes(slug)

export function getDirectoryPostBySlug(slug: string, fields = allPostKeys) {
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
  return fields === allPostKeys ? DefaultPostSchema.parse(item) : PostSchema(fields).parse(item)
}

export function getAllPostsFromDirectory(fields = allPostKeys) {
  const slugs = getDirectorySlugs()
  const posts = slugs
    .map((slug) => getDirectoryPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

// export function getAllPostsFromDirectoryByTag(tag: string, fields = allPostKeys) {

//   const slugs = getDirectorySlugs()
//   const posts = slugs
//     .map((slug) => getDirectoryPostBySlug(slug, fields))
//     .filter((post) => post.tags ? post.tags.includes(tag): false)
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return posts
// }

export function getAdjacentPostSlugs(targetDate: string) {
  const allPostDates = getChronologicalPostSlugs()
  let targetIndex = allPostDates.findIndex(post => post.date === targetDate);

  if (targetIndex === -1) {
    return { previous: null, next: null };
  }

  let previousPostSlug = targetIndex < allPostDates.length - 1 ? allPostDates[targetIndex + 1].slug : null;
  let nextPostSlug = targetIndex > 0 ? allPostDates[targetIndex - 1].slug : null;

  return { previous: previousPostSlug, next: nextPostSlug };
}

export function getLatestPostSlug() {
  const allPostDates = getChronologicalPostSlugs()
  return allPostDates.length > 0 ? allPostDates[0].slug : null
}
