import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-textMuted text-sm">
            &copy; {year} Kritika Upreti. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/KritikaUpreti06" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kritikaupreti06" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:kritikaupreti95@gmail.com" className="text-textMuted hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
