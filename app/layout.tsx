import Footer from '@/components/Footer'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/Navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>

    </html>
  )
}
