import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedCard from './components/AnimatedCard';
import AutoSlider from './components/AutoSlider';
import Contact from './components/Contact';
import './App.css';

const Home = () => {
  const sectionStyle = {
    position: 'relative' as const,
    padding: '5rem 1rem',
    backgroundColor: 'white',
    maxWidth: '100%',
    overflow: 'hidden',
  };

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Navbar />

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1rem 1rem',
        background: 'linear-gradient(135deg, #006b42 0%, #003d2a 100%)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '-3rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            paddingBottom: '1rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '2rem',
              marginBottom: '2.5rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ 
              color: 'white', 
              fontFamily: 'Poppins', 
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: '500',
              letterSpacing: '0.5px',
            }}>
              The Future of Freelancing
            </span>
          </motion.div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '2rem',
            fontFamily: 'Poppins',
            lineHeight: 1.2,
            padding: '0 1rem',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
            AI-Powered Freelance Excellence
          </h1>
          <AutoSlider />
          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '42rem',
            margin: '0 auto 3rem',
            fontFamily: 'Poppins',
            lineHeight: 1.6,
            padding: '0 1rem',
            fontWeight: '300',
          }}>
            Where artificial intelligence meets human creativity. Connect with top talent and innovative projects.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '100%',
            padding: '0 1rem',
            position: 'relative',
            marginBottom: '3rem',
          }}>
            <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: 'clamp(0.875rem, 2.2vw, 1.25rem) clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                  backgroundColor: 'white',
                  color: '#00704a',
                  border: 'none',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  minWidth: 'clamp(180px, 35vw, 220px)',
                  transition: 'all 0.3s ease',
                  width: '100%' // Ensure button takes full width of Link
                }}
              >
                Get Started
              </motion.button>
            </a>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: 'clamp(0.875rem, 2.2vw, 1.25rem) clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  minWidth: 'clamp(180px, 35vw, 220px)',
                  transition: 'all 0.3s ease',
                  width: '100%' // Ensure button takes full width of Link
                }}
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section id="features" style={{
        ...sectionStyle,
        padding: 'clamp(2rem, 5vw, 4rem) 1rem',
        marginTop: '-3rem',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          padding: '0 1rem',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              color: '#00704a',
              marginBottom: '1rem',
              textAlign: 'center',
              fontFamily: 'Poppins',
            }}>
              Why Choose GIGZS?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#666',
              textAlign: 'center',
              maxWidth: '48rem',
              margin: '0 auto clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Poppins',
            }}>
              Experience the perfect blend of AI technology and human expertise
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'AI-Powered Matching',
                content: 'Our advanced AI algorithms match you with the perfect projects and talent based on skills, experience, and preferences.',
                icon: '🤖'
              },
              {
                title: 'Smart Project Management',
                content: 'Automated workflows and intelligent task tracking to ensure smooth project delivery and client satisfaction.',
                icon: '📋'
              },
              {
                title: 'Secure Payments',
                content: 'Blockchain-powered escrow system ensures secure and transparent transactions for all parties involved.',
                icon: '🔒'
              }
            ].map((feature, index) => (
              <AnimatedCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
                index={index}
                section="features"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{
        ...sectionStyle,
        backgroundColor: '#f8f9fa',
        padding: 'clamp(2rem, 5vw, 4rem) 1rem',
        marginTop: '-3rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          padding: '0 1rem',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              color: '#00704a',
              marginBottom: '1rem',
              textAlign: 'center',
              fontFamily: 'Poppins',
            }}>
              How It Works
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#666',
              textAlign: 'center',
              maxWidth: '48rem',
              margin: '0 auto clamp(2rem, 4vw, 4rem)',
              fontFamily: 'Poppins',
            }}>
              Get started in minutes with our simple and efficient process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                content: 'Set up your professional profile with AI-enhanced skill verification and portfolio showcase.',
                icon: '👤'
              },
              {
                step: '02',
                title: 'Get Matched',
                content: 'Our AI analyzes your profile and matches you with the most suitable projects and clients.',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Start Working',
                content: 'Begin your projects with our smart collaboration tools and automated workflow systems.',
                icon: '💼'
              },
              {
                step: '04',
                title: 'Get Paid',
                content: 'Receive secure payments through our blockchain-powered escrow system.',
                icon: '💰'
              }
            ].map((step, index) => (
              <AnimatedCard
                key={index}
                icon={step.icon}
                title={step.title}
                content={step.content}
                step={step.step}
                index={index}
                section="how-it-works"
              />
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginTop: 'clamp(2rem, 4vw, 4rem)',
            padding: 'clamp(1rem, 3vw, 2rem)',
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                color: '#00704a',
                marginBottom: '1rem',
                fontFamily: 'Poppins',
                fontWeight: '500',
              }}>Why Choose Us?</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                {[
                  'AI-powered matching for perfect project fits',
                  'Secure payment system with blockchain technology',
                  '24/7 customer support',
                  'Advanced project management tools',
                  'Skill verification and certification',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#666',
                      fontFamily: 'Poppins',
                    }}
                  >
                    <span style={{ color: '#00704a' }}>✓</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                color: '#00704a',
                marginBottom: '1rem',
                fontFamily: 'Poppins',
                fontWeight: '500',
              }}>Ready to Get Started?</h3>
              <p style={{
                color: '#666',
                marginBottom: '1.5rem',
                fontFamily: 'Poppins',
                lineHeight: 1.6,
              }}>
                Join thousands of freelancers and clients who are already using GIGZS to create amazing projects together.
              </p>
              <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#00704a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2rem',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    width: '100%',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Join Now
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer style={{
        backgroundColor: 'white',
        padding: 'clamp(2rem, 5vw, 4rem) 1rem 1rem',
        color: '#272727',
        fontFamily: 'Poppins',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 112, 74, 0.1)',
        marginTop: '-3rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          position: 'relative',
          zIndex: 1,
          padding: '0 1rem',
        }}>
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1.5rem',
              color: '#00704a',
              fontFamily: 'Poppins',
            }}>Join our Newsletter</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0, 112, 74, 0.2)',
                  backgroundColor: 'transparent',
                  color: '#272727',
                  fontFamily: 'Poppins',
                  transition: 'all 0.3s ease',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#00704a',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  transition: 'all 0.3s ease',
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1.5rem',
              color: '#00704a',
              fontFamily: 'Poppins',
            }}>Quick Links</h3>
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {[
                { label: 'About Us', href: '#' },
                { label: 'Features', href: '#features' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Contact', href: '#' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  style={{ margin: 0 }}
                >
                  <a 
                    href={link.href}
                    className="footer-link"
                    style={{ 
                      color: '#272727',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      fontSize: '0.95rem',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1.5rem',
              color: '#00704a',
              fontFamily: 'Poppins',
            }}>Location</h3>
            <address style={{ 
              fontStyle: 'normal', 
              color: '#272727', 
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '0.95rem',
            }}>
              <span>House no 108 Pachkedhi Gandli</span>
              <span>Pachkhedi Kuhi,</span>
              <span>Nagpur, Maharashtra</span>
              <span>PIN: 441210</span>
            </address>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1.5rem',
              color: '#00704a',
              fontFamily: 'Poppins',
            }}>Contact</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <motion.a 
                href="mailto:info@GIGZS.com"
                whileHover={{ x: 5 }}
                className="contact-link"
                style={{ 
                  color: '#272727', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  fontSize: '0.95rem',
                }}
              >
                info@GIGZS.com
              </motion.a>
            </div>
          </div>
        </div>
        <div style={{
          maxWidth: '80rem',
          margin: 'clamp(1rem, 3vw, 2rem) auto 0',
          paddingTop: 'clamp(1rem, 2vw, 1.5rem)',
          borderTop: '1px solid rgba(0, 112, 74, 0.1)',
          textAlign: 'center',
          color: '#666',
          fontFamily: 'Poppins',
        }}>
          <p style={{ 
            margin: 0,
            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
            opacity: 0.8,
          }}>
            © {new Date().getFullYear()} <a href="https://GIGZS.com" style={{ color: '#00704a', textDecoration: 'none' }}>GIGZS</a>. All rights reserved. Designed by <a href="https://uimitra.com" style={{ color: '#00704a', textDecoration: 'none' }}>uimitra</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #00704a 0%, #004d33 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            textAlign: 'center',
          }}
        >
          <motion.h1
            style={{
              fontFamily: 'Poppins',
              fontSize: '5rem',
              color: 'white',
              marginBottom: '1rem',
            }}
          >
            GIGZS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: 'white',
              fontSize: '1.2rem',
              fontFamily: 'Poppins',
            }}
          >
            AI-Powered Freelance Platform
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;