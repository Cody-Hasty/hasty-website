import BlogImage from './blog-image'
import Link from 'next/link'
import parseDate from '@/utils/parseDate'

type PostPreviewProps = {
  title: string
  blogImage: string
  date: string
  excerpt: string
  slug: string
}

export default function PostPreview({
  title,
  blogImage,
  date,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <div className='block'>
      <div className="mb-4">
        <BlogImage slug={slug} title={title} src={blogImage} />
      </div>
      <h3 className="text-xl sm:text-lg mb-3">
        <Link
          as={`/blog/${slug}`}
          href="/blog/[slug]"
          className="no-underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg sm:text-xs mb-3">
        <time dateTime={date}>
          {parseDate(date)}
        </time>
      </div>
      <p className="text-lg sm:text-sm p-0 mt-0">{excerpt}</p>
    </div>
  )
}
