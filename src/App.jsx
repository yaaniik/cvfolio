import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';

// Lazy load componenti non critici per performance
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppWidget = lazy(() => import('./components/WhatsAppWidget'));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      
      // Migliora accessibility: focus sull'elemento dopo lo scroll
      setTimeout(() => {
        element.focus({ preventScroll: true });
      }, 500);
    }
  }, []);

  useEffect(() => {
    let timeoutId;
    
    // Throttle della funzione scroll per migliorare performance
    const handleScroll = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        const sections = ['home', 'esperienza', 'progetti', 'competenze', 'formazione', 'contatti'];
        const scrollPosition = window.scrollY + 150;
        
        const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        
        if (isNearBottom) {
          setActiveSection('contatti');
          timeoutId = null;
          return;
        }

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
        
        timeoutId = null;
      }, 100); // Throttle di 100ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Skip link per accessibility - permette agli screen reader di saltare la navigazione */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Salta alla navigazione principale
      </a>
      
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      {/* Main semantic tag per SEO e accessibility */}
      <main id="main-content" tabIndex="-1" className="focus:outline-none">
        <Hero />
        <Experience />
        
        {/* Suspense wrapper per lazy loading componenti */}
        <Suspense fallback={<SectionLoader />}>
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
}

export default App;