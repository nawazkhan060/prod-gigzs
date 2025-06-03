import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Users, Globe, User, Target, Briefcase, CreditCard } from 'lucide-react';

interface AnimatedCardProps {
  icon: string;
  title: string;
  content: string;
  step?: string;
  index: number;
  section?: 'features' | 'how-it-works' | 'benefits';
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case '🤖':
      return <Brain size={32} />;
    case '🔒':
      return <Shield size={32} />;
    case '💼':
      return <Briefcase size={32} />;
    case '🌍':
      return <Globe size={32} />;
    case '👤':
      return <User size={32} />;
    case '🎯':
      return <Target size={32} />;
    case '💰':
      return <CreditCard size={32} />;
    default:
      return <Users size={32} />;
  }
};

const getAnimationStyle = (section?: string) => {
  switch (section) {
    case 'features':
      return {
        borderAnimation: {
          initial: { borderColor: 'transparent' },
          whileHover: {
            borderColor: '#00704a',
            borderWidth: '2px',
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
            }
          }
        },
        hoverEffect: {
          y: -5,
          boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
        }
      };
    case 'how-it-works':
      return {
        borderAnimation: {
          initial: { borderColor: 'transparent' },
          whileHover: {
            borderColor: '#00704a',
            borderWidth: '2px',
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
            }
          }
        },
        hoverEffect: {
          scale: 1.02,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        }
      };
    case 'benefits':
      return {
        borderAnimation: {
          initial: { borderColor: 'transparent' },
          whileHover: {
            borderColor: '#00704a',
            borderWidth: '2px',
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
            }
          }
        },
        hoverEffect: {
          y: -3,
          scale: 1.01,
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.12)',
        }
      };
    default:
      return {
        borderAnimation: {
          initial: { borderColor: 'transparent' },
          whileHover: {
            borderColor: '#00704a',
            borderWidth: '2px',
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
            }
          }
        },
        hoverEffect: {
          y: -5,
          boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
        }
      };
  }
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon, title, content, step, index, section }) => {
  const animationStyle = getAnimationStyle(section);

  return (
    <motion.div
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '2px solid transparent',
      }}
      whileHover={{
        ...animationStyle.hoverEffect,
        borderColor: '#00704a',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.3
      }}
    >
      <motion.div
        style={{
          marginBottom: '1.5rem',
          padding: '1rem',
          backgroundColor: 'rgba(0, 112, 74, 0.05)',
          borderRadius: '0.75rem',
          width: '4rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00704a',
        }}
      >
        {getIcon(icon)}
      </motion.div>
      
      {step && (
        <motion.div
          style={{
            fontSize: '3rem',
            color: '#00704a',
            opacity: 0.05,
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontFamily: 'Poppins',
            lineHeight: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.3 }}
        >
          {step}
        </motion.div>
      )}
      
      <motion.h3
        style={{
          fontSize: '1.5rem',
          color: '#00704a',
          marginBottom: '1rem',
          fontFamily: 'Poppins',
          fontWeight: '500',
        }}
      >
        {title}
      </motion.h3>
      
      <motion.p
        style={{
          color: '#666',
          lineHeight: 1.6,
          fontFamily: 'Poppins',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedCard; 