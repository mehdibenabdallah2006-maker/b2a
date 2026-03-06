import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ApproachSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const approaches = [
    {
      number: "01",
      title: "Écoute & Analyse",
      description:
        "Chaque projet débute par une compréhension profonde du site, du programme et des aspirations de nos clients. Nous cartographions les contraintes pour en faire des opportunités créatives.",
    },
    {
      number: "02",
      title: "Conception Paramétrique",
      description:
        "Nous développons des solutions architecturales singulières en utilisant des outils de modélisation avancés, où chaque détail est pensé dans sa globalité pour optimiser la performance et l'esthétique.",
    },
    {
      number: "03",
      title: "Réalisation & Suivi",
      description:
        "Un suivi rigoureux de la construction garantit la fidélité de l'exécution à la vision architecturale, avec une attention particulière portée aux matériaux et à l'impact environnemental.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="approach" 
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#050505] text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent rounded-full blur-[120px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
            <div>
              <p className="text-body text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-accent"></span>
                Méthodologie
              </p>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-light leading-none">
                Notre <br/><span className="italic text-white/70">Approche</span>
              </h2>
            </div>
            <p className="text-body text-sm text-white/60 max-w-sm leading-relaxed">
              Une fusion entre l'artisanat traditionnel et les technologies de conception de pointe pour créer des espaces intemporels.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-24">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16 md:space-y-0">
            {approaches.map((item, i) => {
              const isEven = i % 2 === 0;
              const isHovered = hoveredIndex === i;
              
              return (
                <div 
                  key={i} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''} md:h-64`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Center Node */}
                  <div className="absolute left-[27px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#050505] border border-white/30 flex items-center justify-center z-10 transition-all duration-500">
                    <div className={`w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500 ${isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`} />
                  </div>

                  {/* Content Half */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <ScrollReveal delay={i * 100}>
                      <motion.div 
                        animate={{ x: isHovered ? (isEven ? 10 : -10) : 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative"
                      >
                        <span className={`text-display text-6xl md:text-8xl font-light text-white/5 absolute -top-8 md:-top-16 ${isEven ? 'left-0' : 'left-0 md:left-auto md:right-0'} -z-10 select-none`}>
                          {item.number}
                        </span>
                        <h3 className="text-display text-3xl md:text-4xl font-light mb-4 md:mb-6 text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-body text-sm leading-relaxed text-white/60">
                          {item.description}
                        </p>
                      </motion.div>
                    </ScrollReveal>
                  </div>

                  {/* Empty Half for spacing */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
