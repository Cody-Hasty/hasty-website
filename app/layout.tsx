import { Metadata } from 'next'
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import ShootingStarComponent from '@/components/shared/shooting-star'

export const metadata: Metadata = {
  title: "Hasty Creations",
  description: "Cody Hasty's Porfolio",
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL("https://www.hastycreations.com/"),
  openGraph: {
    type: "website",
    url: "https://www.hastycreations.com/"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className='w-full min-h-screen overflow-x-hidden bg-no-repeat flex flex-col font-sans'>
        <Navbar />
        <ShootingStarComponent numberOfStars={8} />
        <div id="content" className='max-w-screen-lg w-full p-[25px] my-0 mx-auto rounded-5 grow relative'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
