import CoverImage from './cover-image'
import Link from 'next/link'
import parseDate from '@/utils/parseDate'

type HeroPostProps = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: HeroPostProps) {
  return (
    <div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/blog/${slug}`}
              href="/blog/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <time dateTime={date}>
              {parseDate(date)}
            </time>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </div>
  )
}
