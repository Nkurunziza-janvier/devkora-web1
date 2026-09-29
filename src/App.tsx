import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Technology from '@/components/Technology';
import Team from '@/components/Team';
import Process from '@/components/Process';
import WhyDevkora from '@/components/WhyDevkora';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    document.body.classList.add('page-load');
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technology />
        <Team />
        <Process />
        <WhyDevkora />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
