import ContactFormComponent from "@/components/contact-form";
import PageHeaderComponent from "@/components/page-header";

export default function ContactPage() {
  return (
    <div id="contact">
      <PageHeaderComponent mainText="Contact" />
      <ContactFormComponent />
    </div>
  )
}