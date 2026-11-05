import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Norms } from '@/components/site/norms'
import { Trainings } from '@/components/site/trainings'
import { Emergency } from '@/components/site/emergency'
import { Contractors } from '@/components/site/contractors'
import { Experience } from '@/components/site/experience'
import { Differentials } from '@/components/site/differentials'
import { Gallery } from '@/components/site/gallery'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'
import { MascotBand } from '@/components/site/mascot-band'
import { SHOW_MASCOT } from '@/config/site'

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        {SHOW_MASCOT && <MascotBand />}
        <Norms />
        <Trainings />
        <Emergency />
        <Contractors />
        <Experience />
        <Differentials />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
