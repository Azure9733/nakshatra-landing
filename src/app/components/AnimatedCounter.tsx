"use client";
import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // in ms
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 6000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 50; // ms
    const steps = duration / incrementTime;
    const stepAmount = Math.ceil(end / steps);

    const timer = setInterval(() => {
      start += stepAmount;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>{count.toLocaleString()}</span>
  );
};

export default AnimatedCounter;
