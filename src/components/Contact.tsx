import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh',
      paddingTop: '80px',
      backgroundColor: '#f8f9fa',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#00704a',
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: 'Poppins',
          }}>
            Contact Us
          </h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#00704a',
                marginBottom: '1.5rem',
                fontFamily: 'Poppins',
              }}>
                Get in Touch
              </h2>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <Mail size={24} color="#00704a" />
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      color: '#333',
                      marginBottom: '0.25rem',
                      fontFamily: 'Poppins',
                    }}>
                      Email
                    </h3>
                    <p style={{
                      color: '#666',
                      fontFamily: 'Poppins',
                    }}>
                      contact@gigzs.com
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <Phone size={24} color="#00704a" />
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      color: '#333',
                      marginBottom: '0.25rem',
                      fontFamily: 'Poppins',
                    }}>
                      Phone
                    </h3>
                    <p style={{
                      color: '#666',
                      fontFamily: 'Poppins',
                    }}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <MapPin size={24} color="#00704a" />
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      color: '#333',
                      marginBottom: '0.25rem',
                      fontFamily: 'Poppins',
                    }}>
                      Address
                    </h3>
                    <p style={{
                      color: '#666',
                      fontFamily: 'Poppins',
                    }}>
                      House no 108 Pachkedhi Gandli<br />
                      Pachkhedi Kuhi,<br />
                      Nagpur, Maharashtra<br />
                      PIN: 441210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#00704a',
                marginBottom: '1.5rem',
                fontFamily: 'Poppins',
              }}>
                Send us a Message
              </h2>
              <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <div>
                  <label htmlFor="name" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontFamily: 'Poppins',
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(0, 112, 74, 0.2)',
                      borderRadius: '0.5rem',
                      fontFamily: 'Poppins',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'rgba(0, 112, 74, 0.02)',
                      color: '#333',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 112, 74, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontFamily: 'Poppins',
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(0, 112, 74, 0.2)',
                      borderRadius: '0.5rem',
                      fontFamily: 'Poppins',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'rgba(0, 112, 74, 0.02)',
                      color: '#333',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 112, 74, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="subject" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontFamily: 'Poppins',
                  }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(0, 112, 74, 0.2)',
                      borderRadius: '0.5rem',
                      fontFamily: 'Poppins',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'rgba(0, 112, 74, 0.02)',
                      color: '#333',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 112, 74, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontFamily: 'Poppins',
                  }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(0, 112, 74, 0.2)',
                      borderRadius: '0.5rem',
                      fontFamily: 'Poppins',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'rgba(0, 112, 74, 0.02)',
                      color: '#333',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#00704a';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 112, 74, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 112, 74, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#005c3d' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#00704a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2rem',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0, 112, 74, 0.1)',
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 