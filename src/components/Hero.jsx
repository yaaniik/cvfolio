import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Download } from 'lucide-react';

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testo */}
          <div>
            {/* Schema.org Person markup per SEO */}
            <div itemScope itemType="https://schema.org/Person" className="hidden">
              <span itemProp="name">Yanik Dimitrov</span>
              <span itemProp="jobTitle">Full Stack Developer</span>
              <span itemProp="url">https://yanikdimitrov.com</span>
              <span itemProp="email">yanik.dimitrov@outlook.com</span>
              <span itemProp="telephone">+39 375 558 8385</span>
              <link itemProp="sameAs" href="https://linkedin.com/in/yanik-dimitrov/" />
            </div>

            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              YANIK DIMITROV
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
              role="doc-subtitle"
            >
              Full Stack Developer
            </motion.p>

            {/* Foto Mobile - Visibile solo su mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center md:hidden mb-8"
              aria-hidden="true"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20" aria-hidden="true"></div>
                <img
                  src="/ya_cv.jpg"
                  alt="Yanik Dimitrov - Full Stack Developer specializzato in React, Java e Python"
                  loading="eager"
                  width="256"
                  height="256"
                  className="relative w-64 h-64 object-cover object-[50%_45%] rounded-full border-4 border-gray-700 shadow-2xl"
                  style={{
                    imageRendering: 'high-quality',
                    WebkitBackfaceVisibility: 'hidden',
                    WebkitTransform: 'translateZ(0)',
                  }}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              Dal design alla logica, dall'estetica alla funzionalità: ho costruito la mia carriera attraversando
              ogni livello dello sviluppo web. Partito dal graphic design, ho naturalmente evoluto verso il frontend,
              per poi completare il percorso padroneggiando anche il backend.
            </motion.p>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed mb-12"
            >
              Oggi sono tecnologicamente agnostico: Java, Python, Angular, React... non importa lo stack.
              Mi interessa risolvere problemi, costruire prodotti che funzionano e continuare a imparare.
              Attualmente sto esplorando AI e data analysis, perché la curiosità è il motore che mi ha portato
              fin qui e che continua a spingermi avanti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 items-center justify-center md:justify-start"
              role="list"
              aria-label="Link ai contatti e profili social"
            >
              
              <a
                href="https://linkedin.com/in/yanik-dimitrov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1"
                aria-label="Visita il mio profilo LinkedIn (si apre in una nuova scheda)"
              >
                <Linkedin size={24} aria-hidden="true" />
                <span className="text-sm">LinkedIn</span>
              </a>
              
              
              <a
                href="mailto:yanik.dimitrov@outlook.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1"
                aria-label="Inviami una email a yanik.dimitrov@outlook.com"
              >
                <Mail size={24} aria-hidden="true" />
                <span className="text-sm">Email</span>
              </a>
              
              
              <a
                href="tel:+393755588385"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded px-2 py-1"
                aria-label="Chiamami al +39 375 558 8385"
              >
                <Phone size={24} aria-hidden="true" />
                <span className="text-sm">+39 375 558 8385</span>
              </a>

              {/* Pulsante Download CV */}
              
              <a
                href="/CV_Yanik_Dimitrov.pdf"
                download="CV_Yanik_Dimitrov.pdf"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Scarica il mio CV in formato PDF"
              >
                <Download size={20} aria-hidden="true" />
                <span>Scarica CV</span>
              </a>
            </motion.div>
          </div>

          {/* Foto Desktop - Visibile solo su desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex justify-center"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20" aria-hidden="true"></div>
              <img
                src="/ya_cv.jpg"
                alt="Yanik Dimitrov - Full Stack Developer specializzato in React, Java e Python"
                loading="eager"
                width="320"
                height="320"
                className="relative w-80 h-80 object-cover object-[50%_45%] rounded-full border-4 border-gray-700 shadow-2xl"
                style={{
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;