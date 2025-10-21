import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef, memo } from "react";
import { X, Send, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Componente immagine memoizzato per performance
const ProfileImage = memo(() => (
  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
    <img 
      src="/ya_cv.jpg" 
      alt="Yanik Dimitrov"
      loading="lazy"
      width="48"
      height="48"
      className="w-full h-full object-cover object-[50%_45%]"
      style={{ 
        imageRendering: 'high-quality',
        WebkitBackfaceVisibility: 'hidden',
      }}
    />
  </div>
));

ProfileImage.displayName = 'ProfileImage';

function WhatsAppWidget() {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState("");
  const [showScrollUp, setShowScrollUp] = useState(false);
  const textareaRef = useRef(null);

  const phoneNumber = "393755588385";

  const toggleWidget = useCallback(() => {
    setOpened((prev) => {
      // Focus sulla textarea quando si apre
      if (!prev) {
        setTimeout(() => textareaRef.current?.focus(), 100);
      }
      return !prev;
    });
  }, []);

  // Gestione body scroll quando widget è aperto
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [opened]);

  // Gestione scroll e show/hide scroll-up button
  useEffect(() => {
    if (opened) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > 300) {
            setShowScrollUp(currentScrollY > lastScrollY);
          } else {
            setShowScrollUp(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opened]);

  // Chiudi widget con ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && opened) {
        setOpened(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [opened]);

  const sendToWhatsApp = useCallback(() => {
    const baseMessage = message.trim() || "Ciao, vorrei ricevere informazioni!";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
    setOpened(false);
  }, [message, phoneNumber]);

  // Gestione Enter per inviare (Ctrl+Enter per newline)
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault();
      sendToWhatsApp();
    }
  }, [sendToWhatsApp]);

  const scrollToTop = useCallback(() => {
    const startPosition = window.scrollY;
    const distance = startPosition;
    const duration = 1000;
    let start = null;

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      const newPosition = startPosition - distance * easeProgress;

      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return (
    <>
      {/* Effetto glow dietro il bottone */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-3 right-3 md:bottom-5 md:right-5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-400/5 to-green-500/5 blur-2xl z-[9998] pointer-events-none"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Bottone WhatsApp / Freccia */}
      <AnimatePresence>
        {!opened && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={showScrollUp ? scrollToTop : toggleWidget}
            className={`fixed bottom-3 right-3 md:bottom-5 md:right-5 
              w-11 h-11 md:w-14 md:h-14
              rounded-full flex items-center justify-center shadow-lg z-[9999] 
              backdrop-blur-md border transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              ${
                showScrollUp
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 focus-visible:ring-white'
                  : 'bg-[#25D366]/80 hover:bg-[#25D366]/90 text-white border-[#128C7E]/20 focus-visible:ring-[#25D366]'
              }`}
            aria-label={showScrollUp ? 'Torna in cima alla pagina' : 'Apri chat WhatsApp'}
          >
            {showScrollUp ? (
              <ArrowUp size={20} strokeWidth={2.5} className="opacity-90" aria-hidden="true" />
            ) : (
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                aria-hidden="true"
              >
                <FaWhatsapp size={24} />
              </motion.div>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat WhatsApp */}
      <AnimatePresence>
        {opened && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleWidget}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              aria-hidden="true"
            />

            {/* Finestra chat */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-16 right-3 md:bottom-20 md:right-5 w-[calc(100vw-1.5rem)] max-w-sm md:w-96 bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 z-[9999] overflow-hidden"
              role="dialog"
              aria-labelledby="whatsapp-title"
              aria-modal="true"
            >
              {/* Header */}
              <div className="bg-[#25D366] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ProfileImage />
                  <div>
                    <h3 id="whatsapp-title" className="font-bold text-white">
                      Yanik Dimitrov
                    </h3>
                    <p className="text-sm text-green-100">
                      Di solito risponde subito
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleWidget}
                  className="text-white hover:bg-[#20b85c] p-1 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Chiudi chat WhatsApp"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              {/* Corpo chat */}
              <div className="p-4 space-y-4">
                <div 
                  className="bg-gray-700/50 p-3 rounded-lg"
                  role="alert"
                  aria-live="polite"
                >
                  <p className="text-gray-300 text-sm">
                    👋 Ciao! Sono disponibile per qualsiasi domanda o informazione sul mio lavoro. Sarà un piacere rispondere!
                  </p>
                </div>

                <label htmlFor="whatsapp-message" className="sr-only">
                  Scrivi il tuo messaggio
                </label>
                <textarea
                  id="whatsapp-message"
                  ref={textareaRef}
                  placeholder="Scrivi il tuo messaggio..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
                  rows={4}
                  aria-describedby="message-hint"
                />
                <p id="message-hint" className="text-xs text-gray-500 -mt-2">
                  Premi Invio per inviare, Shift+Invio per andare a capo
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendToWhatsApp}
                  disabled={!message.trim() && message !== ""}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                  aria-label="Invia messaggio su WhatsApp"
                >
                  <Send size={20} aria-hidden="true" />
                  Invia su WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default WhatsAppWidget;