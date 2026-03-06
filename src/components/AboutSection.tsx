import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const yImage = useTransform(smoothProgress, [0, 1], [100, -100]);
  const rotateImage = useTransform(smoothProgress, [0, 1], [8, -8]);
  const scaleImage = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  
  const yText = useTransform(smoothProgress, [0, 1], [50, -50]);
  const opacityText = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="about" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative py-32 md:py-48 bg-[#050505] text-white overflow-hidden"
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 40%)`
        }}
      />

      {/* 3D Floating Elements */}
      <motion.div 
        style={{ y: useTransform(smoothProgress, [0, 1], [200, -300]), rotate: useTransform(smoothProgress, [0, 1], [0, 360]) }}
        className="absolute top-20 right-20 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none mix-blend-screen opacity-50"
      />
      <motion.div 
        style={{ y: useTransform(smoothProgress, [0, 1], [-200, 300]), rotate: useTransform(smoothProgress, [0, 1], [0, -180]) }}
        className="absolute bottom-20 left-10 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none mix-blend-screen opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div 
              style={{ y: yImage, rotateZ: rotateImage, scale: scaleImage }}
              className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img
                src="/interieurs-villa-h-new.jpg"
                alt="Atelier B2A"
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Scanning line effect */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-white/20 z-20 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </motion.div>

            {/* Text */}
            <motion.div style={{ y: yText, opacity: opacityText }} className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
              
              <p className="text-body text-xs tracking-[0.4em] uppercase text-white/40 mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-accent"></span>
                L'Agence
              </p>
              
              <h2 className="text-display text-5xl md:text-6xl lg:text-7xl font-light mb-10 leading-[1.1] tracking-tight">
                Créer des espaces
                <br />
                <span className="italic text-white/60">qui racontent</span>
              </h2>
              
              <div className="space-y-8 text-body text-base leading-relaxed text-white/50">
                <p className="hover:text-white/80 transition-colors duration-300">
                  B2A est une agence d'architecture indépendante basée à Casablanca. 
                  Notre pratique s'engage dans un travail diversifié visant à créer 
                  des espaces contemporains ancrés dans un contexte culturel.
                </p>
                <p className="hover:text-white/80 transition-colors duration-300">
                  Actifs dans les domaines de l'architecture, du design urbain 
                  et du mobilier, nous nous engageons à collaborer étroitement 
                  avec nos partenaires pour créer des projets architecturalement, 
                  socialement et intellectuellement cohérents.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { number: "15+", label: "Projets" },
                  { number: "7", label: "Années" },
                  { number: "3", label: "Prix" },
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
                      viewport={{ once: true }}
                      className="text-display text-4xl md:text-5xl font-light block text-white group-hover:text-accent transition-colors duration-300"
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-body text-xs tracking-[0.2em] uppercase text-white/40 mt-2 block group-hover:text-white/70 transition-colors duration-300">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
