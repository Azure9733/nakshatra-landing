/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";
import styled from "styled-components";
import { Button, Card, Typography } from "antd";
import Header from "./components/Header";
import '@fontsource/orbitron';
import '@fontsource/dm-sans';
import { useRouter } from 'next/navigation';

import Footer from "./components/Footer";
import MyComponent from "./components/box";
import PaginatedTwoColumnLayout from "./components/custompage";




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
  font-family: 'DM Sans', sans-serif;
  font-weight: 1000;
  margin-bottom: 2.5rem; /* Increased spacing below */

  background: linear-gradient(90deg, #7adc40, #caff89, #7adc40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const StyledSubTypography = styled(Typography)`
  width: clamp(85%, calc(70% + 5vw), 100%);
  margin: 0 auto;
  text-align: center;
  font-size: clamp(1.5rem, 3.5vw, 1.5rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 4rem; /* Added spacing below */

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
  width: clamp(8rem, 15vw, 11.25rem);
  height: clamp(2.5rem, 6vh, 3.5rem);
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-family: 'DM Sans', sans-serif;
  background-color: #7adc40;
  border-radius: 1.875rem;
  border: none;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #11a5e9 !important;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
const StyledSubTypography2 = styled(Typography)`
  width: clamp(85%, calc(70% + 5vw), 100%);
  margin: 0 auto;
  text-align: center;
  font-size: clamp(1.5rem, 3.5vw, 1.5rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 4rem; /* Added spacing below */

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
        <StyledButton onClick={() => router.push('/contactus')}>Contact Us</StyledButton>
      </StyledCard>
      <>
      
    
  </>
  <PaginatedTwoColumnLayout />
      <MyComponent />

      <StyledSubTypography2>
          
Trusted By: 
 </StyledSubTypography2>
 <StyledSubTypography2>
<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
  <li style={{ color: 'orange' }}>Innovation Centre</li>

  <li>10,000+ users</li>
</ul>
 
 </StyledSubTypography2>
 <StyledSubTypography2>
          

 </StyledSubTypography2>
 <StyledButton onClick={() => router.push('/contactus')}>Contact Us</StyledButton>
      <Footer />

    </div>
  );
};

export default Home;
