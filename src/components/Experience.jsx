import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      company: 'FREELANCE',
      role: 'Web Developer',
      period: 'Dicembre 2022 - Presente',
      description: 'Sviluppo soluzioni web personalizzate per piccole e medie imprese, dalla progettazione alla realizzazione di siti web e applicazioni digitali.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Mantine UI', 'Bootstrap', 'Tailwind CSS', 'Figma']
    },
    {
      company: 'KEYTYPE',
      role: 'Full Stack Developer',
      period: 'Novembre 2024 - Aprile 2025',
      description: 'Ho contribuito alla realizzazione di un\'app per la scansione articoli e la generazione automatica di bolle di entrata, uscita e gestione carichi/scarichi. Gestione del lavoro tramite Azure DevOps, con assegnazione task e versionamento del codice usando Git (commit, branch, push), garantendo uno sviluppo efficiente e collaborativo.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Angular', 'TypeScript', 'Prime NG', 'CSS', 'Figma', 'Azure DevOps']
    },
    {
      company: 'INGEGNERIA & SOFTWARE INDUSTRIALE',
      role: 'Full Stack Developer',
      period: 'Ottobre 2023 - Novembre 2024',
      description: 'Ho contribuito allo sviluppo e manutenzione di un sistema integrato per la gestione del personale, comprensivo di timbrature, ferie, paghe e altre funzionalità aziendali. Responsabile dell\'implementazione di nuove funzionalità, della risoluzione di bug e dell\'ottimizzazione delle API, con particolare attenzione alla migrazione di servizi legacy verso tecnologie più moderne per migliorare performance e scalabilità.',
      tech: ['PHP', 'CodeIgniter', 'C#', 'ASP.NET Core', 'SQL Server', 'JavaScript', 'HTML', 'CSS']
    },
    {
      company: 'KIREY',
      role: 'Junior Full Stack Developer',
      period: 'Ottobre 2022 - Aprile 2023',
      description: 'In questa esperienza ho tradotto in un sito web funzionale e responsivo un\'interfaccia grafica fornita da un\'azienda terza, assicurando coerenza con il design originale. Parallelamente, ho lavorato allo sviluppo di API per una seconda applicazione distinta, occupandomi della logica e della gestione dei dati sul lato server. Entrambe le attività sono state svolte in sinergia con il team, garantendo efficienza, qualità e integrazione fluida dei sistemi.',
      tech: ['Java', 'Spring Boot', 'HTML', 'Bootstrap']
    }
  ];

  return (
    <section id="esperienza" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Esperienza Lavorativa
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 1.8,
                ease: "easeInOut"
              }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span key={tech} className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;