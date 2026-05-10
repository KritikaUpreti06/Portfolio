import React from 'react';
import { motion } from 'framer-motion';

import { FaGithub } from 'react-icons/fa';
import crowdImg from '../assets/crowd.png';
import sarImg from '../assets/sar.png';
import greenifyImg from '../assets/greenify.png';

const projects = [
  {
    title: "SAR Narrative Generator",
    description: "AI-powered system for automating Suspicious Activity Report generation. Implemented an LLM-based workflow for regulator-ready reports with an integrated audit trail and explainability features.",
    image: sarImg,
    tags: ["Python", "React", "MongoDB", "XGBoost", "LLM"],
    featured: true
  },
  {
    title: "Crowd Monitor",
    description: "Built a real-time computer vision-based crowd monitoring system achieving ~90% detection accuracy. Features real-time bounding boxes and futuristic AI-inspired visual analytics.",
    image: crowdImg,
    tags: ["Python", "YOLOv8", "OpenCV", "Flask", "NumPy", "Pandas"],
    github: "https://github.com/KritikaUpreti06/Crowd-Monitor",
    featured: false
  },
  {
    title: "Greenify — Gamified Sustainability Learning Platform",
    description: "Sustainability learning platform with interactive learning and Unity-based 3D games. Focused on creating engaging and educational environmental awareness experiences.",
    image: greenifyImg,
    tags: ["HTML", "CSS", "JavaScript", "Unity"],
    github: "https://github.com/KritikaUpreti06/Greenify.git",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textMain tracking-tight">Featured Projects</h2>
            <div className="h-px bg-border flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="w-full mb-8 shrink-0">
                  <div className="relative group rounded-3xl overflow-hidden glass p-2 border border-border/50">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <div className="relative rounded-2xl overflow-hidden bg-surface aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full flex flex-col flex-grow">
                  {project.featured && (
                    <span className="text-primary font-medium tracking-wider text-sm mb-2">FLAGSHIP PROJECT</span>
                  )}
                  <h3 className="text-3xl font-bold text-textMain mb-4">{project.title}</h3>
                  <div className="glass-card p-6 rounded-2xl mb-6 relative z-20 flex-grow">
                    <p className="text-textMuted leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-sm font-medium text-textMain/80 bg-surface px-3 py-1 rounded-full border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mt-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-textMuted hover:text-primary transition-colors">
                        <FaGithub size={20} />
                        <span className="font-medium">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
