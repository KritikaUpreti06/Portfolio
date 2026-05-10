import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C++", "C", "JavaScript"]
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"]
  },
  {
    category: "Database & Backend",
    skills: ["MongoDB", "MySQL", "Node.js"]
  },
  {
    category: "AI / ML / Data",
    skills: ["YOLOv8", "OpenCV", "NumPy", "Pandas", "Scikit-Learn"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textMain tracking-tight">Technical Skills</h2>
            <div className="h-px bg-border flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((group, groupIdx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-semibold text-textMain mb-6 border-b border-border/50 pb-4 relative z-10">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {group.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className="px-4 py-2 bg-surface border border-border/50 rounded-full text-sm font-medium text-textMuted group-hover:border-primary/30 group-hover:text-textMain transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
