import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 text-center border-t border-gray-800 bg-gray-900/50"
      role="contentinfo"
      aria-label="Footer del sito"
    >
      <div className="max-w-4xl mx-auto">
        {/* Logo e Brand */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              YD
            </span>
            <Code2 className="text-blue-400" size={24} aria-hidden="true" />
          </div>
          <p className="text-gray-400 text-lg font-medium">
            Full Stack Developer & Technology Enthusiast
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" aria-hidden="true" />

        {/* Copyright */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm mb-2">
            © {currentYear} Yanik Dimitrov. Tutti i diritti riservati.
          </p>
          
          {/* Made with love */}
          <p className="text-gray-600 text-xs flex items-center justify-center gap-2">
            <span>Sviluppato con</span>
            <Heart className="text-red-400 fill-red-400" size={14} aria-hidden="true" />
            <span>e</span>
            <Code2 className="text-blue-400" size={14} aria-hidden="true" />
            <span>a Roma</span>
          </p>
        </motion.div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50">
            <span className="text-xs text-gray-500">Built with</span>
            <span className="text-xs font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              React + Vite + Tailwind
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;