import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, Package, Globe, Palette } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Package,
    title: 'Inventory Management System',
    shortTitle: 'IMS',
    overview: 'A web-based Inventory Management System designed to organize products and inventory records while reducing manual effort.',
    role: 'UI/UX Designer & Frontend Developer',
    problem: 'Manual inventory handling causes errors and poor organization.',
    solution: 'Designed a clean, structured system with readable layouts and intuitive data flow.',
    features: ['Inventory record management', 'Clean dashboard & tables', 'CRUD operations', 'User-friendly interface'],
    tools: ['Figma', 'HTML', 'CSS', 'PHP', 'MySQL'],
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    accentColor: 'violet',
  },
  {
    id: 2,
    icon: Globe,
    title: 'Personal Portfolio Website',
    shortTitle: 'Portfolio',
    overview: 'A responsive portfolio website designed to showcase UI/UX and graphic design work professionally.',
    role: 'Designer & Developer',
    problem: 'Need for a professional online presence to showcase design work.',
    solution: 'Created an immersive, modern portfolio with premium aesthetics.',
    features: ['Premium UI design', 'Strong typography', 'Clear navigation', 'Balanced spacing'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    accentColor: 'pink',
  },
  {
    id: 3,
    icon: Palette,
    title: 'Product Flyers & Marketing Creatives',
    shortTitle: 'Creatives',
    overview: 'Promotional and marketing visuals with strong typography and color balance for various products and campaigns.',
    role: 'Graphic Designer',
    problem: 'Brands need compelling visuals to stand out in crowded markets.',
    solution: 'Crafted eye-catching marketing materials with strategic visual hierarchy.',
    features: ['Product flyers', 'Social media graphics', 'Brand consistency', 'Print-ready designs'],
    tools: ['Canva', 'Adobe Photoshop'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    accentColor: 'emerald',
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Featured Work</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body">
            A collection of projects that showcase my design thinking and problem-solving approach.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`project-card ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
        {/* Visual Side */}
        <div className={`relative h-64 lg:h-auto min-h-[300px] ${!isEven ? 'lg:col-start-2' : ''}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${project.gradient} mb-4`}>
                <project.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{project.shortTitle}</h3>
            </div>
          </div>
          {/* Decorative orb */}
          <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-30 blur-2xl`} />
        </div>

        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${project.gradient} text-white`}>
                {project.role}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground font-body">{project.overview}</p>
            </div>

            {/* Problem & Solution */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30">
                <h4 className="text-sm font-semibold text-primary mb-1 font-body">Problem</h4>
                <p className="text-sm text-muted-foreground font-body">{project.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30">
                <h4 className="text-sm font-semibold text-primary mb-1 font-body">Solution</h4>
                <p className="text-sm text-muted-foreground font-body">{project.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold mb-3 font-body">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground font-body"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-body">Built with:</span>
                <div className="flex gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground font-body"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button variant="glass" className="w-fit group">
              View Case Study
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
