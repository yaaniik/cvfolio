import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useRef } from 'react';

function EducationCard({ edu, index }) {
  const cardRef = useRef(null);

  // Track scroll position della card rispetto al viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Configurazione colori per spotlight effect
  const getColorConfig = (color) => {
    const configs = {
      purple: {
        border: 'rgb(168, 85, 247)',      // purple-500
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        shadow: 'rgba(168, 85, 247, 0.5)'
      },
      blue: {
        border: 'rgb(59, 130, 246)',      // blue-500
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        shadow: 'rgba(59, 130, 246, 0.5)'
      },
      orange: {
        border: 'rgb(249, 115, 22)',      // orange-500
        bg: 'bg-orange-500/20',
        text: 'text-orange-400',
        shadow: 'rgba(249, 115, 22, 0.5)'
      }
    };
    return configs[color] || configs.blue;
  };

  const colorConfig = getColorConfig(edu.color);
  const Icon = edu.icon;

  // EFFETTO SPOTLIGHT - Border opacity graduale
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
      {/* Border animato - colorazione graduale */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          opacity: borderOpacity,
          border: `1px solid ${colorConfig.border}`,
          boxShadow: `0 0 30px ${colorConfig.shadow}, inset 0 0 20px ${colorConfig.shadow.replace('0.5', '0.1')}`,
        }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        {/* Icona a sinistra */}
        <div
          className={`${colorConfig.bg} p-3 rounded-lg flex-shrink-0`}
          aria-hidden="true"
        >
          <Icon className={colorConfig.text} size={24} />
        </div>

        {/* Contenuto a destra */}
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
              <p className={`${colorConfig.text} font-semibold`}>{edu.institution}</p>
            </div>
            <div className="text-right">
              <time
                dateTime={edu.dateTime}
                className="text-gray-400 text-sm block"
              >
                {edu.period}
              </time>
              <span className="text-gray-500 text-xs">{edu.duration}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-4">{edu.description}</p>

          {/* Sub-corsi (se presenti) */}
          {edu.subCourses && (
            <div
              className="mb-4 pl-4 border-l-2 border-gray-700"
              role="list"
              aria-label="Moduli del corso"
            >
              {edu.subCourses.map((subCourse, idx) => (
                <div
                  key={idx}
                  className="mb-2 last:mb-0"
                  role="listitem"
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-gray-300 font-medium text-sm">{subCourse.name}</span>
                    <span className="text-gray-500 text-xs whitespace-nowrap">{subCourse.hours}</span>
                  </div>
                  <time
                    dateTime={subCourse.dateTime}
                    className="text-gray-500 text-xs"
                  >
                    {subCourse.period}
                  </time>
                </div>
              ))}
            </div>
          )}

          {/* Competenze acquisite */}
          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label={`Competenze acquisite in ${edu.title}`}
          >
            {edu.skills.map(skill => (
              <span
                key={skill}
                className={`bg-gray-700 px-3 py-1 rounded-full text-sm ${colorConfig.text} hover:bg-gray-600 transition-colors`}
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

function Education() {
  const education = [
    {
      title: 'Academy AI ENGINEER',
      institution: 'Synergie Italia - Forma.Temp',
      period: 'Giugno 2025 - Luglio 2025',
      dateTime: '2025-06/2025-07',
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
      dateTime: '2022-02/2022-05',
      duration: '392 ore totali',
      description: 'Formazione completa Full Stack con specializzazione Back End (Java - 248 ore) e Front End (Angular - 144 ore). Metodologia Scrum con Suite Atlassian.',
      skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'HTML', 'CSS', 'Material UI', 'Scrum', 'Jira', 'Bitbucket'],
      icon: BookOpen,
      color: 'blue',
      subCourses: [
        {
          name: 'Back End - Java',
          hours: '248 ore',
          period: 'Febbraio 2022 - Aprile 2022',
          dateTime: '2022-02/2022-04'
        },
        {
          name: 'Front End - Angular',
          hours: '144 ore',
          period: 'Aprile 2022 - Maggio 2022',
          dateTime: '2022-04/2022-05'
        }
      ]
    },
    {
      title: 'Diploma - Amministrazione, Finanza e Marketing',
      institution: 'Istituto Tecnico Economico "Giulio Cesare"',
      period: '2021',
      dateTime: '2021',
      duration: '5 anni',
      description: 'Diploma tecnico con competenze in amministrazione aziendale, finanza e strategie di marketing.',
      skills: ['Amministrazione', 'Finanza', 'Marketing', 'Economia Aziendale'],
      icon: GraduationCap,
      color: 'orange'
    }
  ];

  return (
    <section
      id="formazione"
      className="py-20 px-6 bg-gray-800/30"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="education-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Formazione
        </motion.h2>

        <div
          className="space-y-6"
          role="list"
          aria-label="Lista percorsi di formazione"
        >
          {education.map((edu, index) => (
            <EducationCard
              key={edu.title}
              edu={edu}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;