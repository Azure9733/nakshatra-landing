"use client";

import React from 'react';
import styled from 'styled-components';
import '@fontsource/orbitron';
import '@fontsource/dm-sans';
import { FerrisWheel, Plane, Receipt, Landmark, University, Hospital } from 'lucide-react';


const Container = styled.div`
  background-color: #000;
  padding: clamp(2rem, 4vw, 3rem);
  font-family: 'DM Sans', sans-serif;
  color: white;
`;

const Heading = styled.div`
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 600;
  margin-bottom: 3rem;
  line-height: 1.5;
  font-family: 'Orbitron', sans-serif;
  color: #e0e0e0;

  span {
    display: block;
    background: linear-gradient(to right, #7adc40, #b6f68c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 230px;
  box-sizing: border-box;
`;

const RegionTitle = styled.div`
  margin-bottom: 0;
  padding-bottom: 1.0;
  font-size: clamp(1.75rem, 2vw, 1.5rem);
  color: #bafc8a;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledList = styled.ul`
  margin: 0;
  padding-left: 1.5rem;
  padding-top: 4;
  list-style-type: disc;
  list-style-position: outside;
  margin-top: -0.5rem; /* negative margin to pull list up closer */

  li {
    margin: 0;
    padding: 0;
    line-height: 2.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;





const MyComponent: React.FC = () => {
  return (
    <Container>
      <Heading>
        Lost on campus? Missed events? Unsure where to exit during a fire?
        <span>We make navigation easy, events visible, and emergencies safer.</span>
      </Heading>
      <Grid>
        <Card>
          <RegionTitle><Plane size={20} />Airports</RegionTitle>
          <StyledList>
            <li>Gate, lounge, baggage navigation</li>
            <li>Quick access to food & shops</li>
            <li>Assist passengers & staff</li>
          </StyledList>
        </Card>
        <Card>
          <RegionTitle><Receipt size={20} />Malls & Retail</RegionTitle>
          <StyledList>
            <li>Locate stores & amenities</li>
            <li>Show live offers on map</li>
            <li>Drive footfall with promos</li>
          </StyledList>
        </Card>
        <Card>
          <RegionTitle><University size={20} />Universities</RegionTitle>
          <StyledList>
            <li>Navigate classrooms & labs</li>
            <li>View live event locations</li>
            <li>Assist students & visitors</li>
          </StyledList>
        </Card>
        <Card>
          <RegionTitle><FerrisWheel size={20} />Theme Parks</RegionTitle>
          <StyledList>
            <li>Map rides, shows, food zones</li>
            <li>Track wait times & paths</li>
            <li>Improve visitor flow</li>
          </StyledList>
        </Card>
        <Card>
          <RegionTitle><Hospital size={20} />Hospitals</RegionTitle>
          <StyledList>
            <li>Find wards, OPDs, diagnostics</li>
            <li>Emergency routes for staff</li>
            <li>Smart evacuation support</li>
          </StyledList>
        </Card>
        <Card>
          <RegionTitle><Landmark size={20} />Campuses</RegionTitle>
          <StyledList>
            <li>Department-level navigation</li>
            <li>Appointment & counter info</li>
            <li>Emergency guidance system</li>
          </StyledList>
        </Card>
      </Grid>
    </Container>
  );
};

export default MyComponent;
