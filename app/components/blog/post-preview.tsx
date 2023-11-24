import CoverImage from './cover-image'
import Link from 'next/link'
import parseDate from '@/utils/parseDate'

type PostPreviewProps = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/blog/${slug}`}
          href="/blog/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <time dateTime={date}>
          {parseDate(date)}
        </time>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
