import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['home', 'esperienza', 'progetti', 'competenze', 'formazione', 'contatti'];

  const handleNavigate = (section) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      onNavigate(section);
    }, 300);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {/* Logo Desktop */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            YD
          </span>
          
          {/* Separatore verticale */}
          <div className="h-6 w-px bg-gray-700"></div>
          
          {/* Menu Desktop */}
          <ul className="flex gap-8">
            {navItems.map((section) => (
              <li key={section}>
                <button
                  onClick={() => onNavigate(section)}
                  className={`text-lg capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            YD
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-4 pt-4 pb-2">
                {navItems.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleNavigate(section)}
                      className={`text-lg capitalize transition-colors hover:text-blue-400 w-full text-left ${
                        activeSection === section ? 'text-blue-400' : 'text-gray-300'
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;