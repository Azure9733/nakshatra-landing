"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  background: radial-gradient(circle at 30% 30%, #111 0%, #000 100%);
  color: white;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.header`
  flex-shrink: 0;
`;

const FooterWrapper = styled.footer`
  flex-shrink: 0;
`;

const ContentWrapper = styled.main`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 12vh clamp(1rem, 4vw, 4rem) 2rem;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1.5rem;
  overflow: hidden;
  height: 100%;
  background: #111;
  max-height: 450px;
`;

const TextPanel = styled.div`
  background: #111;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  border: 1px solid #2c2c2c;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 450px;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  background: linear-gradient(90deg, #7adc40, #caff89);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1rem;
  user-select: none;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
`;

const ARNavigationSolutionPage = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper>
        <ImageWrapper>
          <Image
            src="/arFinal-removebg-preview.png"
            alt="AR Navigation UI"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </ImageWrapper>

        <TextPanel>
          <Title>AR Navigation</Title>
          <Description>
            Walk like you’ve been there before. With our AR-based navigation system, users are guided using real-time 3D directions overlaid onto their actual surroundings—no more confusion with flat maps. It’s intuitive, immersive, and built for next-gen smart campuses, malls, and hospitals.
          </Description>
        </TextPanel>
      </ContentWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default ARNavigationSolutionPage;
