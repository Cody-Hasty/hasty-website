import CompanyLogos from "@/components/experience/company-logos"
import AboutBlurbComponent from "./components/about/about-blurb"
import ServicesComponent from "./components/about/services"
import WhatIOfferComponent from "./components/about/what-I-offer"
import TestimonialsComponent from "./components/about/testimonials"
import ContactFormComponent from "./components/contact/contact-form"
import PageHeaderComponent from "./components/shared/page-header"
import SocialMediaBannerComponent from "./components/contact/social-media-banner"

export default function HomePage() {
  // Add shooting star animation on scroll in background?
  return (
    <div id="homepage" className="flex flex-col gap-y-4">
      <PageHeaderComponent
        mainText="Homepage"
        description="TODO: Change this header to look better"
      />
      {/* About me section, top 3 things to know */}
      <AboutBlurbComponent />
      {/* 3 most important services */}
      <ServicesComponent />
      {/* What I offer */}
      <WhatIOfferComponent />
      {/* Testimonials */}
      <TestimonialsComponent />
      {/* Customer logos */}
      <CompanyLogos />
      {/* CTA / contact me form */}
      <ContactFormComponent />
      {/* Social media links */}
      <SocialMediaBannerComponent />
    </div>
  )
}
