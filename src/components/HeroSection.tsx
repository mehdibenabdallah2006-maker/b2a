import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: yBackground }}
        className="absolute inset-0 origin-top"
      >
        <img
          src="/villa-h-new.jpg"
          alt="B2A Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-5xl md:text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-tight"
          >
            Abdelkader
            <br />
            Benabdallah
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-3xl md:text-5xl lg:text-6xl font-light italic text-white/80 tracking-tight"
          >
            Architecte
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-white/50" />
            <p className="text-body text-xs tracking-[0.3em] uppercase text-white/70">
              Casablanca, Maroc
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/b2a.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-body text-xs tracking-[0.2em] uppercase hidden sm:inline">@b2a.studio</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-white/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
