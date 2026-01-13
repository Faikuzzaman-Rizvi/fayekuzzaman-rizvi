import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg">
            Demonstrating practical experience in enterprise-level application development
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-white/5 mb-6 group-hover:bg-white/10 transition-all duration-300" />
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 border border-white/20 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-400 transition-colors group"
              >
                <Github size={16} />
                View Source Code
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;