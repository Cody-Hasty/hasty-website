import AboutBlurbComponent from "@/components/about/about-blurb";
import PageHeaderComponent from "@/components/shared/page-header";

export default function AboutPage() {
  return (
    <div id="about" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="About" />
      <AboutBlurbComponent />
    </div>
  )
}