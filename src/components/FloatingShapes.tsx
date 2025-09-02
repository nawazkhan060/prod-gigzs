import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    // Optimized background elements
    { type: 'circle', size: 60, color: '#00704a10', left: '10%', top: '20%', duration: 25 },
    { type: 'circle', size: 80, color: '#00704a08', right: '15%', top: '30%', duration: 30 },
    { type: 'circle', size: 50, color: '#00704a12', left: '20%', bottom: '20%', duration: 22 },
    
    // Decorative elements
    { type: 'square', size: 20, color: '#00704a20', right: '8%', top: '60%', duration: 18, rotate: true },
    { type: 'circle', size: 12, color: '#00704a35', right: '20%', bottom: '15%', duration: 14 },
  ];

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      pointerEvents: 'none', 
      zIndex: 0,
      willChange: 'transform' // Optimize for animations
    }}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : '15%',
            left: shape.left,
            right: shape.right,
            top: shape.top,
            bottom: shape.bottom,
            willChange: 'transform', // Optimize for animations
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          animate={{
            y: [0, -15, 0],
            rotate: shape.rotate ? [0, 360] : 0,
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;