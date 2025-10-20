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
            >
              Full Stack Developer
            </motion.p>

            {/* Foto Mobile - Visibile solo su mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center md:hidden mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="/ya_cv.jpg"
                  alt="Yanik Dimitrov"
                  loading="eager"
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
            >
              <a
                href="https://linkedin.com/in/yanik-dimitrov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:yanik.dimitrov@outlook.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="tel:+393755588385"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone size={24} />
                <span className="text-sm">+39 375 558 8385</span>
              </a>

              {/* Pulsante Download CV - Centrato su mobile, a sinistra su desktop */}
              <a
                href="/CV_Yanik_Dimitrov.pdf"
                download="CV_Yanik_Dimitrov.pdf"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto justify-center"
              >
                <Download size={20} />
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
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/ya_cv.jpg"
                alt="Yanik Dimitrov"
                loading="eager"
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