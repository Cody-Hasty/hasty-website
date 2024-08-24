import LinkTooltip from '@/components/blog/partials/link-tooltip'
import { PostType } from '@/types/post'

type BlogNavigationProps = {
  previous: PostType | null,
  next: PostType | null
}

export default function BlogNavigation({ previous, next }: BlogNavigationProps) {
  return (
    <div className='pb-6 min-w-full flex flex-row space-between gap-4'>
      <div className='w-full my-auto text-left'>
        {previous && <LinkTooltip direction="previous" postInDirection={previous} />}
      </div>
      <div className='w-full my-auto text-right'>
        {next && <LinkTooltip direction="next" postInDirection={next} />}
      </div>
    </div>
  )
}