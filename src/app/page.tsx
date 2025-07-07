/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";
import styled from "styled-components";
import { Button, Card, Typography } from "antd";
import Header from "./components/Header";
import '@fontsource/orbitron';
import '@fontsource/dm-sans';
import { useRouter } from 'next/navigation';
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MyComponent from "./components/box";
import PaginatedTwoColumnLayout from "./components/custompage";
import AnimatedCounter from './components/AnimatedCounter';

const StyledCard = styled(Card)`
  width: 100%;
  min-height: 100vh; /* Full viewport height */
  font-family: 'DM Sans', sans-serif;
  border-radius: 0 0 4rem 4rem;
  background: linear-gradient(99deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 50%, rgba(0,0,0,1) 100%);
  border: none;
  padding: clamp(1.25rem, 4vw, 3rem);
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;

  /* Center content vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-size: 45px 45px;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
    
    z-index: 0;
    pointer-events: none;
  }
`;

const StyledTitle = styled(Typography)`
  text-align: center;
  font-size: clamp(3rem, 6.5vw, 4.5rem);
  font-family: 'Orbitron', sans-serif;
  font-weight: 1000;
  margin-bottom: 2.5rem;

  background: linear-gradient(90deg, #7adc40, #caff89, #7adc40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const StyledSubTypography = styled(Typography)`
  width: clamp(85%, calc(70% + 5vw), 100%);
  margin: 0 auto 4rem;
  text-align: center;
  font-size: clamp(1.5rem, 3.5vw, 1.5rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;

  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const StyledButton = styled(Button)`
  width: clamp(9rem, 14vw, 12rem);
  height: clamp(3rem, 6vh, 3.75rem);
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  background: #7adc40;
  border-radius: 2rem;
  border: none;
  box-shadow: 0 0 15px rgba(122, 220, 64, 0.8);
  transition: all 0.3s ease;
  color: #000;

  display: block;
  margin: 2rem auto 4rem auto; /* 🟢 This centers the button horizontally */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 22px rgba(122, 220, 64, 1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 10px rgba(122, 220, 64, 0.6);
  }

  &:focus {
    background: #7adc40;
    color: #000;
  }
`;



const TrustedContainer = styled.div`
  width: clamp(85%, calc(70% + 5vw), 100%);
  margin: 0 auto 3rem;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  color: white;

  /* Headline */
  > div:first-child {
    font-size: clamp(2.25rem, 5vw, 3rem);
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #7adc40, #caff89, #7adc40);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    letter-spacing: 1.2px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 700;
    margin: 0.75rem 0;
    color: #d1d1d1;
  }

  li.orange {
    color: #ffa500;
    font-weight: 800;
  }

  li.users {
    font-weight: 900;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #7adc40;
  }
`;

const StyledSubTypography2 = styled(Typography)`
  width: clamp(85%, calc(70% + 5vw), 100%);
  margin: 0 auto 4rem;
  text-align: center;
  font-size: clamp(2.5rem, 3.5vw, 1.5rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;

  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const Home = () => {
  const router = useRouter();

  return (
    <div className="App">
      <Header />
      <StyledCard>
        <StyledTitle>Find Your Way, Stay Informed, Stay Safe.</StyledTitle>
        <StyledSubTypography>
          We at Nakshatra help large public spaces like airports, theme parks, malls, hospitals, universities, and other public spaces through interactive maps, live event tracking, and smart emergency evacuation systems.
        </StyledSubTypography>

        <TrustedContainer aria-label="Already trusted by">
          <div>Already trusted by:</div>
          <ul>
            <li className="orange">
              Innovation Centre, Manipal Institute of Technology, MAHE
            </li>
            <li className="users">
              <AnimatedCounter target={10000} />+ users
            </li>
          </ul>
        </TrustedContainer>

        <StyledButton onClick={() => router.push('/contactus')}>Contact Us</StyledButton>
      </StyledCard>

      <PaginatedTwoColumnLayout />
      <MyComponent />


      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
