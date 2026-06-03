import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import SecurityBanner from './components/SecurityBanner';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="font-inter bg-[#0a0a0f] text-white overflow-x-hidden">
        {loading && <Preloader />}
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Expertise />
          <Testimonials />
          <Team />
          <SecurityBanner />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}
