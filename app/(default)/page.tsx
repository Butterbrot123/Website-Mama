
export const metadata = {
  title: 'Saijers Antikankauf',
  description: 'ANKAUF VON KLASSISCHEM DESIGN, ANTIK UND SCHMUCK',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import About from '@/components/About'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import CallToAction  from '@/components/calltoaction'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Zigzag />
      <Testimonials />
      <CallToAction />
      
    </>
  )
}
