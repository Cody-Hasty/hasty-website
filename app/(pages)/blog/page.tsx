import { Metadata } from 'next'
import { getPaginatedPosts, getTotalPostPages } from '@/utils/postUtils'
import PaginationBar from '@/components/blog/partials/blog-pagination'
import HeroPost from '@/components/blog/partials/hero-post'
import MoreStories from '@/components/blog/partials/more-stories'
import BlogIndex from '@/components/blog'

export const metadata: Metadata = {
  title: "Blog | Hasty Creations"
}

// Todo: Change this based on screen size and/or user preference
const BLOG_POSTS_PER_PAGE = 3

const generateBlogPage = async (pageNum: number) => {
  const paginatedPosts = await getPaginatedPosts(pageNum, BLOG_POSTS_PER_PAGE)
  const mainPost = paginatedPosts ? paginatedPosts.posts[0] : null
  const morePosts = paginatedPosts ? paginatedPosts.posts.slice(1) : null

  return (
    <div className='px-5 pt-5' key={`page-${pageNum}`}>
      {mainPost && <HeroPost post={mainPost} />}
      {morePosts && <MoreStories posts={morePosts} />}
      {paginatedPosts && <PaginationBar props={paginatedPosts} />}
    </div>
  )
}

const allBlogPages = async () => {
  const totalPages = await getTotalPostPages(BLOG_POSTS_PER_PAGE)
  const allBlogPagesPromises = []
  for (let i = 1; i <= totalPages; i++) {
    const blogPage = await generateBlogPage(i)
    allBlogPagesPromises.push(blogPage)
  }

  const allBlogPages = await Promise.all(allBlogPagesPromises);
  return allBlogPages;
}

export default async function BlogPage() {
  const blogPages = await allBlogPages()

  return (
    <div id="blog">
      <BlogIndex blogPages={blogPages} />
    </div>
  )
}
