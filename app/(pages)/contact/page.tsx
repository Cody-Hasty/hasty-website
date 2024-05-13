import ContactFormComponent from "@/components/contact/contact-form";
import PageHeaderComponent from "@/components/shared/page-header";
import SocialMediaBannerComponent from "@/components/shared/social-media-banner";

export default function ContactPage() {
  return (
    <div id="contact" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Contact" />
      <ContactFormComponent />
      <SocialMediaBannerComponent />
    </div>
  )
}