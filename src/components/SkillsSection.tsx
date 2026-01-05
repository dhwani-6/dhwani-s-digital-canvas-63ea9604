import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Palette, 
  Layout, 
  Figma, 
  Layers, 
  Smartphone,
  Accessibility,
  PenTool,
  Image,
  Share2,
  Type,
  Code,
  GitBranch
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Design',
    icon: Layout,
    color: 'from-violet-500 to-purple-600',
    skills: ['UI Design', 'UX Fundamentals', 'Wireframing', 'User Flows', 'Prototyping', 'Visual Hierarchy'],
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    skills: ['Product Flyers', 'Marketing Creatives', 'Social Media Design', 'Typography & Color Theory'],
  },
  {
    title: 'Tools',
    icon: PenTool,
    color: 'from-blue-500 to-indigo-600',
    skills: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'VS Code', 'GitHub'],
  },
  {
    title: 'Bonus Skills',
    icon: Layers,
    color: 'from-emerald-500 to-teal-600',
    skills: ['Design Systems (Basics)', 'Accessibility (Basics)', 'Responsive Design'],
  },
];

const toolIcons: Record<string, React.ElementType> = {
  'Figma': Figma,
  'VS Code': Code,
  'GitHub': GitBranch,
  'Adobe Photoshop': Image,
  'Adobe Illustrator': PenTool,
  'Canva': Palette,
  'Responsive Design': Smartphone,
  'Accessibility (Basics)': Accessibility,
  'Social Media Design': Share2,
  'Typography & Color Theory': Type,
};

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative overflow-hidden px-4 sm:px-6">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="hidden sm:block absolute top-1/2 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-start/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="hidden sm:block absolute top-1/3 right-0 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-gradient-mid/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-16 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-widest uppercase">My Expertise</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 sm:mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body px-2">
            A comprehensive toolkit for crafting beautiful, user-centered digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`skill-card p-4 sm:p-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => {
                  const SkillIcon = toolIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300 group"
                    >
                      {SkillIcon && (
                        <SkillIcon className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      )}
                      <span className="text-xs sm:text-sm font-body text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
