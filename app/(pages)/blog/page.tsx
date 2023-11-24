import MoreStories from '@/components/blog/more-stories'
import HeroPost from '@/components/blog/hero-post'
import { getAllPostsFromDirectory } from '@/state/state'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog | Hasty Creations"
}

export default function BlogPage() {
  const posts = getAllPostsFromDirectory()
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <div id="blog">
      <div className='container mx-auto px-5 pt-5'>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </div>
  )
}
