import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Education
          </h2>
          <p className="text-gray-500 text-lg">
            Academic background in Computer Science and Engineering
          </p>
        </div>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-white/5 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-gray-400 mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>{edu.year}</span>
                    {edu.grade && (
                      <>
                        <span>•</span>
                        <span>{edu.grade}</span>
                      </>
                    )}
                    {edu.status && (
                      <>
                        <span>•</span>
                        <span className="text-white">{edu.status}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;