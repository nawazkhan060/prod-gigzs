import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, Users, Globe } from 'lucide-react';

const slides = [
  {
    title: "AI-Powered Matching",
    description: "Find the perfect projects with our advanced AI algorithms",
    icon: <Brain size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.1) 0%, rgba(0, 77, 51, 0.1) 100%)"
  },
  {
    title: "Secure Payments",
    description: "Blockchain-powered escrow system for safe transactions",
    icon: <Shield size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.1) 0%, rgba(0, 77, 51, 0.1) 100%)"
  },
  {
    title: "Smart Collaboration",
    description: "Work seamlessly with our intelligent project management tools",
    icon: <Users size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.1) 0%, rgba(0, 77, 51, 0.1) 100%)"
  },
  {
    title: "Global Network",
    description: "Connect with top talent and clients worldwide",
    icon: <Globe size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.1) 0%, rgba(0, 77, 51, 0.1) 100%)"
  }
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '300px',
      overflow: 'hidden',
      marginBottom: '3rem',
      maxWidth: '100%',
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1rem',
          }}
        >
          <motion.div
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '100%',
              background: slides[currentSlide].gradient,
              padding: '2rem',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 112, 74, 0.1)',
            }}
          >
            <motion.div
              style={{
                flex: 1,
                padding: '2rem',
              }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  color: 'white',
                }}
              >
                {slides[currentSlide].icon}
              </motion.div>
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{
                  color: 'white',
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                }}
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontFamily: 'Poppins',
                  lineHeight: 1.6,
                }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
            
            <motion.div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <motion.div
                  style={{
                    color: 'white',
                  }}
                >
                  {slides[currentSlide].icon}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AutoSlider; 