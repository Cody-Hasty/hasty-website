import AboutBlurbComponent from "@/components/about/about-blurb";
import PageHeaderComponent from "@/components/page-header";

export default function AboutPage() {
  return (
    <div id="about">
      <PageHeaderComponent mainText="About" />
      <AboutBlurbComponent />
    </div>
  )
}