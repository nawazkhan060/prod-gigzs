import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/';
  const isHeroSection = isHomePage && window.scrollY < window.innerHeight;

  const textColor = isContactPage || isScrolled ? '#00704a' : 'white';
  const bgColor = isContactPage || isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent';
  const buttonBgColor = isContactPage || isScrolled ? '#00704a' : 'white';
  const buttonTextColor = isContactPage || isScrolled ? 'white' : '#00704a';

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      const section = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(section);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Contact', href: '/contact' },
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
        backgroundColor: bgColor,
        backdropFilter: isContactPage || isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isContactPage || isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link
          to="/"
          style={{
            fontFamily: 'Poppins',
            fontSize: '2rem',
            color: textColor,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.3s ease-in-out',
          }}
        >
          gigzs
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{
                position: 'relative',
              }}
            >
              {item.href.startsWith('/#') ? (
                <button
                  onClick={() => handleNavigation(item.href)}
                  style={{
                    color: textColor,
                    textDecoration: 'none',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'color 0.3s ease-in-out',
                    display: 'block',
                    padding: '0.5rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: textColor,
                      transform: location.hash === item.href.substring(1) ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </button>
              ) : (
                <Link
                  to={item.href}
                  style={{
                    color: textColor,
                    textDecoration: 'none',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'color 0.3s ease-in-out',
                    display: 'block',
                    padding: '0.5rem 0',
                  }}
                >
                  {item.label}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: textColor,
                      transform: location.pathname === item.href ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </Link>
              )}
            </div>
          ))}
          <button
            onClick={handleLogin}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
              border: 'none',
              borderRadius: '2rem',
              cursor: 'pointer',
              fontFamily: 'Poppins',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <LogIn size={20} />
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: textColor,
            transition: 'color 0.3s ease-in-out',
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
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: isMobile ? 'block' : 'none',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem',
            }}>
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith('/#') ? (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavigation(item.href);
                      }}
                      style={{
                        color: '#00704a',
                        textDecoration: 'none',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        padding: '0.5rem 0',
                        borderBottom: '1px solid rgba(0, 112, 74, 0.1)',
                        display: 'block',
                        transition: 'color 0.3s ease-in-out',
                        background: 'none',
                        border: 'none',
                        width: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        color: '#00704a',
                        textDecoration: 'none',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        padding: '0.5rem 0',
                        borderBottom: '1px solid rgba(0, 112, 74, 0.1)',
                        display: 'block',
                        transition: 'color 0.3s ease-in-out',
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogin();
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#00704a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <LogIn size={20} />
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;