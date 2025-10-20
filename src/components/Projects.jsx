import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Sistema di Gestione Ristorante - Full Stack',
      description: 'Ho realizzato una piattaforma web completa per ristorante con sistema di prenotazioni online, sondaggi di soddisfazione clienti e area amministrativa multi-ruolo. Include una dashboard analytics per statistiche giornaliere, settimanali, mensili e annuali dei feedback, gestione utenti con ruoli personalizzati e un editor fotografico integrato per l\'aggiornamento dei contenuti del sito.',
      tech: ['React', 'Vite', 'Mantine UI', 'PHP', 'JSON', 'CRUD', 'Authentication', 'Role-Based Access'],
      category: 'Full Stack Web App',
      github: '',
      demo: ''
    },
    {
      title: 'Modello AI - Previsione Furti Chicago',
      description: 'Ho sviluppato un modello di intelligenza artificiale su Google Colab per prevedere i furti a Chicago, utilizzando librerie Python per l\'analisi e la visualizzazione dei dati, sotto forma di grafici e mappe di calore.',
      tech: ['Python', 'Random Forest', 'Pandas', 'Seaborn', 'Matplotlib', 'Folium'],
      category: 'AI & Data Analysis',
      github: '',
      demo: ''
    },
    {
      title: 'Portfolio Personale',
      description: 'Ho realizzato il mio sito portfolio personale, caratterizzato da un design moderno, responsivo e da animazioni fluide.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
      github: '',
      demo: ''
    }
  ];

  return (
    <section id="progetti" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Progetti</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 1.2
                }}
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