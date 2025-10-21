import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';

function ExperienceCard({ exp, index }) {
  const cardRef = useRef(null);
  
  // Track scroll position della card rispetto al viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // SOLO EFFETTO SPOTLIGHT - Border opacity graduale
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
      {/* Border animato - SOLO colorazione graduale */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          opacity: borderOpacity,
          border: '3px solid rgb(59, 130, 246)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        <div 
          className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0"
          aria-hidden="true"
        >
          <Briefcase className="text-blue-400" size={24} />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-blue-400 font-semibold">{exp.company}</p>
            </div>
            <time 
              dateTime={exp.dateTime}
              className="text-gray-400 text-sm whitespace-nowrap"
            >
              {exp.period}
            </time>
          </div>
          
          <p className="text-gray-300 mb-4">{exp.description}</p>
          
          <div 
            className="flex flex-wrap gap-2"
            role="list"
            aria-label="Tecnologie utilizzate"
          >
            {exp.tech.map(tech => (
              <span 
                key={tech} 
                className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Experience() {
  const experiences = [
    {
      company: 'FREELANCE',
      role: 'Freelance Web Developer',
      period: 'Dicembre 2022 - Presente',
      dateTime: '2022-12',
      description: 'Sviluppo soluzioni web personalizzate per piccole e medie imprese, dalla progettazione alla realizzazione di siti web e applicazioni digitali.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Mantine UI', 'Bootstrap', 'Tailwind CSS', 'Figma']
    },
    {
      company: 'KEYTYPE',
      role: 'Full Stack Developer',
      period: 'Novembre 2024 - Aprile 2025',
      dateTime: '2024-11/2025-04',
      description: 'Ho contribuito alla realizzazione di un\'app per la scansione articoli e la generazione automatica di bolle di entrata, uscita e gestione carichi/scarichi. Gestione del lavoro tramite Azure DevOps, con assegnazione task e versionamento del codice usando Git (commit, branch, push), garantendo uno sviluppo efficiente e collaborativo.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Angular', 'TypeScript', 'Prime NG', 'CSS', 'Figma', 'Azure DevOps']
    },
    {
      company: 'INGEGNERIA & SOFTWARE INDUSTRIALE',
      role: 'Full Stack Developer',
      period: 'Ottobre 2023 - Novembre 2024',
      dateTime: '2023-10/2024-11',
      description: 'Ho contribuito allo sviluppo e manutenzione di un sistema integrato per la gestione del personale, comprensivo di timbrature, ferie, paghe e altre funzionalità aziendali. Responsabile dell\'implementazione di nuove funzionalità, della risoluzione di bug e dell\'ottimizzazione delle API, con particolare attenzione alla migrazione di servizi legacy verso tecnologie più moderne per migliorare performance e scalabilità.',
      tech: ['PHP', 'CodeIgniter', 'C#', 'ASP.NET Core', 'SQL Server', 'JavaScript', 'HTML', 'CSS']
    },
    {
      company: 'KIREY',
      role: 'Junior Full Stack Developer',
      period: 'Ottobre 2022 - Aprile 2023',
      dateTime: '2022-10/2023-04',
      description: 'In questa esperienza ho tradotto in un sito web funzionale e responsivo un\'interfaccia grafica fornita da un\'azienda terza, assicurando coerenza con il design originale. Parallelamente, ho lavorato allo sviluppo di API per una seconda applicazione distinta, occupandomi della logica e della gestione dei dati sul lato server. Entrambe le attività sono state svolte in sinergia con il team, garantendo efficienza, qualità e integrazione fluida dei sistemi.',
      tech: ['Java', 'Spring Boot', 'HTML', 'Bootstrap']
    }
  ];

  return (
    <section 
      id="esperienza" 
      className="py-20 px-6 bg-gray-800/30"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          id="experience-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Esperienza Lavorativa
        </motion.h2>

        <div 
          className="space-y-6"
          role="list"
          aria-label="Lista esperienze lavorative"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={exp.company} 
              exp={exp} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;