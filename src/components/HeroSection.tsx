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
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg px-4 sm:px-6"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      
      {/* Floating orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-start/20 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-gradient-mid/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="hidden md:block absolute top-1/2 right-1/3 w-32 md:w-64 h-32 md:h-64 bg-gradient-end/15 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center pt-20 sm:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 opacity-0 animate-reveal-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground font-body">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 opacity-0 animate-reveal-up"
            style={{ animationDelay: '0.4s' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text text-glow">Dhwani</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-light">
              UI/UX & Graphic Designer
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-3 sm:mb-4 font-body opacity-0 animate-reveal-up px-2"
            style={{ animationDelay: '0.6s' }}
          >
            I design clean, intuitive digital experiences focused on clarity, usability, and modern aesthetics.
          </p>

          {/* Supporting text */}
          <p 
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 font-body opacity-0 animate-reveal-up px-2"
            style={{ animationDelay: '0.8s' }}
          >
            I enjoy turning complex ideas into simple, user-friendly interfaces through thoughtful layouts, 
            smooth interactions, and strong visual hierarchy.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center opacity-0 animate-reveal-up px-4"
            style={{ animationDelay: '1s' }}
          >
            <Button variant="hero" onClick={scrollToProjects} className="w-full sm:w-auto">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="heroOutline" onClick={scrollToContact} className="w-full sm:w-auto">
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small screens */}
      <div 
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-reveal-up"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full gradient-bg animate-bounce" />
        </div>
      </div>
    </section>
  );
};
