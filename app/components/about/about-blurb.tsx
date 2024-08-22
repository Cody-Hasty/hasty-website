import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function AboutBlurbComponent() {
  return (
    <blockquote className="blockquote m-0 flex flex-col">
      <RiDoubleQuotesL className="me-auto mb-2" />
      <p className="text-center m-0">Hey, I&apos;m Cody Hasty. I&apos;m a software engineer based in San Francisco.</p>
      <RiDoubleQuotesR className="ms-auto mt-2" />
    </blockquote>
  )
}