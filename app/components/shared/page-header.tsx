import { Delius_Swash_Caps } from 'next/font/google'
const font = Delius_Swash_Caps({ subsets: ["latin"], weight: "400" })

type PageHeaderProps = {
  mainText: string,
  description?: string
}

export default function PageHeaderComponent({ mainText, description }: PageHeaderProps) {
  // Add a carousel of images in the background?
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-[darkblue]/70 rounded-t-2xl">
      <h1 className={`${font.className} text-white`}>{mainText}</h1>
      { description && <p className="m-0 text-white">{description}</p> }
    </div>
  )
}