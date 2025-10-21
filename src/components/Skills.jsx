import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2 } from 'lucide-react';

function SkillCard({ category, index }) {
  const cardRef = useRef(null);
  
  // Track scroll position della card rispetto al viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // EFFETTO SPOTLIGHT - Border opacity graduale (ARANCIONE)
  const borderOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
    [0, 0.2, 0.7, 1, 0.7, 0.2, 0]
  );

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        delay: index * 0.15,
        duration: 1.8,
        ease: "easeInOut"
      }}
      className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden"
    >
      {/* Border animato - colorazione graduale ARANCIONE */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          opacity: borderOpacity,
          border: '1px solid rgb(249, 115, 22)', // orange-500
          boxShadow: '0 0 30px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(249, 115, 22, 0.1)',
        }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        {/* Icona a sinistra */}
        <div 
          className="bg-orange-500/20 p-3 rounded-lg flex-shrink-0"
          aria-hidden="true"
        >
          <Code2 className="text-orange-400" size={24} />
        </div>
        
        {/* Contenuto a destra */}
        <div className="flex-1">
          <h3 
            className="text-xl font-bold text-white mb-4"
            id={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category.title}
          </h3>
          
          <div 
            className="flex flex-wrap gap-2"
            role="list"
            aria-labelledby={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category.skills.map((skill) => (
              <span 
                key={skill}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm text-orange-300 hover:bg-gray-600 transition-colors"
                role="listitem"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ['Python', 'Django', 'Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'PHP', 'CodeIgniter']
    },
    {
      title: "Frontend",
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: "UI Libraries",
      skills: ['Bootstrap', 'Material UI', 'Mantine UI', 'Tailwind CSS']
    },
    {
      title: "Database",
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB']
    },
    {
      title: "Tools & DevOps",
      skills: ['Git', 'Jira', 'Bitbucket', 'Azure DevOps']
    },
    {
      title: "AI & Data",
      skills: ['Databricks', 'Google Colab', 'Pandas', 'Scikit-learn', 'Data Factory']
    },
    {
      title: "Design",
      skills: ['Figma']
    }
  ];

  return (
    <section 
      id="competenze" 
      className="py-20 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          id="skills-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Competenze Tecniche
        </motion.h2>
        
        <div 
          className="space-y-6"
          role="list"
          aria-label="Lista categorie di competenze tecniche"
        >
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;