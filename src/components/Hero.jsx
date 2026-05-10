import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/kritika_profile.jpg';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl -z-10 mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide">HELLO, I'M</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-textMain">
                Kritika Upreti
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-textMuted mt-2">
                Computer Science Student & <br/>
                <span className="text-gradient">Software Engineer.</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-textMuted max-w-2xl leading-relaxed">
              AI/ML Enthusiast | Full Stack Developer <br/>
              Building intelligent and impactful digital experiences through AI and scalable development.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-primaryDark transition-all duration-300 flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 glass text-textMain font-medium rounded-full hover:bg-surface transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full border border-border/50 p-2 glass">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                  <img 
                    src={profileImg} 
                    alt="Kritika Upreti" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
