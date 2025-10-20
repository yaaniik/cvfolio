import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function ContactCard({ children, delay }) {
  const [ref, isInView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        delay, 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contatti" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Lavoriamo Insieme
        </h2>
        <p className="text-gray-400 mb-12 text-center text-lg">
          Disponibile full-time, remoto/ibrido con sede a Roma
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ContactCard delay={0.3}>
            <motion.a
              href="mailto:yanik.dimitrov@outlook.com"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center gap-4 block"
            >
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">yanik.dimitrov@outlook.com</p>
              </div>
            </motion.a>
          </ContactCard>

          <ContactCard delay={0.4}>
            <motion.a
              href="tel:+393755588385"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center gap-4 block"
            >
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Phone className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Telefono</p>
                <p className="text-white font-semibold">+39 375 558 8385</p>
              </div>
            </motion.a>
          </ContactCard>

          <ContactCard delay={0.5}>
            <motion.a
              href="https://linkedin.com/in/yanik-dimitrov/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center gap-4 block"
            >
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Linkedin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white font-semibold">yanik-dimitrov</p>
              </div>
            </motion.a>
          </ContactCard>

          <ContactCard delay={0.6}>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Sede</p>
                <p className="text-white font-semibold">Roma, Italia</p>
              </div>
            </div>
          </ContactCard>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:yanik.dimitrov@outlook.com"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Invia una Email
          </a>

          <a
            href="/cv_yanik.pdf"
            download="cv_yanik.pdf"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Download size={20} />
            Scarica CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;