import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={20} />
            <a href="mailto:kritikaupreti95@gmail.com" className="text-textMuted hover:text-primary transition-colors font-medium">
              kritikaupreti95@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-primary" size={20} />
            <a href="tel:+918279895191" className="text-textMuted hover:text-primary transition-colors font-medium">
              +91 8279895191
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={20} />
            <span className="text-textMuted font-medium">India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
