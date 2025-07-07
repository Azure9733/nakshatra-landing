"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";

// Acts as the left column wrapper
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 500px;
  width: 100%;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const StyledTypography = styled(Typography)`
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  color: white;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 0.75rem;
  text-align: left;
`;

const WordContainer = styled.div`
  height: 4.5rem;
  position: relative;
  width: 100%;
`;

const StyledMotionDiv = styled(motion.div)`
  color: #7adc40;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: clamp(1.75rem, calc(3vw + 1rem), 4rem); /* Adaptive size */
  text-align: left;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const RotatingWords: React.FC = () => {
  const words = [
    "Interactive Mapping",
    "Indoor Navigation",
    "Event Tracking",
    "Smarter Emergency Evacuations"
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
  const id = setInterval(() => {
    setCurrentWord((prev) => (prev + 1) % words.length);
  }, 2000);
  return () => clearInterval(id);
}, [words.length]);
  
  return (
    <LeftColumn>
      <StyledTypography>
        The only Solution your premise needs for
      </StyledTypography>
      <WordContainer>
        <AnimatePresence mode="wait">
          <StyledMotionDiv
            key={currentWord}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {words[currentWord]}
          </StyledMotionDiv>
        </AnimatePresence>
      </WordContainer>
    </LeftColumn>
  );
};

export default RotatingWords;
