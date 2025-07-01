"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import '@fontsource/dm-sans';
import Image from 'next/image';

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  color: white;
  margin-bottom: clamp(4rem, 6vw, 6rem);
`;

const LeftContainer = styled.div`
  flex: 1 1 clamp(300px, 35%, 600px);
  padding: clamp(1rem, 2vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
`;

const RightContainer = styled.div`
  flex: 1 1 clamp(300px, 65%, 800px);
  padding: clamp(1rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 3vw, 1.6rem);
  line-height: 1.6;
`;

const ResponsiveImage = styled(Image)`
  width: clamp(200px, 40vw, 300px);
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
`;


const ArrowNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 80px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;

  span {
    transition: color 0.2s ease;
  }

  span:hover {
    color: #ccc;
  }
`;
const FadeWrapper = styled.div<{ keyProp: number }>`
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Page-specific content
const getContent = (page: number) => {
  switch (page) {
    case 1:
      return {
        left: (
          <Image
            src="/indoorFinal.png"
            alt="Indoor Mapping"
            width={300}
            height={500}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        ),
        right:
          'Navigate the indoors like GPS never left—with 2D indoor maps that make complex spaces simple. From malls to museums, intuitive layouts and precise positioning help users find their way effortlessly, improving experience and accessibility without overwhelming the screen.',
      };
    case 2:
      return {
        left: (
          <Image
            src="/emergencyFinal.png"
            alt="Emergency Navigation"
            width={300}
            height={500}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        ),
        right:
          'Smarter emergency evacuations start with clarity, not chaos. Using real-time data and precisely mapped spaces, occupants are guided through the safest, fastest escape routes—adapted instantly as conditions change.',
      };
    case 3:
      return {
        left: (
          <Image
            src="/outdoor2Final.png"
            alt="Event Mapping"
            width={300}
            height={500}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        ),
        right:
          'Know where the action is—right on the map. Integrated event tracking transforms static floor plans into dynamic, living maps that show real-time locations of sessions, performances, or meetups. Whether it’s a bustling expo, campus fest, or corporate summit, users can explore, discover, and navigate every moment as it happens.',
      };
    case 4:
      return {
        left: (
          <Image
            src="/arFinal-removebg-preview.png"
            alt="AR Navigation"
            width={300}
            height={500}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        ),
        right:
          'With AR-based indoor navigation, finding your way inside complex buildings—airports, malls, hospitals, or campuses—becomes as intuitive as outdoor GPS. By layering digital directions onto the real world, it guides users turn by turn, floor by floor, delivering seamless, real-time orientation exactly when and where it’s needed.',
      };
    default:
      return { left: '', right: '' };
  }
};

const PaginatedTwoColumnLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  const { left, right } = getContent(currentPage);

  const goPrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <>
    <FadeWrapper keyProp={currentPage}></FadeWrapper>
      <Wrapper>
        <LeftContainer>{left}</LeftContainer>
        <RightContainer>{right}</RightContainer>
      </Wrapper>

      <ArrowNavigation>
        <span onClick={goPrev}>←</span>
        <span onClick={goNext}>→</span>
      </ArrowNavigation>
    </>
  );
};

export default PaginatedTwoColumnLayout;
