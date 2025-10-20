import { motion } from 'framer-motion';

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
    <section id="competenze" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Competenze Tecniche
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                delay: categoryIndex * 0.15, 
                duration: 1.8,
                ease: "easeInOut"
              }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;