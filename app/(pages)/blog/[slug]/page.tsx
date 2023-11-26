import { getAllPostsFromDirectory, getDirectoryPostBySlug, getAdjacentPostSlugs, isValidSlug } from '@/state/state'
import Post from '@/components/blog/post'
import Error from '@/components/error'
import BlogNavigation from '@/components/blog/navigation'

export async function generateStaticParams() {
  return getAllPostsFromDirectory().map((post) => ({
    slug: post.slug,
  }))
}

type Params = {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: Params) {
  const validSlug = isValidSlug(params.slug)
  const post = validSlug ? getDirectoryPostBySlug(params.slug) : null
  const morePosts = post ? getAdjacentPostSlugs(post.date) : null
  const nextPost = morePosts?.next ? getDirectoryPostBySlug(morePosts?.next) : null
  const previousPost = morePosts?.previous ? getDirectoryPostBySlug(morePosts?.previous) : null

  return (
    <div className='container mx-auto px-5 pt-5 text-md'>
      {!validSlug && <Error statusCode={404} />}
      {post && <Post post={post} />}
      <BlogNavigation previous={previousPost} next={nextPost} />
    </div>
  )
}
