import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Modal from './components/Modal';
import TermsAndConditions from './policies/TermsAndConditions';
import PrivacyPolicy from './policies/PrivacyPolicy';
import CancellationPolicy from './policies/CancellationPolicy';
import ShippingPolicy from './policies/ShippingPolicy';
import './App.css';

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Half of the offers I give are sourced from GIGZS. It's the best product for anyone looking for startup talent.",
      author: "Priya Sharma",
      role: "Full Stack Developer",
      rating: 5
    },
    {
      text: "I got my tech job on GIGZS 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.",
      author: "Arjun Patel",
      role: "Senior Engineer",
      rating: 5
    },
    {
      text: "I love GIGZS. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
      author: "Sneha Gupta",
      role: "UI/UX Designer",
      rating: 5
    },
    {
      text: "The AI matching on GIGZS is incredibly accurate. I've found my dream team faster than ever before.",
      author: "Rohit Kumar",
      role: "CTO, TechStart",
      rating: 5
    },
    {
      text: "GIGZS transformed my freelance career. The quality of projects and clients is exceptional.",
      author: "Kavya Reddy",
      role: "Data Scientist",
      rating: 5
    },
    {
      text: "Finding quality developers was never this easy. GIGZS made our hiring process seamless.",
      author: "Vikram Singh",
      role: "Product Manager",
      rating: 5
    },
    {
      text: "The platform connects me with amazing opportunities. Best decision for my career growth.",
      author: "Ananya Joshi",
      role: "Frontend Developer",
      rating: 5
    },
    {
      text: "GIGZS helped me scale my team efficiently. The talent pool is incredible.",
      author: "Rajesh Agarwal",
      role: "Founder, InnovateLab",
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

     

      {/* Interactive Find What's Next Section with Floating Job Categories */}
      <section id="find-whats-next" style={{
        padding: '8rem 2rem',
        backgroundColor: '#f7f7f7',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Global Mouse Tracker with Cursor Radius Effect */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // 5cm radius (approximately 189px at 96 DPI)
            const cursorRadius = 189;
            
            // Get text area boundaries for strict collision prevention (1cm = ~38px)
            const textElement = document.querySelector('.main-heading');
            const textRect = textElement?.getBoundingClientRect();
            
            // Update ALL floating categories with proper circular motion and collision prevention
            const categories = document.querySelectorAll('.floating-category');
            const allJobPositions: { x: number; y: number; element: HTMLElement }[] = [];
            
            categories.forEach((category, index) => {
              const element = category as HTMLElement;
              const categoryRect = element.getBoundingClientRect();
              const sectionRect = rect;
              
              // Get original position from data attributes
              let originalX = parseFloat(element.dataset.originalX || '0');
              let originalY = parseFloat(element.dataset.originalY || '0');
              
              // If not set, calculate and store original position
              if (!element.dataset.originalX) {
                originalX = sectionRect.width * parseFloat(element.style.left) / 100;
                originalY = sectionRect.height * parseFloat(element.style.top) / 100;
                element.dataset.originalX = String(originalX);
                element.dataset.originalY = String(originalY);
              }
              
              // STRICT TEXT COLLISION PREVENTION - 1cm (38px) minimum distance
              if (textRect) {
                const oneCm = 38; // 1cm in pixels
                const textLeft = textRect.left - sectionRect.left - oneCm;
                const textRight = textRect.right - sectionRect.left + oneCm;
                const textTop = textRect.top - sectionRect.top - oneCm;
                const textBottom = textRect.bottom - sectionRect.top + oneCm;
                
                // If original position is too close to text, move it away permanently
                if (originalX > textLeft && originalX < textRight && originalY > textTop && originalY < textBottom) {
                  const centerTextX = (textLeft + textRight) / 2;
                  const centerTextY = (textTop + textBottom) / 2;
                  
                  const textDeltaX = originalX - centerTextX;
                  const textDeltaY = originalY - centerTextY;
                  const textDistance = Math.sqrt(textDeltaX * textDeltaX + textDeltaY * textDeltaY);
                  
                  if (textDistance > 0) {
                    const pushDistance = oneCm + 20; // 1cm + extra buffer
                    originalX = centerTextX + (textDeltaX / textDistance) * pushDistance;
                    originalY = centerTextY + (textDeltaY / textDistance) * pushDistance;
                    element.dataset.originalX = String(originalX);
                    element.dataset.originalY = String(originalY);
                  }
                }
              }
              
              // Store position for overlap checking
              allJobPositions.push({ x: originalX, y: originalY, element });
            });
            
            // PREVENT JOB OVERLAPPING - Check each job against others
            allJobPositions.forEach((currentJob, currentIndex) => {
              allJobPositions.forEach((otherJob, otherIndex) => {
                if (currentIndex !== otherIndex) {
                  const distance = Math.sqrt(
                    Math.pow(currentJob.x - otherJob.x, 2) + 
                    Math.pow(currentJob.y - otherJob.y, 2)
                  );
                  
                  const minDistance = 60; // Minimum distance between jobs
                  
                  if (distance < minDistance) {
                    const deltaX = currentJob.x - otherJob.x;
                    const deltaY = currentJob.y - otherJob.y;
                    const pushDistance = (minDistance - distance) / 2;
                    
                    if (distance > 0) {
                      const directionX = deltaX / distance;
                      const directionY = deltaY / distance;
                      
                      currentJob.x += directionX * pushDistance;
                      currentJob.y += directionY * pushDistance;
                      currentJob.element.dataset.originalX = String(currentJob.x);
                      currentJob.element.dataset.originalY = String(currentJob.y);
                    }
                  }
                }
              });
            });
            
            // Now apply cursor movement to all jobs
            categories.forEach((category, index) => {
              const element = category as HTMLElement;
              const originalX = parseFloat(element.dataset.originalX || '0');
              const originalY = parseFloat(element.dataset.originalY || '0');
              
              // Calculate distance and direction from cursor to category's original position
              const deltaX = mouseX - originalX;
              const deltaY = mouseY - originalY;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
              
              // Move every job opposite to the cursor direction.
              // The further the cursor, the smaller the displacement (capped for stability).
              const maxDisplacement = 40; // px
              const influenceRadius = Math.max(rect.width, rect.height); // full section diagonal approx
              const influence = Math.min(distance / influenceRadius, 1); // 0 (close) -> 1 (far)
              const strength = (1 - influence); // jobs nearer to cursor move more
              
              const directionX = distance === 0 ? 0 : -deltaX / distance; // opposite
              const directionY = distance === 0 ? 0 : -deltaY / distance;
              
              let offsetX = directionX * strength * maxDisplacement;
              let offsetY = directionY * strength * maxDisplacement;
              
              // FINAL TEXT COLLISION CHECK - ensure final position doesn't overlap
              if (textRect) {
                const finalX = originalX + offsetX;
                const finalY = originalY + offsetY;
                const textLeft = textRect.left - sectionRect.left - 120;
                const textRight = textRect.right - sectionRect.left + 120;
                const textTop = textRect.top - sectionRect.top - 80;
                const textBottom = textRect.bottom - sectionRect.top + 80;
                
                if (finalX > textLeft && finalX < textRight && finalY > textTop && finalY < textBottom) {
                  const centerTextX = (textLeft + textRight) / 2;
                  const centerTextY = (textTop + textBottom) / 2;
                  
                  const textDeltaX = finalX - centerTextX;
                  const textDeltaY = finalY - centerTextY;
                  const textDistance = Math.sqrt(textDeltaX * textDeltaX + textDeltaY * textDeltaY);
                  
                  if (textDistance > 0) {
                    const pushDistance = 150;
                    offsetX = (textDeltaX / textDistance) * pushDistance - (originalX - centerTextX);
                    offsetY = (textDeltaY / textDistance) * pushDistance - (originalY - centerTextY);
                  }
                }
              }
              
              // Apply smooth transition
              element.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              element.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
            });
          }}
        />
        
        <div className="main-heading" style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1rem, 6vw, 6rem)',
              fontWeight: '500',
              color: '#272727',
              marginBottom: '2rem',
              fontFamily: 'Poppins',
              position: 'relative',
              display: 'inline-block',
              lineHeight: 1.1,
              textAlign: 'center',
              marginLeft: '2rem',
              marginRight: '2rem',
              padding: '0 2rem',
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
                fontSize: '1rem',
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
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto 3rem',
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
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  backgroundColor: '#00704a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  minWidth: '200px',
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
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  backgroundColor: 'transparent',
                  color: '#00704a',
                  border: '2px solid #00704a',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  minWidth: '200px',
                  transition: 'all 0.3s ease',
                }}
              >
                Find your next job
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Floating Job Categories - Only Actual Job Titles */}
        {[
          { text: 'Full Stack Developer', x: 15, y: 8, category: 'tech', opacity: 0.9 },
          { text: 'Frontend Developer', x: 85, y: 12, category: 'tech', opacity: 0.8 },
          { text: 'Backend Developer', x: 10, y: 15, category: 'tech', opacity: 0.9 },
          { text: 'Mobile App Developer', x: 88, y: 22, category: 'tech', opacity: 0.8 },
          { text: 'UI/UX Designer', x: 75, y: 8, category: 'design', opacity: 0.7 },
          { text: 'Data Scientist', x: 25, y: 12, category: 'tech', opacity: 0.9 },
          { text: 'DevOps Engineer', x: 65, y: 15, category: 'tech', opacity: 0.8 },
          { text: 'Machine Learning Engineer', x: 45, y: 8, category: 'tech', opacity: 0.9 },
          { text: 'Product Manager', x: 35, y: 16, category: 'business', opacity: 0.7 },
          { text: 'Graphic Designer', x: 55, y: 12, category: 'design', opacity: 0.6 },
          { text: 'Software Architect', x: 15, y: 85, category: 'tech', opacity: 0.8 },
          { text: 'QA Engineer', x: 25, y: 80, category: 'tech', opacity: 0.7 },
          { text: 'Blockchain Developer', x: 35, y: 88, category: 'tech', opacity: 0.8 },
          { text: 'Cybersecurity Specialist', x: 45, y: 82, category: 'tech', opacity: 0.9 },
          { text: 'Cloud Engineer', x: 55, y: 90, category: 'tech', opacity: 0.8 },
          { text: 'Game Developer', x: 65, y: 85, category: 'tech', opacity: 0.7 },
          { text: 'Technical Writer', x: 75, y: 88, category: 'content', opacity: 0.6 },
          { text: 'Digital Marketer', x: 85, y: 82, category: 'marketing', opacity: 0.7 },
          { text: 'SEO Specialist', x: 88, y: 90, category: 'marketing', opacity: 0.6 },
          { text: 'Content Creator', x: 12, y: 88, category: 'content', opacity: 0.5 },
        ].map((item, index) => {
          const getCategoryColor = (category: string) => {
            const colors = {
              tech: '#272727',
              design: '#00704a',
              business: '#059669',
              content: '#dc2626',
              marketing: '#ea580c'
            };
            return colors[category as keyof typeof colors] || '#272727';
          };
          
          return (
            <motion.div
              key={index}
              className="floating-category"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: item.opacity, 
                scale: 1,
              }}
              whileHover={{ 
                scale: 1.1, 
                opacity: Math.min(item.opacity + 0.3, 1),
                zIndex: 20
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                duration: 0.2
              }}
              style={{
                position: 'absolute',
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: 'translate(-50%, -50%)',
                padding: '0.4rem 0.8rem',
                backgroundColor: item.category === 'tech' ? '#f7fafc' : 
                                item.category === 'design' ? '#f0fdf4' : 
                                item.category === 'business' ? '#ecfdf5' :
                                item.category === 'content' ? '#fee2e2' :
                                item.category === 'marketing' ? '#fff7ed' : '#f7fafc',
                color: getCategoryColor(item.category),
                borderRadius: '1rem',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                fontWeight: item.opacity > 0.7 ? '600' : '400',
                fontFamily: 'Inter, sans-serif',
                border: `1px solid ${getCategoryColor(item.category)}20`,
                cursor: 'pointer',
                userSelect: 'none',
                zIndex: 5,
                whiteSpace: 'nowrap',
                boxShadow: item.opacity > 0.7 ? `0 2px 8px ${getCategoryColor(item.category)}15` : 'none',
              }}
              ref={(el) => {
                if (el && el.parentElement) {
                  // Store original position for cursor radius calculations
                  const rect = el.parentElement.getBoundingClientRect();
                  if (rect) {
                    const originalX = rect.width * item.x / 100;
                    const originalY = rect.height * item.y / 100;
                    el.dataset.originalX = String(originalX);
                    el.dataset.originalY = String(originalY);
                    
                    // Ensure this job is tracked for movement
                    el.classList.add('floating-category');
                  }
                }
              }}
            >
              {item.text}
            </motion.div>
          );
        })}
      </section>

     

      {/* Stats Section with Green Background and Animated Counters */}
      <section id="features" style={{
        backgroundColor: '#00704a',
        color: 'white',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          textAlign: 'center',
        }}>
          {[
            { number: 8, suffix: 'M+', label: 'Matches Made' },
            { number: 15, suffix: 'M+', label: 'Tech Jobs' },
            { number: 10, suffix: 'M+', label: 'Startup Ready Candidates' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '0.5rem',
                fontFamily: 'Poppins',
              }}>
                <Counter target={stat.number} suffix={stat.suffix} />
              </h3>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Poppins',
                fontWeight: '500',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Freelancers and Clients Connect Section */}
      <section style={{
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
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
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
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
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'white',
                color: '#2d1b69',
                border: 'none',
                borderRadius: '0.5rem',
                fontFamily: 'Poppins',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Learn more
            </motion.button>
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
            <button onClick={() => openModal('Terms and Conditions', <TermsAndConditions />)} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Terms & Conditions</button>
            <button onClick={() => openModal('Privacy Policy', <PrivacyPolicy />)} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Privacy Policy</button>
            <button onClick={() => openModal('Cancellation Policy', <CancellationPolicy />)} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Cancellation Policy</button>
            <button onClick={() => openModal('Shipping Policy', <ShippingPolicy />)} style={{ background: 'none', border: 'none', color: '#00704a', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Shipping Policy</button>
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