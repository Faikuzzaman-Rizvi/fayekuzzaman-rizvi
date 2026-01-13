import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollY, menuOpen, setMenuOpen, scrollToSection }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">FAYEKUZZAMAN</span>
            <span className="text-gray-500 ml-2">RIZVI</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 text-sm tracking-wide ${
                  activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
            {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left capitalize py-2 text-gray-400 hover:text-white transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;