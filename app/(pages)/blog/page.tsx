import MoreStories from '@/components/blog/partials/more-stories'
import BlogIndex from '@/components/blog'
import { getAllPostsFromDirectory } from '@/state/state'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog | Hasty Creations"
}

export default function BlogPage() {
  const posts = getAllPostsFromDirectory()
  const blogIndex = posts[0]
  const morePosts = posts.slice(1)
  return (
    <div id="blog">
      <div className='container mx-auto px-5 pt-5'>
        {blogIndex && (
          <BlogIndex
            title={blogIndex.title}
            blogImage={blogIndex.blogImage}
            date={blogIndex.date}
            slug={blogIndex.slug}
            excerpt={blogIndex.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </div>
  )
}
