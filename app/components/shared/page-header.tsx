import { Delius_Swash_Caps } from 'next/font/google'
const font = Delius_Swash_Caps({ subsets: ["latin"], weight: "400" })

type PageHeaderProps = {
  mainText: string,
  description?: string
}

export default function PageHeaderComponent({ mainText, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-[darkblue]/70  bg-gradient-to-r from-[darkblue]/60 to-main-blue/80 rounded-t-2xl">
      <h1 className={`${font.className} text-white mb-0 text-4xl`}>{mainText}</h1>
      { description && <p className="m-0 text-white">{description}</p> }
    </div>
  )
}