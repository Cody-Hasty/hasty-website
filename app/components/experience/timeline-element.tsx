import { StaticImageData } from "next/image"
import Image from 'next/image'

type TimelineElementProps = {
  title: string,
  location: string,
  company: string,
  image?: StaticImageData,
  highlights?: string[]
}

export default function TimelineElementComponent({ title, location, company, image, highlights = [] }: TimelineElementProps) {
  return (
    <div>
      <div className="flex flex-row gap-x-6 gap-y-2 flex-wrap-reverse">
        <div className="basis-3/4">
          <h5 className="m-0 mb-2">{`${title} @ ${company}`}</h5>
          <p className="text-neutral-500 m-0 mb-2">{location}</p>
        </div>
        {image &&
          <div className="basis-1/4 my-1 min-w-36 lg:min-w-32">
            <Image src={image} alt={`${company} Logo`} />
          </div>
        }
      </div>
      <hr />
      <ul className="list-disc">
        {highlights.map((highlight: string, index: number) => (
          <li key={index} className="text-neutral-500">{highlight}</li>
        ))}
      </ul>
    </div>
  )
}