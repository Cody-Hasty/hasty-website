import CoverImage from './cover-image'
import parseDate from '@/utils/parseDate'

type PostHeaderProps = {
  title: string
  coverImage: string
  date: string
}

export default function PostHeader({ title, coverImage, date }: PostHeaderProps) {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg font-bold">
          <time dateTime={date}>
            {parseDate(date)}
          </time>
        </div>
      </div>
    </>
  )
}
