import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-start/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-mid/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-end/15 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 opacity-0 animate-reveal-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-sm text-muted-foreground font-body">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-reveal-up"
            style={{ animationDelay: '0.4s' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text text-glow">Dhwani</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-light">
              UI/UX & Graphic Designer
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-4 font-body opacity-0 animate-reveal-up"
            style={{ animationDelay: '0.6s' }}
          >
            I design clean, intuitive digital experiences focused on clarity, usability, and modern aesthetics.
          </p>

          {/* Supporting text */}
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 font-body opacity-0 animate-reveal-up"
            style={{ animationDelay: '0.8s' }}
          >
            I enjoy turning complex ideas into simple, user-friendly interfaces through thoughtful layouts, 
            smooth interactions, and strong visual hierarchy.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-reveal-up"
            style={{ animationDelay: '1s' }}
          >
            <Button variant="hero" onClick={scrollToProjects}>
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="heroOutline" onClick={scrollToContact}>
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-reveal-up"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full gradient-bg animate-bounce" />
        </div>
      </div>
    </section>
  );
};
