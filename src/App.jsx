import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Pillars from './components/Pillars';
import LeaderMessage from './components/LeaderMessage';
import Transformation from './components/Transformation';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import SocialPreview from './components/SocialPreview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-bg selection:bg-brand-saffron selection:text-white">
      {/* 1. Top Announcement Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 text-center text-sm font-medium">
        सूर्यपुरा में विकास की नई दिशा — शिक्षा, किसान और डिजिटल सेवाओं को एक मंच
      </div>

      {/* 2. Header / Navbar */}
      <Header />

      <main>
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Impact Stats Strip */}
        <Stats />

        {/* 5. Development Pillars Section */}
        <Pillars />

        {/* 6. Visionary Leader / Ambassador Message Section */}
        <LeaderMessage />

        {/* 7. Village Transformation / Before-After Progress Section */}
        <Transformation />

        {/* 8. Citizen Services / Portal Access Section */}
        <Services />

        {/* 9. Success Stories / Community Voices Section */}
        <Testimonials />

        {/* 10. Social Campaign Preview Section */}
        <SocialPreview />

        {/* 11. Final CTA Section */}
        <CTASection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
