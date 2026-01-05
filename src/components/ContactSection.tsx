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
    <section id="contact" className="section-padding relative overflow-hidden px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-start/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          {/* Main Card */}
          <div className="glass-card gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            {/* Icon */}
            <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl gradient-bg mb-4 sm:mb-6 glow-primary">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Let's Create Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 font-body px-2">
              Open to internships, collaborations, and creative opportunities.
              Let's build digital experiences that users enjoy and remember.
            </p>

            {/* CTA Button */}
            <Button variant="hero" className="mb-8 sm:mb-12 w-full sm:w-auto">
              <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Let's Work Together
            </Button>

            {/* Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-3">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-secondary group-hover:gradient-bg transition-all duration-300">
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="text-left sm:text-center">
                      <div className="text-xs sm:text-sm text-muted-foreground font-body mb-0.5 sm:mb-1">{link.label}</div>
                      <div className="text-xs sm:text-sm font-medium text-foreground font-body flex items-center gap-1 sm:justify-center group-hover:text-primary transition-colors duration-300">
                        <span className="truncate max-w-[180px] sm:max-w-none">{link.value}</span>
                        <ArrowUpRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
