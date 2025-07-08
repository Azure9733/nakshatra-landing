import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const phrases = ["Find Your Way.", "Stay Informed.", "Stay Safe."];
const TYPING_SPEED = 100;
const ERASE_SPEED = 50;
const DELAY_BETWEEN = 1500;

const blink = keyframes`
  50% { opacity: 0; }
`;

const BlinkingCursor = styled.span`
  font-weight: 100;
  font-size: 1.2em;
  color: #7adc40;
  animation: ${blink} 1s step-end infinite;
`;

const TypewriterText = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhrase];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, ERASE_SPEED);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_BETWEEN);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhrase]);

  return (
    <span>
      {currentText}
      <BlinkingCursor>|</BlinkingCursor>
    </span>
  );
};

export default TypewriterText;
