import BlogImage from '@/components/blog/partials/blog-image'
import Link from 'next/link'
import parseDate from '@/utils/parseDate'
import { PostType } from '@/types/post'

export default function HeroPost({ post }: { post: PostType }) {
  return (
    <div>
      <div className="mb-8 md:mb-16">
        <BlogImage title={post.title} src={post.blogImage} slug={post.slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/blog/${post.slug}`}
              href="/blog/[slug]"
              className="no-underline"
            >
              {post.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <time dateTime={post.date}>
              {parseDate(post.date)}
            </time>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-black/50 pl-6 border-l-[5px] border-l-black/10 my-[1.2em]">{post.excerpt}</p>
        </div>
      </div>
    </div>
  )
}
