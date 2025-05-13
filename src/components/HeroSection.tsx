
import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-image.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            AI-Powered Financial Document Analysis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Accelerate due diligence with instant insights, ratios, and summaries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline flex items-center justify-center gap-2 group">
              View How It Works
            </button>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-10 animate-pulse-light"></div>
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="AI Financial Analysis" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
