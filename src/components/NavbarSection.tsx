
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavbarSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              FincAI
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-gray-700 hover:text-primary transition-colors">
              Log in
            </a>
            <a 
              href="#get-started" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-4">
              <a 
                href="#login" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </a>
              <a 
                href="#get-started" 
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarSection;
