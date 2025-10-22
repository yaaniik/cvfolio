import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { useRef } from 'react';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  
  // Track scroll position della card rispetto al viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // EFFETTO SPOTLIGHT - Border opacity graduale (VIOLA)
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
      {/* Border animato - colorazione graduale VIOLA */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          opacity: borderOpacity,
          border: '1px solid rgb(168, 85, 247)', // purple-500
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.1)',
        }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        <div 
          className="bg-purple-500/20 p-3 rounded-lg flex-shrink-0"
          aria-hidden="true"
        >
          <Folder className="text-purple-400" size={24} />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
            <div className="flex-1">
              <div className="mb-2">
                <span 
                  className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full"
                  role="status"
                  aria-label={`Categoria: ${project.category}`}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div 
            className="flex flex-wrap gap-2 mb-4"
            role="list"
            aria-label="Tecnologie utilizzate nel progetto"
          >
            {project.tech.map(tech => (
              <span 
                key={tech} 
                className="bg-gray-700 px-3 py-1 rounded-full text-sm text-purple-300 hover:bg-gray-600 transition-colors"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div 
              className="flex gap-4"
              role="group"
              aria-label="Link al progetto"
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1"
                  aria-label={`Visualizza ${project.title} su GitHub (si apre in una nuova scheda)`}
                >
                  <Github size={20} aria-hidden="true" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1"
                  aria-label={`Visualizza demo di ${project.title} (si apre in una nuova scheda)`}
                >
                  <ExternalLink size={20} aria-hidden="true" />
                  <span className="text-sm">Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Sistema di Gestione Ristorante - Full Stack',
      description: 'Ho realizzato una piattaforma web completa per ristorante con sistema di prenotazioni online, sondaggi di soddisfazione clienti e area amministrativa multi-ruolo. Include una dashboard analytics per statistiche giornaliere, settimanali, mensili e annuali dei feedback, gestione utenti con ruoli personalizzati e un editor fotografico integrato per l\'aggiornamento dei contenuti del sito.',
      tech: ['React', 'Vite', 'Mantine UI', 'PHP', 'JSON', 'CRUD', 'Authentication', 'Role-Based Access'],
      category: 'Full Stack Web App',
      github: 'https://github.com/yaaniik/restaurant-kilo-casestudy',
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
      github: 'https://github.com/yaaniik/cvfolio',
      demo: ''
    }
  ];

  return (
    <section 
      id="progetti" 
      className="py-20 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          id="projects-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Progetti
        </motion.h2>

        <div 
          className="space-y-6"
          role="list"
          aria-label="Lista progetti"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;