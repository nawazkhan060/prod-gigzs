import React, { useState, useEffect } from 'react';

interface CounterProps {
  /** The value the counter should end at */
  target: number;
  /** Optional suffix string appended after the numeric value (e.g. "M+", "K+") */
  suffix?: string;
  /** Total duration of the counting animation in milliseconds (default: 2000ms) */
  duration?: number;
}

/**
 * Simple animated counter that increments from 0 to `target` over the given `duration`.
 * It uses a fixed update interval to create a smooth counting animation with minimal performance overhead.
 */
const Counter: React.FC<CounterProps> = ({ target, suffix = '', duration = 2000 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Guard against invalid targets
    if (target <= 0) {
      setValue(target);
      return;
    }

    const frameRate = 60; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = target / totalFrames;

    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame += 1;
      setValue((prev) => {
        const next = prev + increment;
        if (currentFrame >= totalFrames) {
          clearInterval(interval);
          return target;
        }
        return next;
      });
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [target, duration]);

  // Format number to max one decimal if not integer, otherwise no decimals.
  const formatted = Number(value).toFixed(value % 1 === 0 ? 0 : 1);

  return <span>{formatted}{suffix}</span>;
};

export default Counter;
