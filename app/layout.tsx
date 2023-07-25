import Footer from '@/components/Footer'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ModalProviders from '@/providers/ModalProviders'
import ToastProvider from '@/providers/toast-provider'

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
        <ToastProvider/>
        <ModalProviders/>
        <Navbar/>
        {children}
        <Footer />
      </body>

    </html>
  )
}
