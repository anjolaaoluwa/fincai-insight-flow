
import React from 'react';
import NavbarSection from '@/components/NavbarSection';
import HeroSection from '@/components/HeroSection';
import StepsSection from '@/components/StepsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <NavbarSection />
      <div className="pt-20">
        <HeroSection />
        <StepsSection />
        <FeaturesSection />
        <TrustSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
