import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12">
          <button onClick={() => scrollTo("hero")} className="text-display text-2xl font-light tracking-wider text-foreground">
            B2A
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Sélection", id: "projects" },
              { label: "Agence", id: "about" },
              { label: "Expertise", id: "services" },
              { label: "Approche", id: "approach" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-body">
                {item.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/b2a.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-foreground"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background z-30 flex flex-col items-center justify-center gap-8"
          >
            {[
              { label: "Sélection", id: "projects" },
              { label: "Agence", id: "about" },
              { label: "Expertise", id: "services" },
              { label: "Approche", id: "approach" },
              { label: "Contact", id: "contact" },
            ].map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => scrollTo(item.id)}
                className="text-display text-4xl font-light tracking-wider text-foreground"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              href="https://www.instagram.com/b2a.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-body text-sm tracking-[0.2em] uppercase">Instagram</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
