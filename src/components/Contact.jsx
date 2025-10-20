import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

function Contact() {
  return (
    <section id="contatti" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Lavoriamo Insieme
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-12 text-center text-lg"
        >
          Disponibile full-time, remoto/ibrido con sede a Roma
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:yanik.dimitrov@outlook.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center gap-4"
          >
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Mail className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-semibold">yanik.dimitrov@outlook.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+393755588385"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center gap-4"
          >
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Phone className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Telefono</p>
              <p className="text-white font-semibold">+39 375 558 8385</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yanik-dimitrov/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center gap-4"
          >
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Linkedin className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <p className="text-white font-semibold">yanik-dimitrov</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-center gap-4"
          >
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <MapPin className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Sede</p>
              <p className="text-white font-semibold">Roma, Italia</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          
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
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;