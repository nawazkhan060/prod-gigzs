import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Sparkles, Users } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Modal from './components/Modal';
import Threads from './components/Threads';
import ImageTrail from './components/ImageTrail';
import TermsAndConditions from './policies/TermsAndConditions';
import PrivacyPolicy from './policies/PrivacyPolicy';
import CancellationRefund from './policies/CancellationPolicy';
import ShippingPolicy from './policies/ShippingPolicy';
import DrizzPage from './pages/DrizzPage';
import './App.css';
import './Responsive.css';

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Gigzs helped me land my first freelance project within a week of signing up. Perfect for early-stage talent!",
      author: "Shivansh Verma",
      role: "Frontend Developer",
      rating: 5
    },
    {
      text: "As a bootstrap founder, finding designers was tough until I tried Gigzs. We closed our first hire in days.",
      author: "Yatharth Chauhan",
      role: "Co-founder, EdTech Beta",
      rating: 5
    },
    {
      text: "Within two months we've already worked with three clients through Gigzs. The community is small but super supportive.",
      author: "Aarya Trifale",
      role: "Product Designer",
      rating: 5
    },
    {
      text: "I posted one gig and got quality applications the same day. Can't wait to see the platform grow.",
      author: "Kartik Agarwal",
      role: "Startup Recruiter",
      rating: 5
    },
    {
      text: "Only been using Gigzs for a few weeks but it's already saved me hours in sourcing talent.",
      author: "Meera Khanna",
      role: "Operations Lead",
      rating: 5
    },
    {
      text: "Still early days but the user experience is top-notch. Excited to follow the journey!",
      author: "Akshata Desai",
      role: "Full-Stack Engineer",
      rating: 5
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2500); // Change every 2.5 seconds for faster rotation
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div style={{
      position: 'relative',
      height: '300px',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
        height: '100%',
      }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            style={{
              minWidth: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 2rem',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px',
              textAlign: 'center',
              border: '1px solid #e0e0e0',
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#ff6b6b',
                marginBottom: '1rem',
                fontFamily: 'Georgia, serif',
              }}>
                "
              </div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '1.5rem',
                fontFamily: 'Poppins',
                fontStyle: 'italic',
              }}>
                {testimonial.text}
              </p>
              <div>
                <div style={{
                  fontWeight: '600',
                  color: '#272727',
                  marginBottom: '0.25rem',
                  fontFamily: 'Poppins',
                  fontSize: '1rem',
                }}>
                  {testimonial.author}
                </div>
                <div style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontFamily: 'Poppins',
                }}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
      }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentIndex === index ? '#00704a' : '#ccc',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid #e0e0e0',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          color: '#272727',
        }}
      >
        ←
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid #e0e0e0',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          color: '#272727',
        }}
      >
        →
      </button>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalTitle('');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Navbar />

      {/* Hero Section with Threads Animation */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: '#00704a',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Threads Animation Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.8,
          zIndex: 1,
        }}>
          <Threads
            color={[0.9, 0.95, 1]}  // Light blue-gray color for better visibility
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '0.1em',
            }}
          >
            gigzs
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{
              marginTop: '2rem',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '300',
            }}
          >
            AI-Powered Freelance Platform
           
          </motion.div>
          
          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            
            
          </motion.div>
        </div>
      </section>

      {/* Find What's Next Section with ImageTrail Job Categories */}
      <section id="find-whats-next" style={{
        padding: '4rem 2rem',
        backgroundColor: '#f7f7f7',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Container for split layout */}
        <div className="find-grid" style={{
           maxWidth: '1200px',
           width: '100%',
           display: 'grid',
           gap: '4rem',
           alignItems: 'center',
           position: 'relative',
           zIndex: 10,
         }}>
          {/* Left Side - Current Content */}
          <div className="main-heading" style={{
            textAlign: 'left',
            position: 'relative',
          }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2.8rem)', // Reduced font size
              fontWeight: '500',
              color: '#272727',
              marginBottom: '1.5rem',
              fontFamily: 'Poppins',
              position: 'relative',
              display: 'inline-block',
              lineHeight: 1.1,
              textAlign: 'center',
              marginLeft: '1rem',
              marginRight: '1rem',
              padding: '0 1rem',
            }}
          >
            Where freelancers and clients<br />
            <span style={{ color: '#00704a', fontWeight: '800' }}>connect</span>
            
            {/* Hover Popup with Join Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ opacity: 1, scale: 1, y: 0 }}
              style={{
                position: 'absolute',
                top: '110%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#00704a',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 25px rgba(0, 112, 74, 0.4)',
                zIndex: 30,
                cursor: 'pointer',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
              onClick={() => window.open('https://app.gigzs.com', '_blank')}
            >
              Join Now →
            </motion.div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#666',
              maxWidth: '500px',
              margin: '0 auto 2rem',
              fontFamily: 'Poppins',
              lineHeight: 1.6,
            }}
          >
            Find what's next
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.8rem 1.5rem',
                  fontSize: '1rem',
                  backgroundColor: '#00704a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.8rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  minWidth: '180px',
                  transition: 'all 0.3s ease',
                }}
              >
                Find your next hire
              </motion.button>
            </a>
            <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.8rem 1.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'transparent',
                  color: '#00704a',
                  border: '2px solid #00704a',
                  borderRadius: '0.8rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  minWidth: '180px',
                  transition: 'all 0.3s ease',
                }}
              >
                Find your next job
              </motion.button>
            </a>
          </motion.div>
          </div>
          
          {/* Right Side - Hover Instruction Box */}
          <div style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* ImageTrail for Job Categories - Right side only */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 11, // Bring ImageTrail to the front
            }}>
              <ImageTrail
                items={[
                  'Full Stack Developer',
                  'Frontend Developer', 
                  'Backend Developer',
                  'Mobile App Developer',
                  'UI/UX Designer',
                  'Data Scientist',
                  'DevOps Engineer',
                  'Machine Learning Engineer',
                  'Product Manager',
                  'Graphic Designer',
                  'Software Architect',
                  'QA Engineer',
                  'Blockchain Developer',
                  'Cybersecurity Specialist',
                  'Cloud Engineer',
                  'Game Developer',
                  'Technical Writer',
                  'Digital Marketer',
                  'SEO Specialist',
                  'Content Creator'
                ]}
                variant={1}
              />
            </div>
            
            {/* Hover Instruction Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'relative',
                zIndex: 10, // Keep instruction box behind the trail
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle background
                backdropFilter: 'blur(2px)',
                border: '2px dashed #00704a',
                borderRadius: '1.5rem',
                padding: '3rem 2rem',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0, 112, 74, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              whileHover={{
                scale: 1.02,
                borderColor: '#00704a',
                backgroundColor: 'rgba(255, 255, 255, 0.35)',
                boxShadow: '0 12px 40px rgba(0, 112, 74, 0.15)',
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                }}
              >
                ✨
              </motion.div>
              
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#00704a',
                marginBottom: '0.5rem',
                fontFamily: 'Poppins',
              }}>
                Hover & See the Magic!
              </h3>
              
              <p style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                color: '#666',
                fontFamily: 'Poppins',
                lineHeight: 1.5,
                margin: 0,
              }}>
                Move your mouse around this area to discover job categories
              </p>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#00704a',
                  color: 'white',
                  borderRadius: '2rem',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  fontFamily: 'Poppins',
                }}
              >
                Try it now!
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Features Section */}
      <section id="features" style={{
        backgroundColor: '#00704a',
        color: 'white',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="features-grid" style={{
           maxWidth: '1200px',
           margin: '0 auto',
           display: 'grid',
           gap: '3rem',
           textAlign: 'center',
           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
         }}>
          {[
            {
              icon: <Sparkles size={40} />,
              title: 'Smart Matching',
              desc: 'AI-powered algorithm connects the right freelancers with the right gigs instantly.'
            },
            {
              icon: <ShieldCheck size={40} />,
              title: 'Secure Payments',
              desc: 'Safe escrow and milestone releases keep both clients and talent protected.'
            },
            {
              icon: <MessageCircle size={40} />,
              title: 'Real-time Chat',
              desc: 'Built-in messaging and file-sharing so collaboration stays in one place.'
            },
            {
              icon: <Users size={40} />,
              title: 'Verified Talent',
              desc: 'Every professional is manually screened for skills, experience, and reliability.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                backgroundColor: 'white',
                color: '#272727',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{ color: '#00704a' }}>{feature.icon}</div>
              <h3 style={{ fontFamily: 'Poppins', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                {feature.title}
              </h3>
              <p style={{ fontFamily: 'Poppins', fontSize: '0.95rem', lineHeight: 1.4, margin: 0, textAlign: 'center' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Freelancers and Clients Connect Section */}
      <section className="section-padding" style={{
         padding: '8rem 2rem',
        backgroundColor: '#f7f7f7',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginBottom: '6rem',
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              color: '#272727',
              marginBottom: '1.5rem',
              fontFamily: 'Poppins',
            }}>
              Connect. Create. Succeed.
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'Poppins',
              lineHeight: 1.6,
            }}>
              Join thousands of freelancers and companies building the future together
            </p>
          </motion.div>

          <div className="connect-grid" style={{
             display: 'grid',
             gap: '6rem',
             alignItems: 'start',
           }}>
            {/* Why Freelancers Love Us */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '2rem',
                padding: '3rem',
                textAlign: 'center',
                marginBottom: '3rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 112, 74, 0.1)',
              }}>
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '1.5rem',
                }}>💼</div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#272727',
                  marginBottom: '1rem',
                  fontFamily: 'Poppins',
                }}>Join 50,000+ Freelancers</h3>
                <p style={{
                  color: '#666',
                  fontFamily: 'Poppins',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}>Connect with top clients and work on exciting projects that match your skills and interests.</p>
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: '600',
                color: '#272727',
                marginBottom: '2rem',
                fontFamily: 'Poppins',
              }}>
                Why freelancers love us
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}>
                {[
                  'AI-powered project matching',
                  'Transparent pricing and payments',
                  'Skill verification system',
                  'Global client network',
                  '24/7 support team'
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
                      gap: '1rem',
                      color: '#666',
                      fontFamily: 'Poppins',
                      fontSize: '1.2rem',
                      padding: '1rem',
                      backgroundColor: 'white',
                      borderRadius: '1rem',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <span style={{ 
                      color: 'white', 
                      fontSize: '1.2rem',
                      backgroundColor: '#00704a',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: '#00704a',
                      color: 'white',
                      border: 'none',
                      borderRadius: '1rem',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                    }}
                  >
                    Start Freelancing
                  </motion.button>
                </a>
                <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: 'transparent',
                      color: '#00704a',
                      border: '2px solid #00704a',
                      borderRadius: '1rem',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                    }}
                  >
                    Learn More
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Why Clients Love Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '2rem',
                padding: '3rem',
                textAlign: 'center',
                marginBottom: '3rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 112, 74, 0.1)',
              }}>
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '1.5rem',
                }}>🏢</div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#272727',
                  marginBottom: '1rem',
                  fontFamily: 'Poppins',
                }}>Trusted by 10,000+ Companies</h3>
                <p style={{
                  color: '#666',
                  fontFamily: 'Poppins',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}>From startups to enterprises, companies trust GIGZS to find the best talent for their projects.</p>
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: '600',
                color: '#272727',
                marginBottom: '2rem',
                fontFamily: 'Poppins',
              }}>
                Why clients love us
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}>
                {[
                  'Access to pre-vetted talent',
                  'AI-powered candidate matching',
                  'Secure payment protection',
                  'Project management tools',
                  'Quality assurance guarantee'
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
                      gap: '1rem',
                      color: '#666',
                      fontFamily: 'Poppins',
                      fontSize: '1.2rem',
                      padding: '1rem',
                      backgroundColor: 'white',
                      borderRadius: '1rem',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <span style={{ 
                      color: 'white', 
                      fontSize: '1.2rem',
                      backgroundColor: '#00704a',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: '#00704a',
                      color: 'white',
                      border: 'none',
                      borderRadius: '1rem',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                    }}
                  >
                    Hire Talent
                  </motion.button>
                </a>
                <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: 'transparent',
                      color: '#00704a',
                      border: '2px solid #00704a',
                      borderRadius: '1rem',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                    }}
                  >
                    Learn More
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>


      </section>

 {/* Meet GIGZS:AI Section */}
 <section id="how-it-works" style={{
        backgroundColor: '#00704a',
        color: 'white',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70vh',
        }}>
        <div className="ai-grid" style={{
           maxWidth: '1200px',
           margin: '0 auto',
           display: 'grid',
           gap: '4rem',
           alignItems: 'center',
         }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '1rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1.5rem',
              }}
            >
              Early Access
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                marginBottom: '1rem',
                fontFamily: 'Poppins',
                lineHeight: 1.2,
              }}
            >
              Meet GIGZS:AI
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '600',
                marginBottom: '1.5rem',
                fontFamily: 'Poppins',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              GIGZS's AI recruiter.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Poppins',
              }}
            >
              Here to help with all the logistics. GIGZS:AI finds best fit candidates, vets for interest, and schedules your favorites on your calendar — all in a matter of days.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Poppins',
              }}
            >
              It's that easy.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              
              <a href="/drizz" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '0.5rem',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  Schedule a Demo
                </motion.button>
              </a>
            </div>
          </div>
          
          {/* AI Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'relative',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Chat Interface */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid #f0f0f0',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#00704a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0.75rem',
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold' }}>AI</span>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#272727' }}>GIGZS:AI</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>AI Recruiter</div>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  backgroundColor: '#f7f7f7',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#272727',
                  fontSize: '0.9rem',
                }}>
                  Send me candidates interested in <span style={{ backgroundColor: '#fff2cc', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' }}>FINTECH</span> with experience in <span style={{ backgroundColor: '#e1f5fe', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' }}>PYTHON</span>
                </div>
                
                <div style={{
                  backgroundColor: '#00704a',
                  color: 'white',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  marginLeft: '2rem',
                }}>
                  Absolutely! Sending you a list of relevant candidates now.
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '0.5rem',
                padding: '1rem',
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.5rem', color: '#272727' }}>Your qualified candidate review list</div>
                {[
                  { name: 'Joshua Moret', status: 'INTERESTED' },
                  { name: 'Naomi Liu', status: 'INTERESTED' },
                  { name: 'Guy Leonardo', status: 'INTERESTED' }
                ].map((candidate, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: index < 2 ? '1px solid #e0e0e0' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: '#00704a',
                        marginRight: '0.5rem',
                      }}></div>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '500', color: '#272727' }}>{candidate.name}</div>
                        <div style={{ fontSize: '0.7rem', color: '#666' }}>Experience in PYTHON</div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: '#00704a',
                      fontWeight: '600',
                      backgroundColor: 'rgba(0, 112, 74, 0.1)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                    }}>
                      {candidate.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Section */}
      

      {/* Testimonials Section - Auto Sliding Carousel */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f7f7f7',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '600',
            color: '#272727',
            marginBottom: '3rem',
            textAlign: 'center',
            fontFamily: 'Poppins',
          }}>
            From our users
          </h2>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#ffffff',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '1rem',
            fontFamily: 'Poppins',
          }}>
            Ready to get started?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            fontFamily: 'Poppins',
            lineHeight: 1.6,
          }}>
            Join thousands of professionals who are already using GIGZS to find their next opportunity or hire top talent.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#00704a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                }}
              >
                Find your next hire
              </motion.button>
            </a>
            <a href="https://app.gigzs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#00704a',
                  border: '2px solid #00704a',
                  borderRadius: '0.5rem',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                }}
              >
                Find your next job
              </motion.button>
            </a>
          </div>
        </motion.div>
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
            {new Date().getFullYear()} <a href="https://GIGZS.com" style={{ color: '#00704a', textDecoration: 'none' }}>GIGZS pvt ltd </a>. All rights reserved.
          </p>
          <p style={{
            margin: 0,
            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
            opacity: 0.8,
            marginTop: '0.5rem',
          }}>
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/terms')} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Terms & Conditions</button>
            <button onClick={() => navigate('/privacy')} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Privacy Policy</button>
            <button onClick={() => navigate('/cancellation')} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Cancellation Policy</button>
            <button onClick={() => navigate('/shipping')} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Shipping Policy</button>
          </div>
        </div>
      </footer>
      <Modal isOpen={!!modalContent} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
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
      <MainLayout />
    </Router>
  );
}

const MainLayout: React.FC = () => {
  const location = useLocation();
  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden', background: location.pathname.startsWith('/drizz') ? '#0b0e23' : '#f7f7f7' }}>
      {!location.pathname.startsWith('/drizz') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drizz" element={<DrizzPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cancellation" element={<CancellationRefund />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
