import React from 'react';
import { Award } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg">
            Specialized skill set in modern .NET development, database management, and full-stack web technologies
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div 
                key={idx}
                className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="mb-6 inline-block p-4 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-6">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-center text-gray-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Training Section */}
        <div className="border-t border-white/10 pt-20">
          <h3 className="text-2xl font-bold mb-8 tracking-tight">Professional Training</h3>
          <div className="max-w-4xl border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/5 flex-shrink-0">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Web Application Development Using ASP.NET</h4>
                <p className="text-gray-400 mb-3">IsDB-BISEW IT Scholarship Programme</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <span>460 Hours</span>
                  <span>•</span>
                  <span>July 2025 – January 2026</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Completed a 6-month intensive training program focused on full-stack web application development using C# 10 and .NET 6. Gained hands-on experience in building RESTful APIs with ASP.NET Core and MVC, frontend integration with Angular, relational database design using MS SQL Server, and responsive UI development with HTML5, JavaScript, and jQuery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;