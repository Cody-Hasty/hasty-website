import ContactFormComponent from "@/components/contact-form";
import PageHeaderComponent from "@/components/page-header";
import SocialMediaBannerComponent from "@/components/social-media-banner";

export default function ContactPage() {
  return (
    <div id="contact" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Contact" />
      <ContactFormComponent />
      <SocialMediaBannerComponent />
    </div>
  )
}