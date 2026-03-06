import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "Immeuble EDGE R+5",
    category: "Commercial — Certification EDGE",
    year: "2024",
    image: "/villa-ks-mod-1.jpg",
    size: "large",
    location: "Bd Abderrahim Bouabid, l'Oasis",
    link: "https://www.instagram.com/p/DBrSJthtqn3/",
  },
  {
    title: "Résidence Palmier",
    category: "Résidentiel — Haut Standing",
    year: "2025",
    image: "/villa-ks-mod-2.jpg",
    size: "small",
    location: "Quartier Palmier, Casablanca",
    link: "https://www.instagram.com/p/DMI0hx0Nwyn/",
  },
  {
    title: "Villa G",
    category: "Résidentiel — Villa Jumelée",
    year: "2025",
    image: "/resto-2.jpg",
    size: "wide",
    location: "Quartier Cil - Longchamp, Casablanca",
    link: "https://www.instagram.com/p/DPPDpbuCGt6/",
  },
  {
    title: "Villa K.S",
    category: "Résidentiel — Villa",
    year: "2025",
    image: "/villa-ks-new.jpg",
    size: "small",
    location: "Marrakech, Maroc",
    link: "https://www.instagram.com/p/DKAJwZNTmM-/",
  },
  {
    title: "Villa -h-",
    category: "Résidentiel — Villa",
    year: "2023",
    image: "/villa-h-new.jpg",
    size: "large",
    location: "Bouskoura, Casablanca",
    link: "https://www.instagram.com/p/C0mNhJnqthe/",
  },
  {
    title: "Intérieurs Villa -h-",
    category: "Design d'Intérieur",
    year: "2024",
    image: "/interieurs-villa-h-new.jpg",
    size: "wide",
    location: "Bouskoura, Casablanca",
    link: "https://www.instagram.com/p/C5YIrs-qNAi/",
  },
  {
    title: "Immeuble d'habitation en R+3",
    category: "Résidentiel — Moyen Standing",
    year: "2024",
    image: "/immeuble-r3-new.jpg",
    size: "small",
    location: "Bouskoura, Casablanca",
    link: "https://www.instagram.com/p/C6Wb7OPNFdF/",
  },
  {
    title: "Restaurant asiatique",
    category: "Commercial — Restaurant",
    year: "2024",
    image: "/resto-1.jpg",
    size: "large",
    location: "Marrakech, Maroc",
    link: "https://www.instagram.com/p/DEpTOs-NUfs/",
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="projects" ref={containerRef} className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Futuristic 3D Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-light">
              Sélection
            </h2>
          </div>
          <p className="hidden md:block text-body text-sm text-muted-foreground max-w-xs">
            Une sélection de projets qui reflètent notre approche architecturale
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-12 md:gap-y-32 md:items-center">
        {projects.map((project, i) => {
          const colSpan =
            project.size === "large"
              ? "md:col-span-7"
              : project.size === "wide"
              ? "md:col-span-12"
              : "md:col-span-5";

          const aspectRatio =
            project.size === "wide" 
              ? "aspect-[16/9] md:aspect-[21/9]" 
              : project.size === "large"
              ? "aspect-[4/5]"
              : "aspect-[3/4]";

          return (
            <ScrollReveal key={i} delay={i * 100} className={colSpan}>
              <TiltCard>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card group block relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`image-reveal ${aspectRatio} relative rounded-xl overflow-hidden shadow-2xl`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div style={{ transform: "translateZ(40px)" }}>
                        <p className="text-body text-xs tracking-[0.2em] uppercase text-white/70 mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-display text-2xl md:text-3xl font-light text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6" style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-body text-sm font-medium">{project.title}</h3>
                    <span className="text-body text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </motion.a>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
