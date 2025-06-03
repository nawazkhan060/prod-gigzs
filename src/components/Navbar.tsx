import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ];

  const handleLogin = () => {
    window.location.href = 'https://app.gigzs.com';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem',
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <motion.a
          href="#"
          style={{
            fontFamily: 'Poppins',
            fontSize: '2rem',
            color: isScrolled ? '#00704a' : 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          whileHover={{ scale: 1.05 }}
        >
          gigzs
        </motion.a>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              style={{
                color: isScrolled ? '#00704a' : 'white',
                textDecoration: 'none',
                fontFamily: 'Poppins',
                fontWeight: 500,
                position: 'relative',
              }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: isScrolled ? '#00704a' : 'white',
                  scale: 0,
                }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: isScrolled ? '#00704a' : 'white',
                border: `2px solid ${isScrolled ? '#00704a' : 'white'}`,
                borderRadius: '2rem',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <LogIn size={18} />
              Login
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: isScrolled ? '#00704a' : 'white',
            padding: '0.5rem',
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                style={{
                  color: '#00704a',
                  textDecoration: 'none',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  padding: '0.5rem 0',
                }}
                whileHover={{ x: 10 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogin}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#00704a',
                  border: '2px solid #00704a',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <LogIn size={18} />
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;