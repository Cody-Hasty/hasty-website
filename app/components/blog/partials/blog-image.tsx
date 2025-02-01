import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const BlogImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Image for ${title}`}
      className={cn('shadow-sm rounded aspect-video object-contain bg-neutral-100', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1280}
      height={720}
      priority={true}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default BlogImage
