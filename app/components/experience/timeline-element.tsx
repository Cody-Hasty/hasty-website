import { StaticImageData } from "next/image"
import Image from 'next/image'

type TimelineElementProps = {
  title: string,
  location: string,
  company: string,
  image?: StaticImageData
}

export default function TimelineElementComponent({ title, location, company, image }: TimelineElementProps) {
  return (
    <div className="flex flex-row gap-x-6">
      <div className="basis-3/4">
        <h5 className="m-0 mb-2">{`${title} @ ${company}`}</h5>
        <p className="text-neutral-500 m-0">{location}</p>
      </div>
      {image &&
        <div className="self-center basis-1/4 min-w-36 lg:min-w-32">
          <Image src={image} alt={`${company} Logo`} />
        </div>
      }
    </div>
  )
}