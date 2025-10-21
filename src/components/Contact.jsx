import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

function Contact() {
  return (
    <section
      id="contatti"
      className="py-20 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="contact-heading"
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

        {/* Contact Cards Grid */}
        <div
          className="grid sm:grid-cols-2 gap-6 mb-12"
          role="list"
          aria-label="Informazioni di contatto"
        >
          {/* Email */}
          <motion.a
            href="mailto:yanik.dimitrov@outlook.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1.8,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.02 }}  // ← Ridotto da 1.03 a 1.02
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            role="listitem"
            aria-label="Inviami una email a yanik.dimitrov@outlook.com"
          >
            <div
              className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0"
              aria-hidden="true"
            >
              <Mail className="text-blue-400" size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <p className="text-white font-semibold break-words">yanik.dimitrov@outlook.com</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+393755588385"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 1.8,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.02 }}  // ← Ridotto
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            role="listitem"
            aria-label="Chiamami al +39 375 558 8385"
          >
            <div
              className="bg-green-500/20 p-3 rounded-lg flex-shrink-0"
              aria-hidden="true"
            >
              <Phone className="text-green-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Telefono</p>
              <p className="text-white font-semibold">+39 375 558 8385</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yanik-dimitrov/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1.8,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.02 }}  // ← Ridotto
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            role="listitem"
            aria-label="Visita il mio profilo LinkedIn (si apre in una nuova scheda)"
          >
            <div
              className="bg-blue-600/20 p-3 rounded-lg flex-shrink-0"
              aria-hidden="true"
            >
              <Linkedin className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
              <p className="text-white font-semibold">yanik-dimitrov</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1.8,
              ease: "easeInOut"
            }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-center gap-4"
            role="listitem"
            aria-label="Sede: Roma, Italia"
          >
            <div
              className="bg-red-500/20 p-3 rounded-lg flex-shrink-0"
              aria-hidden="true"
            >
              <MapPin className="text-red-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Sede</p>
              <p className="text-white font-semibold">Roma, Italia</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-wrap gap-4 justify-center"
          role="group"
          aria-label="Azioni principali"
        >

          <a
            href="mailto:yanik.dimitrov@outlook.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="Invia una email a yanik.dimitrov@outlook.com"
          >
            <Mail size={20} aria-hidden="true" />
            Invia una Email
          </a>


          <a
            href="/CV_Yanik_Dimitrov.pdf"
            download="CV_Yanik_Dimitrov.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="Scarica il mio CV in formato PDF"
          >
            <Download size={20} aria-hidden="true" />
            Scarica CV
          </a>
        </motion.div>

        {/* Divider decorativo */}
        <div
          className="mt-16 pt-8 border-t border-gray-700/50"
          aria-hidden="true"
        >
          <p className="text-center text-gray-500 text-sm">
            💼 Rispondo entro 24 ore · 🚀 Disponibile da subito
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;