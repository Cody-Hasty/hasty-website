import markdownStyles from '@/styles/modules/markdown-styles.module.css'
import markdownToHtml from '@/utils/markdownToHtml'

type PostBodyProps = {
  content: string
}

export default function PostBody({ content }: PostBodyProps) {
  const bodyContent = markdownToHtml(content) || ''
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: bodyContent }}
      />
    </div>
  )
}
