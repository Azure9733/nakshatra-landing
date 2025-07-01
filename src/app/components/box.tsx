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
  padding: clamp(2rem, 4vw, 3rem) 2rem clamp(4rem, 8vw, 6rem) 2rem;
  height: 60vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;



const LeftBox = styled.div`
  flex: 1;
  max-width: 31%;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const RightBox = styled.div`
  flex: 3;
  max-width: 69%;
  border: 0.5px solid grey;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  grid-template-rows: auto 1px auto;
  gap: 10px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const RegionBox = styled.div`
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const VerticalDivider = styled.div`
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HorizontalDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    display: none;
  }
`;



const RegionTitle = styled.div`
  font-family: 'Orbitron', sans-serif;
  color: #7adc40;
  font-size: 25px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px;
`;

const StyledList = styled.ul`
  font-family: 'DM Sans', sans-serif;
  color: white;
  text-align: left;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  font-size: 16px;

  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`;


const MyComponent: React.FC = () => {
  return (
    <Container>
      <LeftBox>
        <Title
  level={2}
  style={{
    color: 'white',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '33px',
    lineHeight: '1.6' // Adjust this value as needed
  }}
>
  Run a campus or a large facility? Unsure on managing the logistical nightmares during emergency evacuations?
</Title>

      </LeftBox>

      <RightBox>
        {/* Row 1 */}
        <RegionBox style={{ gridColumn: 1, gridRow: 1 }}>
          <RegionTitle>
            Airports <Plane size={25} />
          </RegionTitle>
          <StyledList>
            <li>Gate, lounge, baggage navigation</li>
            <li>Quick access to food and shops</li>
            <li>Assist passengers and staff</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: 2, gridRow: 1 }} />

        <RegionBox style={{ gridColumn: 3, gridRow: 1 }}>
          <RegionTitle>
            Malls & Retail <Receipt size={25} />
          </RegionTitle>
          <StyledList>
            <li>Locate stores and amenities</li>
            <li>Show live offers on the map</li>
            <li> Drive footfall with promotions</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: 4, gridRow: 1 }} />

        <RegionBox style={{ gridColumn: 5, gridRow: 1 }}>
          <RegionTitle>
            Universities <University size={25} />
          </RegionTitle>
          <StyledList>
            <li>Navigate classrooms and labs</li>
            <li>View live event locations</li>
            <li>Help students and visitors</li>
          </StyledList>
        </RegionBox>

        {/* Divider Row */}
        <HorizontalDivider style={{ gridRow: 2 }} />

        {/* Row 2 */}
        <RegionBox style={{ gridColumn: 1, gridRow: 3 }}>
          <RegionTitle>
            Theme parks <FerrisWheel size={25} />
          </RegionTitle>
          <StyledList>
            <li>Map rides, shows, food zones</li>
            <li>Track wait times and paths</li>
            <li>Improve visitor flow</li>
          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: 2, gridRow: 3 }} />

        <RegionBox style={{ gridColumn: 3, gridRow: 3 }}>
          <RegionTitle>
            Hospitals <Hospital size={25} />
          </RegionTitle>
          <StyledList>
            <li> Find wards, OPDs, diagnostics</li>
            <li>Emergency routes for patients/staff</li>
            <li>Smart evacuation support</li>

          </StyledList>
        </RegionBox>

        <VerticalDivider style={{ gridColumn: 4, gridRow: 3 }} />

        <RegionBox style={{ gridColumn: 5, gridRow: 3 }}>
          <RegionTitle>
            Campuses<Landmark size={25} />
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

export default MyComponent;
