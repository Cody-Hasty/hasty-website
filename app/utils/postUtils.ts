import { AdjacentPostsType, PostType } from "@/types/post";
import { PaginatedPostsType } from "@/types/pagination";
import fs from 'fs'
import _ from 'lodash'
import { join } from 'path'
import matter from 'gray-matter'
import { ItemType, PostSchema, DefaultPostSchema, allPostKeys } from '@/types/post'

const postsDirectory = join(process.cwd(), '_posts')

export const getAllValidChronologicalPosts = async (): Promise<PostType[]> => {
  const allPostPromises = await Promise.all(
    fs.readdirSync(postsDirectory)
      .map(fileName => fileName.replace(/\.md$/, ''))
      .map(postSlug => getPostBySlug(postSlug))
  )
  return _.orderBy(allPostPromises, ['date', 'title'], ['desc', 'asc'])
}

export const getPostBySlug = async (slug: string, fields = allPostKeys): Promise<PostType> => {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const item: ItemType = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = slug
    }

    if (field === 'content') {
      item[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      item[field] = data[field]
    }
  })
  return fields === allPostKeys ? DefaultPostSchema.parse(item) : PostSchema(fields).parse(item)
};

export const getPostSlugs = async (): Promise<string[]> => {
  return getAllValidChronologicalPosts().then(posts => posts.map(post => post.slug))
}

export const getAdjacentPosts = async (slug: string): Promise<AdjacentPostsType> => {
  const allPosts = await getAllValidChronologicalPosts()
  const postIdx = allPosts.findIndex(post => post.slug === slug)
  const hasPrevPage = postIdx !== -1 && postIdx > 0
  const hasNextPage = postIdx !== -1 && postIdx + 1 < allPosts.length

  return {
    previous: hasPrevPage ? allPosts[postIdx - 1]: null,
    next: hasNextPage ? allPosts[postIdx + 1]: null
  }
}

export const getPaginatedPosts = async (page: number = 1, limit: number = 10): Promise<PaginatedPostsType> => {
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const allPosts = await getAllValidChronologicalPosts()
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts: posts,
    total: allPosts.length,
    totalPages: Math.ceil(allPosts.length / limit),
    currentPage: page,
    hasPrevPage: page > 1,
    hasNextPage: endIndex < allPosts.length
  }
}

export const getTotalPostPages = async (limit: number = 10) => {
  return Math.ceil((await getAllValidChronologicalPosts()).length / limit)
}
