import type { Metadata } from 'next'
import '@/styles/globals.scss'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar/sidebar'

export const metadata: Metadata = {
  title: "Hasty Creations",
  description: "Cody Hasty's Porfolio",
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL("https://www.hastycreations.com/"),
  openGraph: {
    type: "website",
    url: "https://www.hastycreations.com/",
    images: "https://www.hastycreations.com/public/thumbnail.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
