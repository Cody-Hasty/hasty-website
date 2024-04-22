import { Metadata, Viewport } from 'next'
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer';

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full min-h-screen overflow-x-hidden bg-no-repeat flex flex-col font-sans'>
        <Navbar />
        <div id="content" className='max-w-screen-lg w-full p-[25px] pt-[20px] my-0 mx-auto rounded-5 grow'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
