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
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-start/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-mid/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">My Expertise</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground font-body">
            A comprehensive toolkit for crafting beautiful, user-centered digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`skill-card ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const SkillIcon = toolIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300 group"
                    >
                      {SkillIcon && (
                        <SkillIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      )}
                      <span className="text-sm font-body text-foreground/80 group-hover:text-foreground transition-colors duration-300">
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
