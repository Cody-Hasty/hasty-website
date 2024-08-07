import PageHeaderComponent from "@/components/shared/page-header";
import ProjectsIndexComponent from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div id="projects" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Projects" />
      <ProjectsIndexComponent />
    </div>
  )
}