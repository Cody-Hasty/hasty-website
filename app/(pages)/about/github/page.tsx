import PageHeaderComponent from "@/components/shared/page-header";
import GithubIndexComponent from "@/components/github/index";

export default function GithubPage() {
  return (
    <div id="github" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Github" />
      <GithubIndexComponent />
    </div>
  )
}