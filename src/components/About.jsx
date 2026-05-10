import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: <Brain className="text-primary" size={24} />,
    title: "AI & Machine Learning",
    desc: "Passionate about building intelligent models and data-driven systems."
  },
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: "Full Stack Development",
    desc: "Creating scalable web applications with modern tech stacks."
  },
  {
    icon: <Rocket className="text-primary" size={24} />,
    title: "Impactful Solutions",
    desc: "Focused on solving real-world problems through technology."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-textMain tracking-tight">About Me</h2>
            <div className="h-px bg-border flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-textMuted leading-relaxed">
              <p>
                I am a B.Tech Computer Science student deeply fascinated by the intersection of Artificial Intelligence and Software Engineering. My journey in tech is driven by a curiosity to understand how systems work and how they can be optimized to solve complex challenges.
              </p>
              <p>
                With hands-on experience in hackathons and AI-based projects, I thrive in environments that challenge me to learn rapidly and implement innovative solutions. Whether it's building a real-time computer vision system or an AI-powered enterprise workflow, I focus on delivering scalable and impactful technology.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex gap-4 items-start"
                >
                  <div className="p-3 glass rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-textMain mb-2">{item.title}</h3>
                    <p className="text-textMuted text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
