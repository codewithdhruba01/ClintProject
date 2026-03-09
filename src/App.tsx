import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GlitchGallery from './components/GlitchGallery';
import About from './components/About';
import FeaturedWorks from './components/FeaturedWorks';
import Stories from './components/Stories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useStore } from './store/useStore';

const App: React.FC = () => {
  const { setActiveSection } = useStore();

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          if (entry.target.id) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll, .hero-img-card, .story-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <GlitchGallery />
        <About />
        <FeaturedWorks />
        <Stories />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .hero-images { flex-wrap: wrap; }
          .about-grid { grid-template-columns: 1fr; }
          .works-layout { grid-template-columns: 1fr; }
          .stories-grid { grid-template-columns: 1fr; }
          .testimonial-content { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default App;
