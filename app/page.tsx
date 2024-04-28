import CompanyLogos from "@/components/experience/company-logos"
import AboutBlurbComponent from "./components/about/about-blurb"
import ServicesComponent from "./components/about/services"
import WhatIOfferComponent from "./components/about/what-I-offer"
import TestimonialsComponent from "./components/about/testimonials"
import ContactFormComponent from "./components/contact-form"
import PageHeaderComponent from "./components/page-header"

export default function HomePage() {
  return (
    <div id="homepage" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Homepage" />
      {/* About me section, top 3 things to know */}
      <AboutBlurbComponent />
      {/* 3 most important services */}
      <ServicesComponent />
      {/* What I offer */}
      <WhatIOfferComponent />
      {/* Testimonials */}
      <TestimonialsComponent />
      {/* Customer Logos */}
      <CompanyLogos />
      {/* CTA / Contact Me form */}
      <ContactFormComponent />
    </div>
  )
}
