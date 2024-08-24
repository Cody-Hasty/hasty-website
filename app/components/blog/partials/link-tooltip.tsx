import { PostType } from '@/types/post';
import Link from 'next/link'
import PostPreview from '@/components/blog/partials/post-preview'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

type LinkTooltipProps = {
  direction: "previous" | "next",
  postInDirection: PostType
}

export default function LinkTooltip({ direction, postInDirection }: LinkTooltipProps) {
  return (
    <OverlayTrigger
      placement='top'
      overlay={
        <Tooltip>
          <div className='p-2'>
            <PostPreview {...postInDirection} />
          </div>
        </Tooltip>
      }
    >
      <Link
        as={`/blog/${postInDirection.slug}`}
        href="/blog/[slug]"
        className="no-underline italic"
      >
        {direction === "previous" ? `← "${postInDirection.title}"` : `"${postInDirection.title}" →`}
      </Link>
    </OverlayTrigger>
  );
}