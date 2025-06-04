
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
