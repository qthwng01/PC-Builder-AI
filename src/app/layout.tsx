import { Providers } from './providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BuildProvider from '@/context/buildContext'
import ModalProvider from '@/context/modalContext'
import '../styles/global.scss'
import '../styles/grid.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Build PC with AI by qthwngg_',
  description: 'Recommendation with AI by qthwngg_',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <BuildProvider>
          <ModalProvider>
            <Providers>{children}</Providers>
          </ModalProvider>
        </BuildProvider>
        <Footer />
      </body>
    </html>
  )
}
