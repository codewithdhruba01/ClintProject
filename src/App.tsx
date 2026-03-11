import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GlitchGallery from './components/GlitchGallery';
import About from './components/About';
import FeaturedWorks from './components/FeaturedWorks';
import Stories from './components/Stories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';
import { useStore } from './store/useStore';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const { setActiveSection, isDarkMode, currentView } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (currentView === 'home') {
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

      const elements = document.querySelectorAll('.reveal-on-scroll, .hero-img-card, .story-card, .cta, .contact-bar');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [currentView, setActiveSection]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/contact') {
        useStore.getState().setView('contact');
      } else {
        useStore.getState().setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when currentView changes
  useEffect(() => {
    const path = window.location.pathname;
    if (currentView === 'contact' && path !== '/contact') {
      window.history.pushState({}, '', '/contact');
    } else if (currentView === 'home' && path !== '/') {
      window.history.pushState({}, '', '/');
    }
  }, [currentView]);

  return (
    <div className="app">
      <Header />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <GlitchGallery />
            <About />
            <FeaturedWorks />
            <Stories />
            <Testimonials />
            <CTA />
            <ContactBar />
          </>
        ) : (
          <ContactPage />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
