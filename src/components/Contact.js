import React from 'react';
import { Mail, Phone, Github, ExternalLink, FileText, Download } from 'lucide-react';
import { contactInfo, references } from '../data/portfolioData';
import { downloadCV } from '../utils/downloadCV';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Open to discussing new opportunities, collaborations, or answering any questions about my work.
          </p>
        </div>
        
        {/* Download CV Button */}
        <div className="mb-12">
          <button 
            onClick={downloadCV}
            className="group w-full md:w-auto px-8 py-4 bg-white text-black rounded-none font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Download Full CV
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-6 mb-20">
          <a 
            href={`mailto:${contactInfo.email}`}
            className="block p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span className="text-lg">{contactInfo.email}</span>
              </div>
              <ExternalLink size={16} className="text-gray-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
          <a 
            href={`tel:${contactInfo.phone}`}
            className="block p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Phone size={20} />
                <span className="text-lg">{contactInfo.phone}</span>
              </div>
              <ExternalLink size={16} className="text-gray-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
          <a 
            href={contactInfo.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Github size={20} />
                <span className="text-lg">github.com/Faikuzzaman-Rizvi</span>
              </div>
              <ExternalLink size={16} className="text-gray-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* References */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold mb-8 tracking-tight">Professional References</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {references.map((ref, idx) => (
              <div key={idx} className="p-6 border border-white/10">
                <h4 className="font-bold text-lg mb-1">{ref.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{ref.title}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {ref.organization || ref.specialization}<br/>
                  {ref.program}
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <span>{ref.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <span>{ref.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;