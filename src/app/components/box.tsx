"use client";
import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import '@fontsource/orbitron';
import '@fontsource/dm-sans';
import { FerrisWheel, Plane, Receipt, Landmark, University, Hospital } from 'lucide-react';

const { Title } = Typography;

const Container = styled.div`
  display: flex;
  background-color: #000;
  padding: clamp(1rem, 3vw, 2rem);
  min-height: fit-content; /* Changed from fixed height */
  width: 100%;
  box-sizing: border-box;
  gap: clamp(1rem, 2vw, 2rem);

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: clamp(1rem, 4vw, 1.5rem);
    gap: 1rem;
  }
`;

const LeftBox = styled.div`
  flex: 0 0 clamp(280px, 30%, 400px); /* Better flex control */
  padding: clamp(1rem, 2vw, 1.5rem);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 1024px) {
    flex: none;
    text-align: center;
    padding: 1rem 0;
  }
`;

const RightBox = styled.div`
  flex: 1;
  min-width: 0; /* Prevents flex item overflow */
  border: 0.5px solid grey;
  border-radius: 10px;
  padding: clamp(1rem, 2vw, 1.5rem);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-sizing: border-box;
  overflow: hidden; /* Prevent content overflow */

  /* Desktop: 2x3 grid */
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    grid-template-rows: auto 1px auto;
    gap: clamp(0.5rem, 1vw, 1rem);
  }

  /* Tablet: 3x2 grid */
  @media (min-width: 769px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    grid-template-rows: auto 1px auto;
    gap: clamp(0.5rem, 1.5vw, 1rem);
  }

  /* Mobile: 6x1 stack */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

const RegionBox = styled.div`
  padding: clamp(0.5rem, 1vw, 1rem);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 0; /* Prevents text overflow */
  word-wrap: break-word;

  /* Mobile: add separators */
  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 1rem;
    
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  height: auto;

  /* Hide on mobile only */
  @media (max-width: 768px) {
    display: none;
  }
`;

const HorizontalDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  grid-column: 1 / -1;

  /* Hide on mobile only */
  @media (max-width: 768px) {
    display: none;
  }
`;

const RegionTitle = styled.div`
  font-family: 'Orbitron', sans-serif;
  color: #7adc40;
  font-size: clamp(18px, 3vw, 24px); /* Responsive font size */
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  display: flex;
  align-items: center;
  gap: clamp(4px, 1vw, 8px);
  padding: 5px 0;
  word-wrap: break-word;

  svg {
    flex-shrink: 0; /* Prevent icon from shrinking */
  }
`;

const StyledList = styled.ul`
  font-family: 'DM Sans', sans-serif;
  color: white;
  text-align: left;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  font-size: clamp(14px, 2vw, 16px);

  li {
    margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word; /* Better text wrapping */
  }
`;

const StyledTitle = styled(Title)`
  && {
    color: white !important;
    font-family: 'DM Sans', sans-serif !important;
    font-size: clamp(20px, 4vw, 32px) !important;
    line-height: 1.4 !important;
    margin: 0 !important;
    word-wrap: break-word;
    
    @media (max-width: 768px) {
      font-size: clamp(18px, 5vw, 24px) !important;
      line-height: 1.3 !important;
    }
  }
`;

const MyComponent: React.FC = () => {
  return (
    <Container>
      <LeftBox>
        <StyledTitle level={2}>
          Lost on campus? Missed events? Unsure where to exit during a fire? We make navigation easy, events visible, and emergencies safer.
        </StyledTitle>
      </LeftBox>

      <RightBox>
        {/* Row 1 */}
        <RegionBox style={{ gridColumn: '1', gridRow: '1' }}>
          <RegionTitle>
            Airports <Plane size={clamp(20, 25, 30)} />
          </RegionTitle>
          <StyledList>
            <li>Gate, lounge, baggage navigation</li>
            <li>Quick access to food and shops</li>
            <li>Assist passengers and staff</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: '2', gridRow: '1' }} />

        <RegionBox style={{ gridColumn: '3', gridRow: '1' }}>
          <RegionTitle>
            Malls & Retail <Receipt size={clamp(20, 25, 30)} />
          </RegionTitle>
          <StyledList>
            <li>Locate stores and amenities</li>
            <li>Show live offers on the map</li>
            <li>Drive footfall with promotions</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: '4', gridRow: '1' }} />

        <RegionBox style={{ gridColumn: '5', gridRow: '1' }}>
          <RegionTitle>
            Universities <University size={clamp(20, 25, 30)} />
          </RegionTitle>
          <StyledList>
            <li>Navigate classrooms and labs</li>
            <li>View live event locations</li>
            <li>Help students and visitors</li>
          </StyledList>
        </RegionBox>

        {/* Divider Row */}
        <HorizontalDivider style={{ gridRow: '2' }} />

        {/* Row 2 */}
        <RegionBox style={{ gridColumn: '1', gridRow: '3' }}>
          <RegionTitle>
            Theme parks <FerrisWheel size={clamp(20, 25, 30)} />
          </RegionTitle>
          <StyledList>
            <li>Map rides, shows, food zones</li>
            <li>Track wait times and paths</li>
            <li>Improve visitor flow</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: '2', gridRow: '3' }} />

        <RegionBox style={{ gridColumn: '3', gridRow: '3' }}>
          <RegionTitle>
            Hospitals <Hospital size={clamp(20, 25, 30)} />
          </RegionTitle>
          <StyledList>
            <li>Find wards, OPDs, diagnostics</li>
            <li>Emergency routes for patients/staff</li>
            <li>Smart evacuation support</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: '4', gridRow: '3' }} />

        <RegionBox style={{ gridColumn: '5', gridRow: '3' }}>
          <RegionTitle>
            Campuses <Landmark size={clamp(20, 25, 30)} />
          </RegionTitle>
          <StyledList>
            <li>Department-level navigation</li>
            <li>Appointment and counter info</li>
            <li>Emergency guidance system</li>
          </StyledList>
        </RegionBox>
      </RightBox>
    </Container>
  );
};

// Utility function for clamp in JS (for icon sizes)
const clamp = (min: number, preferred: number, max: number) => {
  return Math.max(min, Math.min(preferred, max));
};

export default MyComponent;