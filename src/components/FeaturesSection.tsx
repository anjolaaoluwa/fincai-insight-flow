
import React from 'react';
import { FileUp, Search, Calculator, Table } from 'lucide-react';

const features = [
  {
    title: "Upload Any Format",
    description: "Support for documents, PDFs, spreadsheets, and more.",
    icon: FileUp,
  },
  {
    title: "Ask Anything",
    description: "Natural language interface for intuitive financial inquiries.",
    icon: Search,
  },
  {
    title: "Smart Calculations",
    description: "Instant computation of ROI, margins, and working capital.",
    icon: Calculator,
  },
  {
    title: "Structured Insights",
    description: "Clean, exportable tables summarizing key financial data.",
    icon: Table,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-lg text-gray-600">
          Advanced capabilities that transform how you analyze financial documents
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 card-hover"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <feature.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
