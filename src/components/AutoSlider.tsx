import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, Users, Globe } from 'lucide-react';

const slides = [
  {
    title: "AI-Powered Matching",
    description: "Find the perfect projects with our advanced AI algorithms",
    icon: <Brain size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.15) 0%, rgba(0, 77, 51, 0.15) 100%)"
  },
  {
    title: "Secure Payments",
    description: "Blockchain-powered escrow system for safe transactions",
    icon: <Shield size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.15) 0%, rgba(0, 77, 51, 0.15) 100%)"
  },
  {
    title: "Smart Collaboration",
    description: "Work seamlessly with our intelligent project management tools",
    icon: <Users size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.15) 0%, rgba(0, 77, 51, 0.15) 100%)"
  },
  {
    title: "Global Network",
    description: "Connect with top talent and clients worldwide",
    icon: <Globe size={48} />,
    gradient: "linear-gradient(135deg, rgba(0, 112, 74, 0.15) 0%, rgba(0, 77, 51, 0.15) 100%)"
  }
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto 3rem',
      position: 'relative',
      padding: '0 1rem',
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            height: '100%',
            background: slides[currentSlide].gradient,
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            borderRadius: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            gap: 'clamp(1rem, 3vw, 2rem)',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          }}
        >
          <motion.div
            style={{
              flex: 1,
              padding: 'clamp(1rem, 2vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1rem',
                borderRadius: '1rem',
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
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                marginBottom: '1rem',
                fontFamily: 'Poppins',
                fontWeight: '600',
                textAlign: 'center',
                width: '100%',
              }}
            >
              {slides[currentSlide].title}
            </motion.h3>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontFamily: 'Poppins',
                lineHeight: 1.6,
                maxWidth: '36rem',
                textAlign: 'center',
                margin: '0 auto',
              }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1.5rem',
      }}>
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              height: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider; 