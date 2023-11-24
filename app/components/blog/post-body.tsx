import Markdown from 'react-markdown'

type PostBodyProps = {
  content: string
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto min-h-full">
      <Markdown>{content}</Markdown>
    </div>
  )
}
