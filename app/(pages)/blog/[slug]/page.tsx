import PostBody from '@/components/blog/post-body'
import PostHeader from '@/components/blog/post-header'
import Head from 'next/head'
import { getAllPostsFromDirectory, getDirectoryPostBySlug } from '@/state/state'

export async function generateStaticParams() {
  const posts = getAllPostsFromDirectory()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type Params = {
  params: {
    slug: string
  }
}

export default function Post({ params }: Params) {
  const post = getDirectoryPostBySlug(params.slug)
  return (
    <div className='container mx-auto px-5 pt-5'>
      <article className="mb-32">
        <Head>
          <title>{`${post.title || "Blog"} | Hasty Creations`}</title>
          {post.ogImage && <meta property="og:image" content={post.ogImage.url} />}
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        {post.content && <PostBody content={post.content} />}
      </article>
      <div className='pb-6 flex flex-row justify-between'>
        <a className='btn btn-primary' href='/blog'>← Blog</a>
        <a className='btn btn-primary' href='#top'>↑ Top</a>
        <a className='btn btn-primary' href='/'>Home →</a>
      </div>
    </div>
  )
}
