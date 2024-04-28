import ContactFormComponent from "@/components/contact-form";
import PageHeaderComponent from "@/components/page-header";

export default function ContactPage() {
  return (
    <div id="contact" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Contact" />
      <ContactFormComponent />
    </div>
  )
}