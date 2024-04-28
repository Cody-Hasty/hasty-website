type PageHeaderProps = {
  mainText: string
}

export default function PageHeaderComponent({ mainText }: PageHeaderProps) {
  return (
    <div className="">
      <h1>{mainText}</h1>
    </div>
  )
}