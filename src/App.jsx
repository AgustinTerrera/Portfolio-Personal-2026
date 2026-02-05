import { useEffect, lazy, Suspense } from "react";
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ParticlesBackground from './components/common/ParticlesBackground'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = lazy(() => import('@/components/sections/Hero'))
const About = lazy(() => import('@/components/sections/About'))
const Skills = lazy(() => import('@/components/sections/Skills'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Contributions = lazy(() => import('@/components/sections/Contributions'))
const Contact = lazy(() => import('@/components/sections/Contact'))


const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
    })
  }, [])


  return (
    <div className='relative flex flex-col bg-bg font-display text-text'>

      <Navbar />
      <ParticlesBackground />
      <main className=" min-h-screen">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contributions />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
