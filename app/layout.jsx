import {Londrina_Solid} from 'next/font/google'
import './globals.css'
import Footer from '@/layouts/footer'
import Header from '@/layouts/header'
import {headers} from 'next/headers'

const londrina = Londrina_Solid({
  display: 'swap',
  weight: ['100', '300', '400', '900'],
  variable: '--font-londrina-solid',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Hong Ha Travel',
  description: 'Generated by create Dev Okhub',
}

export default function RootLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${londrina.className} ${londrina.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
