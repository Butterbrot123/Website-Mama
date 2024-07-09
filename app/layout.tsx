import './css/style.css'

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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} ${parisienne.variable} ${outfit.variable} font-outfit antialiased bg-bgColor-500 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          
        </div>
      </body>
    </html>
  )
}
 