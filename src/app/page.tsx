/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";
import styled from "styled-components";
import { Button, Card, Typography } from "antd";
import Header from "./components/Header";
import '@fontsource/orbitron';
import '@fontsource/dm-sans';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Footer from "./components/Footer";
import MyComponent from "./components/box";
import CircularGallery from "./components/Ciculargallery";

const StyledTitle = styled(Typography)`
  text-align: center;
  font-size: clamp(2.25rem, 5vw, 3rem);
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
`;


const StyledCard = styled(Card)`
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  border-radius: 0 0 4rem 4rem;
  background: rgb(0,0,0);
  background: linear-gradient(99deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 50%, rgba(0,0,0,1) 100%);
  border: none;
  padding: clamp(1.25rem, 4vw, 3rem);
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;

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

const StyledSubTypography = styled(Typography)`
  text-align: center;
  font-size: clamp(1.2rem, 3vw, 1.125rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  margin-top: 2rem;

  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-top: 1.5rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem;
    margin-top: 1.75rem;
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
  margin: clamp(1.5rem, 3vw, 2rem) auto;

  &:hover {
    background-color: #11a5e9 !important;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
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
          
We at Nakshatra help large public spaces like airports, theme parks, malls, hospitals, universities, and other through interactive maps, live event tracking, and smart emergency evacuation systems.


        </StyledSubTypography>
        <StyledButton onClick={() => router.push('/contactus')}>Contact Us</StyledButton>
      </StyledCard>
      <div style={{ height: '800px', position: 'relative' }}>
  <CircularGallery 
  items={[
    { image: "/arFinal-removebg-preview.png", text: "LOl" },
    { image: "/emergencyFinal.png", text: "" },
    { image: "/indoorFinal.png", text: "" },
    { image: "/outdoor2Final.png", text: "" },
   
  ]}
  bend={0.5}
/>
</div>
      <MyComponent />
      <Footer />
    </div>
  );
};

export default Home;
