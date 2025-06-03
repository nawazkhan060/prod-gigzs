import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clipboard, Shield, Users, Globe, User, Target, Briefcase, CreditCard } from 'lucide-react';

interface AnimatedCardProps {
  icon: string;
  title: string;
  content: string;
  step?: string;
  index: number;
  section?: 'features' | 'how-it-works' | 'benefits';
}

const getIcon = (icon: string) => {
  switch (icon) {
    case '🤖':
      return <Brain size={32} />;
    case '📋':
      return <Clipboard size={32} />;
    case '🔒':
      return <Shield size={32} />;
    case '👥':
      return <Users size={32} />;
    case '🌐':
      return <Globe size={32} />;
    case '👤':
      return <User size={32} />;
    case '🎯':
      return <Target size={32} />;
    case '💼':
      return <Briefcase size={32} />;
    case '💰':
      return <CreditCard size={32} />;
    default:
      return null;
  }
};

const getAnimationStyle = (section?: string) => {
  switch (section) {
    case 'features':
      return {
        hoverEffect: {
          y: -10,
          boxShadow: '0 20px 40px rgba(0, 112, 74, 0.15)',
          backgroundColor: 'rgba(0, 112, 74, 0.02)',
        }
      };
    case 'how-it-works':
      return {
        hoverEffect: {
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(0, 112, 74, 0.15)',
          backgroundColor: 'rgba(0, 112, 74, 0.02)',
        }
      };
    default:
      return {
        hoverEffect: {
          y: -5,
          boxShadow: '0 10px 20px rgba(0, 112, 74, 0.1)',
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
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(0, 112, 74, 0.1)',
        transition: 'all 0.3s ease',
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
          padding: 'clamp(0.75rem, 2vw, 1.25rem)',
          backgroundColor: 'rgba(0, 112, 74, 0.05)',
          borderRadius: '1rem',
          width: 'clamp(3rem, 5vw, 4rem)',
          height: 'clamp(3rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00704a',
          transition: 'all 0.3s ease',
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgba(0, 112, 74, 0.1)',
        }}
      >
        {getIcon(icon)}
      </motion.div>
      
      {step && (
        <motion.div
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#00704a',
            opacity: 0.05,
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontFamily: 'Poppins',
            lineHeight: 1,
            fontWeight: '700',
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
          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
          color: '#00704a',
          marginBottom: '1rem',
          fontFamily: 'Poppins',
          fontWeight: '600',
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
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
        }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedCard; 