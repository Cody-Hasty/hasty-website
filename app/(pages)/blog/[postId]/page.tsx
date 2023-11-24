"use client"
import { usePathname } from 'next/navigation'
import ErrorPage from 'next/error'
import PostBody from '@/components/blog/post-body'
import PostHeader from '@/components/blog/post-header'
import { getPostBySlug } from '@/utils/api'
import Head from 'next/head'

export default function Post() {
  const currentPath = usePathname()
  const postId = currentPath.split('/').pop()

  if (typeof postId !== 'string') {
    return <ErrorPage statusCode={404} />
  }

  const post = getPostBySlug(postId, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const title = `${post.title || "Blog"} | Hasty Creations`

  return (
    <div className='container mx-auto px-5'>
      <article className="mb-32">
        <Head>
          <title>{title}</title>
          {post.ogImage && <meta property="og:image" content={post.ogImage.url} />}
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        {post.content && <PostBody content={post.content} />}
      </article>
    </div>
  )
}
