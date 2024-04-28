import CompanyLogos from "@/components/experience/company-logos"
import ExperienceTimeline from "@/components/experience/experience-timeline"
import PageHeaderComponent from "@/components/page-header"

export default function ExperiencePage() {
  return (
    <div id="experience">
      <PageHeaderComponent mainText="Experience" />
      <CompanyLogos />
      <ExperienceTimeline />
    </div>
  )
}