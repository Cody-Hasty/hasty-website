import MoreStories from '@/components/blog/more-stories'
import HeroPost from '@/components/blog/hero-post'
import { getAllPosts } from '@/utils/api'
import Head from 'next/head'

export default function BlogPage() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <div id="blog">
      <Head>
        <title>{`Next.js Blog Example`}</title>
      </Head>
      <h1 className='mb-5'>Blog</h1>
      <div className='container mx-auto px-5'>
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
