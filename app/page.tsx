import CompanyLogos from "@/components/experience/company-logos"
import AboutBlurbComponent from "./components/about/about-blurb"
import PageHeaderComponent from "./components/shared/page-header"
import SocialMediaBannerComponent from "./components/contact/social-media-banner"

export default function HomePage() {
  return (
    <div id="homepage" className="flex flex-col gap-y-4">
      <PageHeaderComponent mainText="Homepage" />
      {/* About me section */}
      <AboutBlurbComponent />
      {/* Company logos */}
      <CompanyLogos />
      {/* Social media links */}
      <SocialMediaBannerComponent />
    </div>
  )
}
