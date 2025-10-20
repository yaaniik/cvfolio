import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Send, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppWidget() {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState("");
  const [showScrollUp, setShowScrollUp] = useState(false);

  const phoneNumber = "393755588385";

  const toggleWidget = () => setOpened((o) => !o);

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [opened]);

  // Mostra freccia quando si scorre in basso
  useEffect(() => {
    if (opened) return;
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(window.scrollY > lastScrollY);
      } else {
        setShowScrollUp(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opened]);

  const sendToWhatsApp = () => {
    const baseMessage = message.trim() || "Ciao, vorrei ricevere informazioni!";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      baseMessage
    )}`;
    window.open(url, "_blank");
    setMessage("");
    setOpened(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Effetto glow dietro il bottone - PIÙ LEGGERO */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-3 right-3 md:bottom-5 md:right-5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-400/5 to-green-500/5 blur-2xl z-[9998] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Bottone WhatsApp / Freccia - PIÙ TRASPARENTE */}
      <AnimatePresence>
        {!opened && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={showScrollUp ? scrollToTop : toggleWidget}
            className={`fixed bottom-3 right-3 md:bottom-5 md:right-5 
              w-11 h-11 md:w-14 md:h-14
              rounded-full flex items-center justify-center shadow-lg z-[9999] 
              backdrop-blur-md border transition-all
              ${
                showScrollUp
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  : 'bg-[#25D366]/80 hover:bg-[#25D366]/90 text-white border-[#128C7E]/20'
              }`}
            aria-label={showScrollUp ? 'Scroll to top' : 'Open WhatsApp chat'}
          >
            {showScrollUp ? (
              <ArrowUp size={20} strokeWidth={2.5} className="opacity-90" />
            ) : (
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
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
              onClick={toggleWidget}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            />

            {/* Finestra chat */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-16 right-3 md:bottom-20 md:right-5 w-[calc(100vw-1.5rem)] max-w-sm md:w-96 bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 z-[9999] overflow-hidden"
            >
              {/* Header con TUA FOTO */}
              <div className="bg-[#25D366] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                    <img 
                      src="/ya_cv.jpg" 
                      alt="Yanik Dimitrov"
                      loading="eager"
                      className="w-full h-full object-cover object-[50%_45%]"
                      style={{ 
                        imageRendering: 'high-quality',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Yanik Dimitrov</h3>
                    <p className="text-sm text-green-100">
                      Di solito risponde subito
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleWidget}
                  className="text-white hover:bg-[#20b85c] p-1 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Corpo chat */}
              <div className="p-4 space-y-4">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    👋 Ciao! Sono disponibile per qualsiasi domanda o informazione sul mio lavoro. Sarà un piacere rispondere!
                  </p>
                </div>

                <textarea
                  placeholder="Scrivi il tuo messaggio..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
                  rows={4}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendToWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={20} />
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