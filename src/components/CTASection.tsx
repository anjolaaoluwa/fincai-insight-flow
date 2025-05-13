
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Unlock Deeper Financial Insights Today
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
          Start analyzing your financial documents instantly with FincAI's powerful AI tools. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group">
            Get Started Free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white bg-transparent text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
