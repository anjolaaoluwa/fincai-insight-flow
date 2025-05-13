
import React, { useState } from 'react';
import { File, MessageSquare, Calculator, Table } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: "Upload your financial document",
    description: "Simply drag and drop your documents in various formats: PDF, Excel, or Word.",
    icon: File,
    animation: "Drag & drop upload zone with bounce animation",
  },
  {
    id: 2,
    title: "Ask questions to extract insights",
    description: "Use natural language to ask about specific financial details and metrics.",
    icon: MessageSquare,
    animation: "Prompt bar showing AI response",
  },
  {
    id: 3,
    title: "Compute financial ratios instantly",
    description: "Get immediate calculations of key metrics like ROI, margins, and cash flow.",
    icon: Calculator,
    animation: "Table populating with calculated ratios",
  },
  {
    id: 4,
    title: "Summarize and categorize into clean tables",
    description: "Convert complex data into structured, exportable tables and reports.",
    icon: Table,
    animation: "Paragraphs transforming into tables",
  },
];

const StepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="section bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
        <p className="text-lg text-gray-600">
          FincAI simplifies financial analysis in just four easy steps
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={cn(
                "rounded-lg p-6 card-hover cursor-pointer transition-all duration-300",
                activeStep === step.id 
                  ? "bg-primary/5 border border-primary/20" 
                  : "bg-white border border-gray-200"
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                  activeStep === step.id ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                )}>
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-200 min-h-[300px]">
          {activeStep === 1 && (
            <div className="flex flex-col items-center justify-center animate-fade-in">
              <div className="w-full max-w-md p-8 border-2 border-dashed border-primary/50 rounded-lg bg-primary/5 text-center cursor-pointer hover:bg-primary/10 transition-all">
                <File className="mx-auto mb-4 text-primary" size={40} />
                <p className="font-medium text-primary">Drag and drop your financial document</p>
                <p className="text-sm text-gray-500 mt-2">or click to browse files</p>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="animate-fade-in w-full max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center border rounded-md p-2 bg-gray-50">
                  <input 
                    type="text" 
                    placeholder="Ask about profit margins in Q3..." 
                    className="flex-grow bg-transparent border-none focus:outline-none text-gray-700 p-2"
                  />
                  <button className="bg-primary text-white p-2 rounded-md">
                    <MessageSquare size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="font-medium text-gray-800">The profit margin in Q3 was 23.5%, showing a 2.7% increase from Q2.</p>
                <p className="text-sm text-gray-600 mt-2">This outperforms the industry average of 18.3% for the same period.</p>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="animate-fade-in w-full max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200 bg-gray-50 p-4">
                  <h4 className="font-medium">Key Financial Ratios</h4>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { name: "Current Ratio", value: "1.8", change: "+0.3" },
                    { name: "Return on Assets (ROA)", value: "12.5%", change: "+1.2%" },
                    { name: "Debt to Equity", value: "0.65", change: "-0.08" },
                    { name: "Profit Margin", value: "23.5%", change: "+2.7%" }
                  ].map((ratio, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="text-gray-700">{ratio.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">{ratio.value}</span>
                        <span className={`text-xs font-medium ${ratio.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {ratio.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="animate-fade-in w-full max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200 bg-gray-50 p-4 flex justify-between items-center">
                  <h4 className="font-medium">Q3 Financial Summary</h4>
                  <button className="text-primary text-sm font-medium hover:underline">Export</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">YoY Change</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { category: "Revenue", amount: "$1,245,000", change: "+18%" },
                      { category: "Operating Expenses", amount: "$685,300", change: "+7%" },
                      { category: "Net Income", amount: "$293,000", change: "+24%" },
                      { category: "Cash Flow", amount: "$318,500", change: "+15%" }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{item.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
