import { getAllPostsFromDirectory, getDirectoryPostBySlug, getAdjacentPostSlugs, isValidSlug } from '@/state/state'
import Link from 'next/link'
import Post from '@/components/blog/post'
import Error from '@/components/error'
import PostPreview from '@/components/blog/partials/post-preview'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { PostType } from '@/types/post'

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

export default function PostPage({ params }: Params) {
  const validSlug = isValidSlug(params.slug)
  const post = validSlug ? getDirectoryPostBySlug(params.slug) : null
  const morePosts = post ? getAdjacentPostSlugs(post.date) : null
  const nextPost = morePosts?.next ? getDirectoryPostBySlug(morePosts?.next) : null
  const previousPost = morePosts?.previous ? getDirectoryPostBySlug(morePosts?.previous) : null
  const tooltip = (post: PostType) => {
    return (
      (post ?
        <Tooltip>
          <div className='p-2'>
            <PostPreview
              title={post.title}
              blogImage={post.blogImage}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          </div>
        </Tooltip> :
        <div />
      )
    )
  }

  function postPreviewLinkInDirection(direction: string) {
    const post = direction === "previous" ? previousPost : nextPost
    return post ?
      <OverlayTrigger
        placement='top'
        delay={{ show: 250, hide: 400 }}
        overlay={tooltip(post)}
      >
        <Link
          as={`/blog/${post.slug}`}
          href="/blog/[slug]"
          className="no-underline italic"
        >
          {direction === "previous" ? `← "${post.title}"` : `"${post.title}" →`}
        </Link>
      </OverlayTrigger> : <div />
  }

  return (
    <div className='container mx-auto px-5 pt-5 text-md'>
      {!validSlug && <Error statusCode={404} />}
      {post && <Post post={post} />}
      <div className='pb-6 min-w-full flex flex-row space-between gap-4'>
        <div className='w-full my-auto text-left'>
          {postPreviewLinkInDirection("previous")}
        </div>
        <div className='w-full my-auto text-right'>
          {postPreviewLinkInDirection("next")}
        </div>
      </div>
    </div>
  )
}
