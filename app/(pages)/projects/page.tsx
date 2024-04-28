import PageHeaderComponent from "@/components/page-header";
import ProjectsIndexComponent from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div id="projects">
      <PageHeaderComponent mainText="Projects" />
      <ProjectsIndexComponent />
    </div>
  )
}