import './css/style.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Inter, Architects_Daughter, Parisienne, Outfit} from 'next/font/google'

import Header from '@/components/ui/header'
 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: '400'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})


const parisienne = Parisienne({
  subsets: ['latin'],
  variable: '--font-parisienne',
  display: 'swap',
  weight: '400',
})


export const metadata = {
  metadataBase: new URL("https://saijersantik.de/"),
  keywords: ["Saijers Antikankauf, Antikankauf Flensburg, Antiquitäten Ankauf, Ankauf von Schmuck, Ankauf von Antik, Ankauf von Trödel"],
  title: 'Saijers Antikankauf ',
  description: 'Ankauf von klassischem Design, Antik und Schmuck',
  openGraph: {
    description: "Wir sind Ihr Ansprechpartner für die optimale Vermarktung von Schmuck, Antiquitäten, Designobjekten und Sammlungen. Egal ob Einzelstück, Nachlass oder Sammlungsauflösung – kontaktieren Sie uns!",
     images: ['']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-DE">
      <body className={`${inter.variable} ${architects_daughter.variable} ${parisienne.variable} ${outfit.variable} font-outfit antialiased bg-bgColor-500 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <GoogleTagManager gtmId="AW-16674918848" />
          <GoogleAnalytics gaId="AW-16674918848" />
          {children}
          
        </div>
      </body>
    </html>
  )
}
 