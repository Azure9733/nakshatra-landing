"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Fade in + slide up animation for sections
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Pulse glow animation for badge
const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px #7adc40cc; }
  50% { box-shadow: 0 0 30px #7adc40ee; }
`;

// Glow pulse for circles
const pulseCircle = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const PageWrapper = styled.div`
  background: linear-gradient(99deg, #000000 0%, #1e1e1e 50%, #000000 100%);
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
  font-family: 'DM Sans', sans-serif;
  color: white;
  min-height: 100vh;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 6vw, 5rem);
  flex-wrap: wrap;
  margin-bottom: clamp(4rem, 8vw, 6rem);
  animation: ${fadeInUp} 0.6s ease forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.8;
  color: #e0e0e0;
  max-width: 650px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #7adc40, #caff89, #7adc40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-shadow:
    0 0 5px #7adc40aa,
    0 0 10px #7adc40cc;
`;

const AlertIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: #e74c3c;
  filter: drop-shadow(0 0 2px #e74c3c);
`;

const Highlight = styled.span`
  color: #7adc40;
  font-weight: 700;
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 550px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.6);
  background-color: #111;
  position: relative;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 25px 50px #7adc40cc;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;

const FeatureBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #7adc40, #11a5e9);
  color: #000;
  padding: 0.5rem 1.1rem;
  font-size: 0.95rem;
  font-weight: 900;
  border-radius: 1.5rem;
  box-shadow: 0 0 12px #7adc40;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.6px;
  animation: ${pulseGlow} 3s infinite ease-in-out;
  user-select: none;
  z-index: 10;
`;

const GlowBackground = styled.div`
  position: absolute;
  top: -12%;
  left: -15%;
  width: 130%;
  height: 130%;
  border-radius: 24px;
  pointer-events: none;
  filter: blur(80px);
  background: radial-gradient(circle at center, #7adc40aa, transparent 60%);
  z-index: 5;
`;

// New circular bridge container between sections
const BridgeContainer = styled.div`
  position: relative;
  width: 180px;
  height: 100px;
  margin: -4rem auto clamp(3rem, 6vw, 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin: clamp(2rem, 5vw, 4rem) auto;
  }
`;

const Circle = styled.div<{ size: number; colorStart: string; colorEnd: string; delay?: string }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ colorStart }) => colorStart}, ${({ colorEnd }) => colorEnd});
  filter: drop-shadow(0 0 10px ${({ colorEnd }) => colorEnd});
  animation: ${pulseCircle} 4s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  opacity: 0.9;
`;

const Badge = styled.div`
  position: relative;
  z-index: 30;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7adc40, #11a5e9);
  box-shadow: 0 0 25px #7adc40cc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  color: #000;
  user-select: none;
  cursor: default;
  text-align: center;
  padding: 0.8rem;
  user-select: none;

  /* Optional: subtle text shadow for crispness */
  text-shadow: 0 0 4px #000000bb;
`;

// Icon SVG inside the badge (shield + map pin combo)
const IntegrationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M24 2L12 6v12c0 10 12 18 12 18s12-8 12-18V6l-12-4z" fill="#7adc40" stroke="#004d00" strokeWidth="2"/>
    <circle cx="24" cy="20" r="6" fill="#11a5e9" stroke="#004d00" strokeWidth="1.5"/>
    <circle cx="24" cy="20" r="3" fill="#000" />
  </svg>
);

const SolutionPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        {/* Indoor Navigation Section */}
        <Section style={{ position: "relative" }}>
          <ImageWrapper>
            <Image
              src="/indoorFinal.png"
              alt="Indoor Navigation UI"
              width={1080}
              height={1920}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px"
              }}
              priority
            />
          </ImageWrapper>
          <TextBlock>
            <SectionTitle>Indoor Navigation</SectionTitle>
            <p>
              Navigate massive indoor spaces <Highlight>like GPS never left</Highlight>. Our solution leverages sensor fusion and real-time positioning to guide users <Highlight>turn-by-turn</Highlight> inside hospitals, airports, malls, and campuses. No more confusion, wrong turns, or missed sessions.
            </p>
          </TextBlock>
        </Section>

        {/* Overlapping Bridge Badge Between Sections */}
        <BridgeContainer aria-hidden="true" aria-label="Feature integration badge">
          <Circle size={140} colorStart="#7adc40" colorEnd="#11a5e9" delay="0s" style={{ left: 0, top: 5 }} />
          <Circle size={120} colorStart="#11a5e9" colorEnd="#7adc40" delay="1.5s" style={{ right: 0, top: 15 }} />
          <Badge title="Emergency Evacuation integrated with Indoor Navigation">
            <IntegrationIcon />
            <div style={{ marginTop: '6px', fontSize: '0.7rem', color: '#003300' }}>Integrated Feature</div>
          </Badge>
        </BridgeContainer>

        {/* Emergency Evacuation Section */}
        <Section style={{ position: "relative" }}>
          <TextBlock>
            <SectionTitle>
              <AlertIcon viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 2L1 21h22L12 2zM12 16v2h-1v-2h1zm0-7v5h-1v-5h1z"/>
              </AlertIcon>
              Emergency Evacuation
            </SectionTitle>
            <p>
              <Highlight>Emergency Evacuation is seamlessly integrated within Indoor Navigation</Highlight> — so when every second counts, your maps <em>don’t just guide</em>, they <strong>save lives</strong>.<br /><br />
              Real-time situational awareness, dynamic exit routing, and zone-by-zone alerts empower occupants to evacuate calmly and efficiently.
            </p>
          </TextBlock>
          <ImageWrapper>
            <GlowBackground />
            <FeatureBadge>Built into Indoor Navigation</FeatureBadge>
            <Image
              src="/emergencyFinal.png"
              alt="Emergency Evacuation UI"
              width={1080}
              height={1920}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px"
              }}
              priority
            />
          </ImageWrapper>
        </Section>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default SolutionPage;
