
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProcessSection from './components/ProcessSection';
import TechSection from './components/TechSection';
import SocialProof from './components/SocialProof';
import ServiceAreas from './components/ServiceAreas';
import FAQSection from './components/FAQSection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onCtaClick={scrollToForm} />
      
      <main>
        <Hero onCtaClick={scrollToForm} />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <TechSection />
        <SocialProof />
        <ServiceAreas onCtaClick={scrollToForm} />
        <FAQSection />
        
        <section id="contact" ref={formRef} className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hire Better, Faster?</h2>
              <p className="text-xl text-gray-600">Join 2,300+ companies who've upgraded their tech hiring process</p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
