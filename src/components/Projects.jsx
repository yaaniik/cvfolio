import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Github } from 'lucide-react';

function Projects() {
  const experiences = [
    {
      company: 'FREELANCE',
      role: 'Freelance Web Developer',
      period: 'Dicembre 2022 - Presente',
      description: 'Sviluppo di soluzioni web personalizzate per piccole e medie imprese, dalla progettazione alla realizzazione di siti web e applicazioni digitali.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Mantine UI', 'Bootstrap', 'Tailwind CSS', 'Figma']
    },
    {
      company: 'KEYTYPE',
      role: 'Full Stack Developer',
      period: 'Novembre 2024 - Aprile 2025',
      description: 'Ho contribuito alla realizzazione di un’app per la scansione articoli e la generazione automatica di bolle di entrata, uscita e gestione carichi/scarichi. Gestione del lavoro tramite Azure DevOps, con assegnazione task e versionamento del codice usando Git (commit, branch, push), garantendo uno sviluppo efficiente e collaborativo.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Angular', 'TypeScript', 'Prime NG', 'CSS', 'Figma', 'Azure DevOps']
    },
    {
      company: 'INGEGNERIA & SOFTWARE INDUSTRIALE',
      role: 'Full Stack Developer',
      period: 'Ottobre 2023 - Novembre 2024',
      description: 'Contributo allo sviluppo e manutenzione di un sistema integrato per la gestione del personale, comprensivo di timbrature, ferie, paghe e altre funzionalità aziendali. Responsabile dell’implementazione di nuove funzionalità, della risoluzione di bug e dell’ottimizzazione delle API, con particolare attenzione alla migrazione di servizi legacy verso tecnologie più moderne per migliorare performance e scalabilità.',
      tech: ['PHP', 'CodeIgniter', 'C#', 'ASP.NET Core', 'SQL Server', 'JavaScript', 'HTML', 'CSS']
    },
    {
      company: 'KIREY',
      role: 'Junior Full Stack Developer',
      period: 'Ottobre 2022 - Aprile 2023',
      description: 'In questa esperienza ho tradotto in un sito web funzionale e responsivo un’interfaccia grafica fornita da un’azienda terza, assicurando coerenza con il design originale. Parallelamente, ho lavorato allo sviluppo di API per una seconda applicazione distinta, occupandomi della logica e della gestione dei dati sul lato server. Entrambe le attività sono state svolte in sinergia con il team, garantendo efficienza, qualità e integrazione fluida dei sistemi.',
      tech: ['Java', 'Spring Boot', 'HTML', 'Bootstrap']
    }
  ];

  const projects = [
    {
    title: 'Sistema di Gestione Ristorante - Full Stack',
    description: 'Piattaforma web completa per ristorante con sistema di prenotazioni online, sondaggi di soddisfazione clienti e area amministrativa multi-ruolo. Include dashboard analytics per statistiche giornaliere, settimanali, mensili e annuali dei feedback, gestione utenti con ruoli personalizzati e editor fotografico integrato per aggiornamento contenuti del sito.',
    tech: ['React', 'Vite', 'Mantine UI', 'PHP', 'JSON', 'CRUD', 'Authentication', 'Role-Based Access'],
    category: 'Full Stack Web App',
    github: '', // Aggiungi link quando carichi su GitHub
    demo: '' // Aggiungi link al sito live se disponibile
  },
  {
    title: 'Modello AI - Previsione Furti Chicago',
    description: 'Sviluppo modello AI (Random Forest) su Google Colab per prevedere furti a Chicago, utilizzando Pandas, Seaborn, Matplotlib e Folium per l\'analisi e visualizzazione dei dati.',
    tech: ['Python', 'Random Forest', 'Pandas', 'Seaborn', 'Matplotlib', 'Folium'],
    category: 'AI & Data Analysis',
    github: '', // Aggiungi il tuo link GitHub se disponibile
    demo: ''
  },
  {
    title: 'Portfolio Personale',
    description: 'Sito portfolio personale sviluppato con React, Vite e Tailwind CSS. Design moderno e responsive con animazioni fluide tramite Framer Motion.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development',
    github: '', // Aggiungi il tuo link GitHub
    demo: ''
  }
  ];

  return (
    <section id="esperienza" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Esperienza Lavorativa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Esperienza Lavorativa</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
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
        </motion.div>

        {/* Progetti */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Progetti</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="mb-3">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link ai progetti */}
                {(project.github || project.demo) && (
                  <div className="flex gap-4 pt-4 border-t border-gray-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Github size={20} />
                        <span className="text-sm">GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;