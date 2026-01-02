import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Globe, ArrowUpRight, Sparkles } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dhwani.pandya@email.com',
    href: 'mailto:dhwani.pandya@email.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhwanipandya',
    href: 'https://linkedin.com/in/dhwanipandya',
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'dhwanipandya.design',
    href: '#',
  },
];

export const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-start/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          {/* Main Card */}
          <div className="glass-card gradient-border rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-2xl gradient-bg mb-6 glow-primary">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Create Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
              Open to internships, collaborations, and creative opportunities.
              Let's build digital experiences that users enjoy and remember.
            </p>

            {/* CTA Button */}
            <Button variant="hero" className="mb-12">
              <Mail className="mr-2 w-5 h-5" />
              Let's Work Together
            </Button>

            {/* Contact Links */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-xl bg-secondary group-hover:gradient-bg transition-all duration-300">
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-body mb-1">{link.label}</div>
                      <div className="text-sm font-medium text-foreground font-body flex items-center gap-1 justify-center group-hover:text-primary transition-colors duration-300">
                        {link.value}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
