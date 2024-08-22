import { PostType } from '@/types/post'
import Head from 'next/head'
import Markdown from 'react-markdown'
import BlogImage from './partials/blog-image'
import parseDate from '@/utils/parseDate'
import remarkGfm from 'remark-gfm'

type PostProps = {
  post: PostType
}

export default function Post({ post }: PostProps) {
  return (
    <article className="mb-16">
      <Head>
        <title>{`${post.title || "Blog"} | Hasty Creations`}</title>
        {post.ogImage && <meta property="og:image" content={post.ogImage.url} />}
      </Head>
      <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-6">
        {post.title}
      </h1>
      <div className="mb-8 text-md">
        <time dateTime={post.date}>
          {parseDate(post.date)}
        </time>
      </div>
      <div className="mb-8">
        <BlogImage title={post.title} src={post.blogImage} />
      </div>
      {post.content && (
        <div className="min-h-content">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
      )}
    </article>
  )
}
