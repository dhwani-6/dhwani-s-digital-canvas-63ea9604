import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Package, Globe, Palette, X, Lightbulb, Target, CheckCircle2, Wrench } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Package,
    title: 'Inventory Management System',
    shortTitle: 'IMS',
    tagline: 'Organizing chaos into clarity',
    overview: 'A web-based Inventory Management System designed to organize products and inventory records while reducing manual effort.',
    role: 'UI/UX Designer & Frontend Developer',
    problem: 'Manual inventory handling causes errors, stock discrepancies, and poor organization leading to business inefficiencies.',
    solution: 'Designed a clean, structured system with readable layouts, intuitive data flow, and real-time inventory tracking.',
    features: ['Inventory record management', 'Clean dashboard & tables', 'CRUD operations', 'User-friendly interface'],
    tools: ['Figma', 'HTML', 'CSS', 'PHP', 'MySQL'],
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgGradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
    caseStudy: {
      challenge: 'Small businesses struggle with inventory tracking using spreadsheets, leading to stock-outs, over-ordering, and revenue loss. The existing solutions were too complex or expensive for small operations.',
      research: 'Conducted user interviews with 5 small business owners to understand their pain points. Key findings: need for simplicity, quick data entry, and visual stock indicators.',
      process: [
        'Created user personas and journey maps',
        'Developed low-fidelity wireframes focusing on key workflows',
        'Iterated on UI based on usability testing feedback',
        'Designed a cohesive visual system with clear hierarchy'
      ],
      outcome: 'Reduced inventory lookup time by 60%. Users reported feeling more in control of their stock levels with the visual dashboard.',
      learnings: 'Simplicity trumps features. Users preferred fewer options that worked well over many options that were confusing.'
    }
  },
  {
    id: 2,
    icon: Globe,
    title: 'Personal Portfolio Website',
    shortTitle: 'Portfolio',
    tagline: 'Making first impressions count',
    overview: 'A responsive portfolio website designed to showcase UI/UX and graphic design work professionally.',
    role: 'Designer & Developer',
    problem: 'Need for a professional online presence to showcase design work and attract potential clients or employers.',
    solution: 'Created an immersive, modern portfolio with premium aesthetics, smooth animations, and intuitive navigation.',
    features: ['Premium UI design', 'Strong typography', 'Clear navigation', 'Balanced spacing'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    bgGradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
    caseStudy: {
      challenge: 'Standing out in a crowded field of designers requires more than just good work — it requires an unforgettable presentation that reflects your design philosophy.',
      research: 'Analyzed 20+ designer portfolios to identify patterns in successful presentations. Focus groups revealed that storytelling and personality matter as much as the work itself.',
      process: [
        'Defined personal brand identity and visual language',
        'Created mood boards for aesthetic direction',
        'Developed component system for consistency',
        'Optimized for performance and accessibility'
      ],
      outcome: 'Increased profile visibility and received positive feedback on the unique visual direction and smooth user experience.',
      learnings: 'Your portfolio is your product. Every detail from loading animations to spacing reflects your attention to craft.'
    }
  },
  {
    id: 3,
    icon: Palette,
    title: 'Product Flyers & Marketing Creatives',
    shortTitle: 'Creatives',
    tagline: 'Visuals that convert',
    overview: 'Promotional and marketing visuals with strong typography and color balance for various products and campaigns.',
    role: 'Graphic Designer',
    problem: 'Brands need compelling visuals to stand out in crowded markets and capture attention in milliseconds.',
    solution: 'Crafted eye-catching marketing materials with strategic visual hierarchy and brand-consistent design language.',
    features: ['Product flyers', 'Social media graphics', 'Brand consistency', 'Print-ready designs'],
    tools: ['Canva', 'Adobe Photoshop'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    caseStudy: {
      challenge: 'Creating marketing materials that not only look good but also drive engagement and conversions across different platforms and formats.',
      research: 'Studied competitor marketing materials and industry benchmarks. Identified key elements that drive engagement: bold headlines, clear CTAs, and emotional imagery.',
      process: [
        'Established brand guidelines and color palettes',
        'Created templates for rapid content production',
        'A/B tested different visual approaches',
        'Optimized designs for each platform\'s requirements'
      ],
      outcome: 'Delivered consistent brand visuals that increased social media engagement and supported successful product launches.',
      learnings: 'Constraints breed creativity. Working within brand guidelines actually helped produce more cohesive and impactful work.'
    }
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-widest uppercase">Featured Work</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 sm:mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body px-2">
            A collection of projects that showcase my design thinking and problem-solving approach.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isVisible}
              onClick={() => setSelectedProject(project)}
              isLarge={index === 0}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border/50 p-0">
          {selectedProject && (
            <CaseStudyContent project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isVisible: boolean;
  onClick: () => void;
  isLarge: boolean;
}

const ProjectCard = ({ project, index, isVisible, onClick, isLarge }: ProjectCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
        isLarge ? 'md:col-span-2 lg:col-span-1' : ''
      } ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={onClick}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 glass-card" />
      
      {/* Content */}
      <div className="relative p-6 sm:p-8 h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
            <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground">
            Case Study
          </span>
        </div>

        {/* Middle Section */}
        <div className="flex-grow">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground font-body mb-3 sm:mb-4 line-clamp-2">
            {project.tagline}
          </p>
          <p className="text-xs sm:text-sm text-foreground/70 font-body line-clamp-3">
            {project.overview}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              {project.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 sm:py-1 rounded text-xs bg-muted/50 text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="px-2 py-0.5 sm:py-1 rounded text-xs bg-muted/50 text-muted-foreground">
                  +{project.tools.length - 3}
                </span>
              )}
            </div>
            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
      </div>
    </div>
  );
};

interface CaseStudyContentProps {
  project: typeof projects[0];
  onClose: () => void;
}

const CaseStudyContent = ({ project, onClose }: CaseStudyContentProps) => {
  return (
    <div className="relative">
      {/* Hero Header */}
      <div className={`relative p-6 sm:p-8 md:p-12 bg-gradient-to-br ${project.bgGradient}`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-xl`}>
            <project.icon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 sm:mb-3 bg-primary/20 text-primary">
              {project.role}
            </span>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-left">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-10">
        {/* Overview */}
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Overview
          </h4>
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{project.overview}</p>
        </div>

        {/* Problem & Solution */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-destructive/5 border border-destructive/20">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-destructive flex items-center gap-2">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
              The Problem
            </h4>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/20">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              The Solution
            </h4>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-muted/30">
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-3">The Challenge</h4>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{project.caseStudy.challenge}</p>
        </div>

        {/* Research */}
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-3">Research & Discovery</h4>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{project.caseStudy.research}</p>
        </div>

        {/* Process */}
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-4">Design Process</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {project.caseStudy.process.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
              >
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/80">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-4">Key Features</h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.features.map((feature) => (
              <span
                key={feature}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-gradient-to-r ${project.gradient} text-white font-medium`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl gradient-border bg-muted/10">
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-3 gradient-text">Outcome & Impact</h4>
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{project.caseStudy.outcome}</p>
        </div>

        {/* Learnings */}
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Key Learnings
          </h4>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic">"{project.caseStudy.learnings}"</p>
        </div>

        {/* Tools Used */}
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm bg-muted text-muted-foreground font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 sm:pt-6 border-t border-border/30">
          <Button variant="hero" onClick={onClose} className="w-full sm:w-auto">
            Back to Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
