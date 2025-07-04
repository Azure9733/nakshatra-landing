/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { Divider, List } from "antd";
import '@fontsource/orbitron';
import styled from "styled-components";
import { InstagramOutlined, LinkedinOutlined, YoutubeOutlined, XOutlined } from "@ant-design/icons";
import Link from "next/link";



const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%; /* Take full width */
  margin-left: auto; /* Push to the right */
  

  @media (max-width: 768px) {
    gap: 10px; /* Reduce gap for smaller screens */
  }

  svg {
    font-size: 32px; /* Bigger icons */
    color: #7adc40;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #11a5e9 /* Change color on hover */
    }
  }
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #121212;
    padding: 20px;
    gap: 20px;
    margin-top: 5rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const StyledList = styled(List)`
    width: 100%;
    max-width: 250px;
    border: none !important;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    .ant-list-bordered {
        border: none !important;
    }

    .ant-list-header {
        color: #7adc40 !important;
        font-family: "Orbitron", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        text-align: left;
        border: none !important;
    }

    .ant-list-item {
        border: none !important;
    }
`;

const ListItemLink = styled.a`
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
    font-family: 'DM Sans', sans-serif;

    &:hover {
        color: #7adc40;
        text-decoration: underline;
    }
`;



export default function Footer() {
    return (
        <FooterContainer>
            <StyledList size="small" bordered header="COMPANY">
                <List.Item><ListItemLink href="/aboutus">About Us</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/contactus">Contact</ListItemLink></List.Item>
            </StyledList>

            <StyledList size="small" bordered header="SOLUTIONS">
                <List.Item><ListItemLink href="/intmapp">Interactive Mapping</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/indoormap">Indoor mapping</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/eventtrack">Event Tracking</ListItemLink></List.Item>
               
            </StyledList>

            <StyledList size="small" bordered header="OUR MAPS">
                <List.Item><ListItemLink href="https://mit.nakshatramaps.com/" target="_blank">MIT</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/MapMIT v2.0.pdf" target="_blank">MIT Static Map</ListItemLink></List.Item>
                <List.Item><ListItemLink href="https://openhorizonrobotics.github.io/" target="_blank">MIT Revels Map</ListItemLink></List.Item>
            </StyledList>

            <StyledList size="small" bordered header="RESOURCES">
                <List.Item><ListItemLink href="/blogs">Blogs</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/API">API</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/FAQ">FAQ</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/developers">Developers</ListItemLink></List.Item>
                <List.Item><ListItemLink href="/documentation">Docs</ListItemLink></List.Item>
            </StyledList>

            <Divider
                style={{
                    borderTop: "1px solid grey",
                    opacity: "0.33"
                }}
            />
             <SocialContainer>
                
             <Link href="https://www.instagram.com/nakshatra.maps/" target="_blank" rel="noopener noreferrer">
             <InstagramOutlined />
             </Link>
      <Link href="https://www.linkedin.com/company/nakshatra-mapping-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      <LinkedinOutlined />
      </Link>
    </SocialContainer>
            © 2025 Nakshatra Mapping Solutions Pvt. Ltd. All rights reserved.
            
        </FooterContainer>
    );
}
