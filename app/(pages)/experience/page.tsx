import CompanyLogos from "@/components/experience/company-logos"
import ExperienceTimeline from "@/components/experience/experience-timeline"
import PageHeaderComponent from "@/components/shared/page-header"

export default function ExperiencePage() {
  return (
    <div id="experience" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Experience" />
      <CompanyLogos />
      <ExperienceTimeline />
    </div>
  )
}