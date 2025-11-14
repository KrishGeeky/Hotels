import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show welcome screen only once per session
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setIsVisible(true);
    }
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl z-[999]"
            onClick={handleContinue}
          />
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2 
              }}
              className="relative max-w-3xl w-full pointer-events-auto"
            >
              {/* Animated background elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-3xl"
              />
              
              <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Top accent bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                />

                <div className="p-12 md:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center space-y-8"
                  >
                    {/* Animated icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.7, 
                        duration: 0.8,
                        type: "spring",
                        bounce: 0.5
                      }}
                      className="relative inline-block"
                    >
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"
                      />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                      >
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
                          Hey, Welcome to
                        </h2>
                        <motion.h2
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1, duration: 0.6 }}
                          className="text-5xl md:text-6xl font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
                        >
                          Reddy Hotels
                        </motion.h2>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
                      >
                        Thank you for choosing us! We're delighted to have you here. 
                        Experience luxury hospitality at its finest across Texas.
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      className="pt-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={handleContinue}
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-8 text-lg font-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Explore Our Hotels
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-block ml-3"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </Button>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.6 }}
                        className="text-sm text-gray-400 mt-4 font-light"
                      >
                        Click anywhere to continue
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
