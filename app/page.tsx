import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Missions } from '@/components/missions'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Missions />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
