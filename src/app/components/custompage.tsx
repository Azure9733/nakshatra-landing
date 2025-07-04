"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const Container = styled.section`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'DM Sans', sans-serif;
  color: white;
  user-select: none;
`;

const RowWithButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  position: relative;
  animation: ${fadeIn} 0.7s ease forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    gap: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 320px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 280px;   /* Slightly smaller max width */
    width: 90vw;        /* Responsive width */
    min-width: 240px;   /* Don't shrink below this */
    min-height: 360px;  /* Maintain aspect ratio roughly */
    margin-bottom: 2rem;
  }
`;

const TextBlock = styled.div`
  flex: 1.3;
  font-size: 1.4rem;
  line-height: 1.8;
  color: #e0e0e0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    font-size: 1.2rem;
  }
`;

const Highlight = styled.span`
  color: #7adc40;
  font-weight: 700;
`;

const SideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 2.5px solid #7adc40;
  color: #7adc40;
  font-weight: 700;
  font-size: 1.15rem;
  padding: 0.45rem 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  min-width: 100px;
  z-index: 2;

  &:hover {
    background-color: #7adc40;
    color: #0a0a0a;
    box-shadow: 0 0 15px #7adc40;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 20px #7adc40;
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: -3rem;
    transform: none;
    position: static;
    margin-top: 2rem;
  }
`;

const PrevButton = styled(SideButton)`
  left: -10rem;

  @media (max-width: 768px) {
    left: 0;
  }
`;

const NextButton = styled(SideButton)`
  right: -10rem;

  @media (max-width: 768px) {
    right: 0;
  }
`;

const DotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const Dot = styled.span<{ active: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#7adc40" : "rgba(122,220,64,0.35)")};
  box-shadow: ${({ active }) => (active ? "0 0 8px #7adc40" : "none")};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
`;

const getContent = (page: number) => {
  const commonImageStyle = { borderRadius: '20px', objectFit: 'cover' as const };

  switch (page) {
    case 1:
      return {
        left: (
          <Image
            src="/indoorFinal.png"
            alt="Indoor Mapping"
            width={320}
            height={480}
            priority
            style={commonImageStyle}
          />
        ),
        right: (
          <>
            Navigate indoors like <Highlight>GPS never left</Highlight> — clear maps and precise positioning.<Highlight> Find your way effortlessly.</Highlight>
          </>
        ),
      };
    case 2:
      return {
        left: (
          <Image
            src="/emergencyFinal.png"
            alt="Emergency Navigation"
            width={320}
            height={480}
            priority
            style={commonImageStyle}
          />
        ),
        right: (
          <>
            <Highlight>Emergency evacuations made smarter.</Highlight> Live data and mapped spaces guide occupants quickly and safely.
          </>
        ),
      };
    case 3:
      return {
        left: (
          <Image
            src="/outdoor2Final.png"
            alt="Event Mapping"
            width={320}
            height={480}
            priority
            style={commonImageStyle}
          />
        ),
        right: (
          <>
            <Highlight>Live event tracking on outdoor maps</Highlight> bring maps to life — explore and find activities <Highlight>as they happen</Highlight>.
          </>
        ),
      };
    case 4:
      return {
        left: (
          <Image
            src="/arFinal-removebg-preview.png"
            alt="AR Navigation"
            width={320}
            height={480}
            priority
            style={commonImageStyle}
          />
        ),
        right: (
          <>
            <Highlight>AR navigation in complex buildings</Highlight> gives you Real-time, turn-by-turn directions layered onto your surroundings.
          </>
        ),
      };
    default:
      return { left: null, right: null };
  }
};

const PaginatedTwoColumnLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [currentPage]);

  const { left, right } = getContent(currentPage);

  const goPrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <Container aria-label="Feature showcase carousel">
      <RowWithButtons>
        <PrevButton onClick={goPrev} aria-label="Previous feature">‹ Prev</PrevButton>

        <ContentRow key={animKey}>
          <ImageWrapper>{left}</ImageWrapper>
          <TextBlock>{right}</TextBlock>
        </ContentRow>

        <NextButton onClick={goNext} aria-label="Next feature">Next ›</NextButton>
      </RowWithButtons>

      <DotRow>
        {[...Array(totalPages)].map((_, i) => (
          <Dot
            key={i}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
            aria-label={`Go to feature ${i + 1}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setCurrentPage(i + 1);
            }}
          />
        ))}
      </DotRow>
    </Container>
  );
};

export default PaginatedTwoColumnLayout;
