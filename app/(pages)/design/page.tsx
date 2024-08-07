import DesignComponent from "@/components/design/design";
import PageHeaderComponent from "@/components/shared/page-header";

export default function DesignPage() {
  return (
    <div id="design" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Design" />
      <DesignComponent />
    </div>
  )
}