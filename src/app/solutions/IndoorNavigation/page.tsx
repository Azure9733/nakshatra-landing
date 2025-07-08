"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
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

const ContentWrapper = styled.main<{ fullWidth?: boolean }>`
  flex-grow: 1;
  display: grid;
  grid-template-columns: ${({ fullWidth }) => (fullWidth ? "1fr" : "1fr 1fr")};
  gap: 1.5rem;
  padding: ${({ fullWidth }) => (fullWidth ? "6vh clamp(1rem, 4vw, 4rem) 2rem" : "12vh clamp(1rem, 4vw, 4rem) 2rem")};
  overflow: hidden;
  width: 100%;
  align-items: center;

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

const NavigationButton = styled.button`
  margin-top: 2rem;
  align-self: flex-start;
  background: transparent;
  color: #7adc40;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.7rem 2.5rem;
  border: 2px solid #7adc40;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7adc40;
    color: #000;
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus {
    outline: none;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  padding-bottom: 2rem;
`;

const CarouselHeader = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0 2rem;
  margin-bottom: 2rem;
  position: relative;
  user-select: none;
`;

const BackButton = styled.button`
  position: absolute;
  top: 0.3rem;
  left: 0.5rem;
  background: transparent;
  color: #7adc40;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid #7adc40;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;

  &:hover {
    background: #7adc40;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

const CarouselTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  white-space: nowrap;
  background: linear-gradient(90deg, #7adc40, #caff89);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 auto;
  font-family: 'Orbitron', sans-serif;
`;

const CarouselSlider = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 420px;
  position: relative;
  overflow: visible;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CarouselSlide = styled.div<{ slidePosition: 'active' | 'prev' | 'next' | 'hidden' }>`
  flex: 0 0 70%;
  max-width: 70%;
  border-radius: 1.5rem;
  background: #111;
  box-shadow: 0 0 25px #7adc40cc;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  user-select: none;

  ${({ slidePosition }) => {
    switch (slidePosition) {
      case 'active':
        return css`
          transform: translateX(0) scale(1);
          z-index: 10;
          filter: none;
          opacity: 1;
          left: 15%;
        `;
      case 'prev':
        return css`
          transform: translateX(-100%) scale(0.85);
          filter: blur(3px);
          opacity: 0.4;
          z-index: 5;
          pointer-events: none;
          left: 15%;
        `;
      case 'next':
        return css`
          transform: translateX(100%) scale(0.85);
          filter: blur(3px);
          opacity: 0.4;
          z-index: 5;
          pointer-events: none;
          left: 15%;
        `;
      case 'hidden':
        return css`
          transform: translateX(200%) scale(0.7);
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          left: 15%;
        `;
      default:
        return css``;
    }
  }}

  @media (max-width: 768px) {
    flex: 0 0 85%;
    max-width: 85%;
    left: 7.5% !important;
  }
`;

const SlideImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  flex-grow: 1;
  min-height: 200px;
`;

const SlideContent = styled.div`
  padding: 1rem 1.5rem;
`;

const SlideTitle = styled.h3`
  color: #7adc40;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  user-select: text;
`;

const SlideDescription = styled.p`
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
  user-select: text;
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 30; // Brought arrows above carousel cards
`;

const ControlButton = styled.button`
  background: #7adc40;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  box-shadow: 0 0 25px rgba(122, 220, 64, 0.9);  // Brighter glow
  transition: all 0.3s ease;
  pointer-events: all;
  z-index: 35;

  &:hover {
    box-shadow: 0 0 35px rgba(122, 220, 64, 1);  // Even brighter on hover
    transform: scale(1.12);
  }

  &:active {
    transform: scale(0.92);
  }

  &:focus {
    outline: none;
  }
`;


const SolutionPage = () => {
  const [step, setStep] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const features = [
    {
      key: "emergency",
      title: "Emergency Evacuation",
      description:
        "Maps that adapt instantly during emergencies, rerouting users away from threats in real time.",
      imageSrc: "/emergencyFinal.png",
      imageAlt: "Emergency Evacuation UI",
    },
    {
      key: "attendance",
      title: "Attendance via NFC",
      description:
        "Walk into a classroom and your presence is logged instantly. NFC + map sync does the job.",
      imageSrc: "/attendanceFinal-removebg-preview.png",
      imageAlt: "Attendance Logging UI",
    },
    {
      key: "roombooking",
      title: "Book Rooms from the Map",
      description:
        "Check availability, reserve meeting spaces, and manage bookings directly from the interactive indoor map. Seamless room access—no separate app needed.",
      imageSrc: "/roomFinal-removebg-preview.png",
      imageAlt: "Room Booking UI",
    },
  ];

  const getSlidePosition = (index: number, currentIndex: number, totalSlides: number) => {
    if (index === currentIndex) return 'active';
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    if (index === prevIndex) return 'prev';
    if (index === nextIndex) return 'next';
    return 'hidden';
  };

  const prevSlide = () => {
    setCarouselIndex((idx) => (idx === 0 ? features.length - 1 : idx - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((idx) => (idx === features.length - 1 ? 0 : idx + 1));
  };

  const goToStep2 = () => {
    setCarouselIndex(0);
    setStep(2);
  };

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper fullWidth={step === 2}>
        {step === 1 && (
          <>
            <ImageWrapper>
              <Image
                src="/indoorFinal.png"
                alt="Indoor Navigation UI"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </ImageWrapper>

            <TextPanel>
              <Title>Indoor Navigation Deck</Title>
              <Description>
                Navigate massive indoor spaces like GPS never left. Our solution leverages sensor fusion and real-time positioning to guide users turn-by-turn inside hospitals, airports, malls, and campuses. No more confusion, wrong turns, or missed sessions.
              </Description>

              <NavigationButton onClick={goToStep2}>
                Explore Integrated Features
              </NavigationButton>
            </TextPanel>
          </>
        )}

        {step === 2 && (
          <CarouselContainer>
            <CarouselHeader>
              <BackButton onClick={() => setStep(1)} aria-label="Back to Indoor Navigation">
                ← Back
              </BackButton>
              <CarouselTitle>Integrated Features</CarouselTitle>
            </CarouselHeader>

            <CarouselSlider>
              {features.map(({ key, title, description, imageSrc, imageAlt }, idx) => (
                <CarouselSlide
                  key={key}
                  slidePosition={getSlidePosition(idx, carouselIndex, features.length)}
                >
                  <SlideImageWrapper>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </SlideImageWrapper>
                  <SlideContent>
                    <SlideTitle>{title}</SlideTitle>
                    <SlideDescription>{description}</SlideDescription>
                  </SlideContent>
                </CarouselSlide>
              ))}
            </CarouselSlider>

            <CarouselControls>
              <ControlButton aria-label="Previous feature" onClick={prevSlide}>
                ‹
              </ControlButton>
              <ControlButton aria-label="Next feature" onClick={nextSlide}>
                ›
              </ControlButton>
            </CarouselControls>
          </CarouselContainer>
        )}
      </ContentWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SolutionPage;
