"use client";

import { useState} from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import styled from "styled-components";
import '@fontsource/orbitron';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const menuItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  { key: "our-maps", label: "Our Maps", href: "/ourmaps" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "about", label: "About Us", href: "/aboutus" },
  { key: "contact", label: "Contact Us", href: "/contactus" },
];

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(99deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 50%, rgba(0,0,0,1) 100%);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const DesktopMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 3rem;
  padding: 0;
  li {
    font-family: 'Orbitron', sans-serif;
  }
  a {
    text-decoration: none;
    color: #7adc40;
    font-weight: 600;
    font-size: 1.1rem;
    transition: transform 0.2s ease-in-out, text-decoration 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    gap: 2rem;
  }
  @media (max-width: 769px) {
    gap: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: 84px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #232323;
  padding: 10px;
  z-index: 1001;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  transition: all 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const StyledHeaderButton = styled(Button)`
  width: clamp(6rem, 8vw, 6.25rem);
  height: clamp(1.8rem, 4vh, 1.8rem);
  font-size: clamp(0.875rem, 1vw, 0.875rem);
  color: white;
  font-family: 'DM Sans', sans-serif;
  background-color: #7adc40;
  border-radius: 1.875rem;
  border: none;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: white !important;
    transform: scale(1.05);
    background-color: #11a5e9 !important;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();


  return (
    <Navbar>
      <Image
        src="/logo6.png"
        alt="Company Logo"
        width={250}
        height={45}
        priority
        role="img"
      />

      {/* Desktop Menu */}
      <DesktopMenu>
        {menuItems.slice(0, -1).map(({ key, label, href }) => (
          <li key={key}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <li>
          <StyledHeaderButton onClick={() => router.push('/contactus')}>
            Contact Us
          </StyledHeaderButton>
        </li>
      </DesktopMenu>

      {/* Mobile Menu Button */}
      <MobileMenuButton
        type="text"
        icon={
          menuOpen ? (
            <CloseOutlined style={{ color: "#7adc40", fontSize: "28px" }} />
          ) : (
            <MenuOutlined style={{ color: "#7adc40", fontSize: "28px" }} />
          )
        }
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Mobile Menu */}
      <MobileMenu $isOpen={menuOpen}>
        <Menu
          mode="vertical"
          theme="dark"
          items={menuItems.map(({ key, label, href }) => ({
            key,
            label: (
              <Link href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ),
          }))}
          style={{
            background: "transparent",
            color: "#ffffff",
            borderRight: "none",
            textAlign: "center",
            fontFamily: "DM Sans",
            fontSize: "1.5rem",
          }}
        />
      </MobileMenu>
    </Navbar>
  );
}