import ScrollReveal from "./ScrollReveal";
import { Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-foreground text-primary-foreground">
      <div className="px-6 md:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-body text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">
                Contact
              </p>
              <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8">
                Parlons de votre
                <span className="italic"> projet</span>
              </h2>
              <p className="text-body text-sm text-primary-foreground/60 max-w-md leading-relaxed">
                Nous serions ravis d'échanger sur votre projet architectural. 
                N'hésitez pas à nous contacter pour une première consultation.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <div className="space-y-8">
                <div>
                  <p className="text-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:contact@b2a.studio"
                    className="text-display text-xl md:text-2xl font-light hover:text-accent transition-colors duration-300"
                  >
                    contact@b2a.studio
                  </a>
                </div>

                <div>
                  <p className="text-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-2">
                    Adresse
                  </p>
                  <p className="text-display text-xl md:text-2xl font-light mb-4">
                    4 Bd Mohamed Zerktouni, 5e étage<br />
                    Casablanca, Morocco 20000
                  </p>
                  <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-lg border border-primary-foreground/10">
                    <iframe 
                      src="https://maps.google.com/maps?q=4%20Bd%20Mohamed%20Zerktouni%2C%20Casablanca%2C%20Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps Location"
                    ></iframe>
                  </div>
                </div>

                <div>
                  <p className="text-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-2">
                    Réseaux
                  </p>
                  <a
                    href="https://www.instagram.com/b2a.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-display text-xl font-light hover:text-accent transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    @b2a.studio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-display text-lg font-light">B2A Studio</span>
          <span className="text-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Benabdallah Abdelkader Architecte. Tous droits réservés.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
