import AboutSection from '@/sections/about-section'
import Contact from '@/sections/contact'
import Experience from '@/sections/experience'
import Footer from '@/sections/footer'
import HeroSection from '@/sections/hero-section'
import MyProjects from '@/sections/my-projects'
import Services from '@/sections/services'
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <main  className='h-screen'>
      <HeroSection />
      <AboutSection />
       <MyProjects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
