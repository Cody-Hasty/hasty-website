import { Metadata } from 'next'
import Post from '@/components/blog/post'
import Error from '@/components/shared/error'
import BlogNavigation from '@/components/blog/navigation'
import { getAdjacentPosts, getPostBySlug, getPostSlugs } from '@/utils/postUtils'

export async function generateStaticParams() {
  return (await getPostSlugs()).map(( slug: string ) => ({
    slug: slug,
  }))
}

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: `${post.title || "Blog"} | Hasty Creations`,
    ...(post.ogImage?.url && {openGraph: {
      images: [{ url: post.ogImage.url }]
    }})
  }
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug)
  const adjacentPosts = post && await getAdjacentPosts(post.slug)

  return (
    <div className='container mx-auto sm:px-5 sm:pt-5 text-md'>
      {!post && <Error statusCode={404} />}
      {post && <Post post={post} />}
      {adjacentPosts &&
        <BlogNavigation
          previous={adjacentPosts.previous}
          next={adjacentPosts.next}
        />
      }
    </div>
  )
}
