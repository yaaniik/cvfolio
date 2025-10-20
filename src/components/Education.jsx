import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function EducationCard({ edu, index }) {
  const [ref, isInView] = useInView();
  const Icon = edu.icon;
  
  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'hover:border-purple-500'
      },
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'hover:border-blue-500'
      },
      orange: {
        bg: 'bg-orange-500/20',
        text: 'text-orange-400',
        border: 'hover:border-orange-500'
      }
    };
    return colors[color] || colors.blue;
  };

  const colors = getColorClasses(edu.color);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`bg-gray-800 p-6 rounded-lg border border-gray-700 ${colors.border} transition-all`}
    >
      <div className="flex items-start gap-4">
        <div className={`${colors.bg} p-3 rounded-lg flex-shrink-0`}>
          <Icon className={colors.text} size={24} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
              <p className={`${colors.text} font-semibold`}>{edu.institution}</p>
            </div>
            <div className="text-right">
              <span className="text-gray-400 text-sm block">{edu.period}</span>
              <span className="text-gray-500 text-xs">{edu.duration}</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">{edu.description}</p>
          
          {/* Sotto-corsi (se presenti) */}
          {edu.subCourses && (
            <div className="mb-4 pl-4 border-l-2 border-gray-700">
              {edu.subCourses.map((subCourse, idx) => (
                <div key={idx} className="mb-2 last:mb-0">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium text-sm">{subCourse.name}</span>
                    <span className="text-gray-500 text-xs">{subCourse.hours}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{subCourse.period}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Competenze acquisite */}
          <div className="flex flex-wrap gap-2">
            {edu.skills.map(skill => (
              <span 
                key={skill} 
                className={`text-xs ${colors.bg} ${colors.text} px-3 py-1 rounded-full`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Education() {
  const education = [
    {
      title: 'Academy AI ENGINEER',
      institution: 'Synergie Italia - Forma.Temp',
      period: 'Giugno 2025 - Luglio 2025',
      duration: '200 ore',
      description: 'Formazione avanzata in intelligenza artificiale e machine learning, con focus su sviluppo modelli AI, data analysis e strumenti moderni come Databricks e Google Colab.',
      skills: ['Machine Learning', 'Data Analysis', 'Python', 'Databricks', 'Google Colab', 'AI Engineering'],
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Corso Full Stack Developer',
      institution: 'Unikey - Intelliform - Forma.Temp',
      period: 'Febbraio 2022 - Maggio 2022',
      duration: '392 ore totali',
      description: 'Formazione completa Full Stack con specializzazione Back End (Java - 248 ore) e Front End (Angular - 144 ore). Metodologia Scrum con Suite Atlassian.',
      skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'HTML', 'CSS', 'Material UI', 'Scrum', 'Jira', 'Bitbucket'],
      icon: BookOpen,
      color: 'blue',
      subCourses: [
        {
          name: 'Back End - Java',
          hours: '248 ore',
          period: 'Febbraio 2022 - Aprile 2022'
        },
        {
          name: 'Front End - Angular',
          hours: '144 ore',
          period: 'Aprile 2022 - Maggio 2022'
        }
      ]
    },
    {
      title: 'Diploma - Amministrazione, Finanza e Marketing',
      institution: 'Istituto Tecnico Economico "Giulio Cesare"',
      period: '2021',
      duration: '5 anni',
      description: 'Diploma tecnico con competenze in amministrazione aziendale, finanza e strategie di marketing.',
      skills: ['Amministrazione', 'Finanza', 'Marketing', 'Economia Aziendale'],
      icon: GraduationCap,
      color: 'orange'
    }
  ];

  return (
    <section id="formazione" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Formazione
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={edu.title} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;