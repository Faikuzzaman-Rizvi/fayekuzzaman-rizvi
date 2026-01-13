import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight, Download, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { downloadCV } from '../utils/downloadCV';

  const Hero = ({ scrollToSection = () => {} }) => {
  const [imageUrl] = useState(`${process.env.PUBLIC_URL}/profile.jpg`);


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="mb-12 animate-fade-in order-2 md:order-1">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 border border-white/20 rounded-full text-sm text-gray-400 mb-8">
                Available for Opportunities
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">{contactInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-gray-500">{contactInfo.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              {contactInfo.title}
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-12 leading-relaxed">
              Specialized in building scalable web applications and RESTful APIs using ASP.NET Core, MVC, and Entity Framework.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-white text-black rounded-none font-medium hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={downloadCV}
                className="group px-8 py-4 bg-gray-900 border border-white/20 rounded-none font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{contactInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
              
              <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden bg-gray-900 border border-white/10">
                <img 
                  src={imageUrl}
                  alt={contactInfo.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src ="";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white -translate-x-2 -translate-y-2"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white translate-x-2 -translate-y-2"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white -translate-x-2 translate-y-2"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white translate-x-2 translate-y-2"></div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-12 mt-12 border-t border-white/10 justify-center md:justify-start">
          <a 
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/20 rounded-none hover:bg-white/5 cursor-pointer transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="p-3 border border-white/20 rounded-none hover:bg-white/5 cursor-pointer transition-all duration-300"
          >
            <Mail size={20} />
          </a>
          <a 
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/20 rounded-none hover:bg-white/5 cursor-pointer transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;