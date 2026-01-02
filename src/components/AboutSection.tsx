import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sparkles, Palette, Layout, Eye } from 'lucide-react';

const highlights = [
  { icon: Layout, label: 'Clean Layouts' },
  { icon: Sparkles, label: 'Meaningful Interactions' },
  { icon: Eye, label: 'Visual Consistency' },
  { icon: Palette, label: 'Thoughtful Details' },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-reveal-left' : 'opacity-0'}`}>
            <div className="space-y-2">
              <span className="text-primary font-body text-sm tracking-widest uppercase">About Me</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Designing Experiences
                <br />
                <span className="gradient-text">That Feel Right</span>
              </h2>
            </div>

            <p className="text-foreground/90 text-lg leading-relaxed font-body">
              I'm a UI/UX and graphic designer who enjoys creating designs that feel effortless to use.
              My work focuses on clean layouts, meaningful interactions, and visual consistency across digital experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed font-body">
              I work across the full design process — from structuring user flows and wireframes to crafting polished interfaces and marketing creatives.
              I care deeply about spacing, typography, and small details that users may not consciously notice, but always feel.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 glass-card rounded-lg p-3 transition-all duration-300 hover:bg-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg gradient-bg">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium font-body">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative ${isVisible ? 'animate-reveal-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main glass card */}
              <div className="glass-card gradient-border rounded-3xl p-8 md:p-12">
                <div className="space-y-8">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-display italic text-foreground/90 leading-relaxed">
                    "Good design is invisible. Great design is unforgettable."
                  </blockquote>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <div className="text-3xl font-bold gradient-text font-display">3+</div>
                      <div className="text-sm text-muted-foreground font-body">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <div className="text-3xl font-bold gradient-text font-display">∞</div>
                      <div className="text-sm text-muted-foreground font-body">Ideas Brewing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 gradient-bg rounded-2xl opacity-20 blur-xl animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-mid rounded-full opacity-15 blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
