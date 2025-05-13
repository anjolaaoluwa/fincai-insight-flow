
import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Trusted by Financial Professionals</h2>
            <p className="text-lg text-gray-600 mb-8">
              FincAI is backed by leading firms and trusted by professionals across the financial industry. Our AI-powered platform delivers accurate insights while maintaining the highest standards of data security.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Accuracy Guaranteed</h4>
                  <p className="text-gray-600">Our AI models are trained on millions of financial documents for precision.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Enterprise-Grade Security</h4>
                  <p className="text-gray-600">Bank-level encryption and data protection for your sensitive information.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Continuous Improvement</h4>
                  <p className="text-gray-600">Our AI gets smarter with every analysis, improving accuracy over time.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex justify-center mb-8">
              <div className="bg-primary/10 rounded-full p-4">
                <Shield className="text-primary" size={40} />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center mb-6">Backed by AI Excellence</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex justify-center">
                  <div className="h-10 w-32 bg-gray-200 rounded animate-pulse-light"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded border border-primary/20">
              <p className="text-sm text-gray-700 text-center">
                "FincAI has revolutionized our due diligence process, cutting analysis time by 70% while improving accuracy."
              </p>
              <p className="text-xs text-center mt-2 font-medium">— Financial Director, Fortune 500 Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
