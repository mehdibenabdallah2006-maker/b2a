import { motion } from "framer-motion";

const MarqueeSection = () => {
  const text = "Architecture · Design · Urbanisme · Mobilier · ";

  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-border">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground/10 mx-4"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
