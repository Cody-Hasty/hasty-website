import PostPreview from './post-preview'
import { PostType } from '@/types/post'

type MoreStoriesProps = {
  posts: PostType[]
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <div>
      <h2 className="mb-8 text-4xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-16 md:gap-y-32 mb-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            blogImage={post.blogImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  )
}
