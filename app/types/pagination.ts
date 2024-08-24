import { PostType } from "./post"

export type PaginatedPostsType = {
  posts: PostType[]
} & PaginationType

export type PaginationType = {
  total: number,
  totalPages: number,
  currentPage: number,
  hasPrevPage: boolean,
  hasNextPage: boolean
}