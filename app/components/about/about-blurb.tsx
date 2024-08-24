import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function AboutBlurbComponent() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <blockquote className="blockquote m-0 flex flex-col">
        <RiDoubleQuotesL className="me-auto mb-2" />
        <div className="my-0 mx-4 flex flex-col gap-6">
          <p className="mb-0">I&apos;m a software engineer in San Francisco with a focus in full stack applications utilizing Typescript, React, and Next.js. Making websites beautiful and intuitive is my bread and butter, and finding some unique spark to make them stand apart is my passion.</p>
          <p className="mb-0">When I&apos;m not wrangling API calls, I enjoy dabbling in artistic ventures of all varieties: 3D printing, three.js, React data visualization, creating Unity games, Blender, Photoshop, and most recently - whittling!</p>
          <p className="mb-0">I&apos;m always looking for new opportunities to learn and grow, so if you have a project you think I&apos;d be a good fit for, please don&apos;t hesitate to reach out!</p>
          <p className="mb-0">To see some of my past work, please visit my <a href="/about/experience">Experience</a> or <a href="/about/github">Github</a> pages.</p>
        </div>
        <RiDoubleQuotesR className="ms-auto mt-2" />
        <i className="blockquote-footer mt-3 ml-4">Cody Hasty</i>
      </blockquote>
    </div>
  )
}