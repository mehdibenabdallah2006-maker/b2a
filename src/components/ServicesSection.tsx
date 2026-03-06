import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ServicesSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Architecture",
      description: "Conception et réalisation de projets architecturaux, du résidentiel au commercial, avec une attention particulière à l'intégration contextuelle et à la durabilité.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Design d'Intérieur",
      description: "Création d'espaces intérieurs sur mesure, alliant esthétique contemporaine et fonctionnalité pour répondre aux besoins spécifiques de chaque client.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      title: "Urbanisme",
      description: "Réflexion à l'échelle urbaine pour concevoir des aménagements cohérents, favorisant la qualité de vie et le développement harmonieux des territoires.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Mobilier",
      description: "Design de pièces uniques et de mobilier sur mesure, pensés comme le prolongement naturel de l'architecture pour parfaire l'aménagement des espaces.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
  ];

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#050505] text-white overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-12">
            <div>
              <p className="text-body text-xs tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-accent"></span>
                Expertise
              </p>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-light leading-none">
                Nos Domaines <br className="hidden md:block" />
                <span className="italic text-white/60">d'Intervention</span>
              </h2>
            </div>
            <p className="text-body text-base text-white/50 max-w-md md:text-right leading-relaxed">
              Une approche pluridisciplinaire fusionnant technologie et design pour accompagner nos clients à toutes les échelles du projet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <ScrollReveal key={i} delay={i * 100} className="bg-[#050505]">
                <div 
                  className="group relative p-12 md:p-16 h-full overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Hover Background Gradient */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"
                  />

                  {/* Icon */}
                  <div className="mb-12 relative">
                    <motion.svg 
                      animate={{ 
                        rotate: isHovered ? [0, -10, 10, 0] : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 text-accent" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={service.icon} />
                    </motion.svg>
                    <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <h3 className="text-display text-3xl md:text-4xl font-light text-white group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <span className="text-body text-sm text-white/20 tracking-[0.3em] font-light">
                      0{i + 1}
                    </span>
                  </div>
                  
                  <p className="text-body text-base leading-relaxed text-white/50 group-hover:text-white/80 transition-colors duration-500 relative z-10">
                    {service.description}
                  </p>

                  {/* Animated Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                    <motion.div 
                      animate={{ 
                        x: isHovered ? 0 : 64,
                        y: isHovered ? 0 : 64
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute bottom-0 right-0 w-full h-full bg-accent/20"
                      style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
