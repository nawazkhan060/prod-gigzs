import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('You will be notified when we launch!');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://raw.githubusercontent.com/GIGZs-Marketplace/brand-images/1684edf3da61c756551e28a9bdfb157c9243bfa2/gigzs-logo.svg" 
              alt="Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10" 
            />
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full py-16 sm:py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary mb-8 sm:mb-12 lg:mb-16 mt-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs sm:text-sm font-medium">
                Launching April 2025
              </span>
            </motion.div>

            <h1 className="font-onset text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900">
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Redefining
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Freelance
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Excellence
              </motion.span>
            </h1>

            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 leading-relaxed max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A curated platform connecting exceptional talent with visionary projects.
            </motion.p>

            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-md mx-auto relative px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-200 focus:border-primary outline-none text-gray-800 shadow-sm text-base"
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-white font-medium rounded-full bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base w-full sm:w-auto"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="py-4 sm:py-6 border-t border-gray-100 text-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="container mx-auto px-4">
          <p className="text-sm sm:text-base text-gray-600">© 2025 TRONOCITY LABS</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;