"use client";

import { useState } from "react";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import '@fontsource/orbitron';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import type { MenuProps } from "antd";

const GlobalStyles = createGlobalStyle`
  .ant-dropdown-menu {
    background-color: #000 !important;
    border-radius: 10px;
  }

  .ant-dropdown-menu-item {
    font-family: 'Orbitron', sans-serif;
    color: #7adc40 !important;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
  }

  .ant-dropdown-menu-item:hover {
    background-color: #111 !important;
  }

  .ant-menu-submenu-title {
    color: #7adc40 !important;
  }

  .ant-menu-item, .ant-menu-submenu {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-family: 'Orbitron', sans-serif;
    color: #7adc40 !important;
  }

  .ant-menu-item:hover {
    background-color: #111 !important;
  }
`;

const menuItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "solutions", label: "Solutions", href: "/solutions", hasDropdown: true },
  { key: "our-maps", label: "Our Maps", href: "/ourmaps", hasDropdown: true },
  { key: "resources", label: "Pricing", href: "/pricing" },
  { key: "about", label: "About Us", href: "/aboutus" },
  { key: "contact", label: "Contact Us", href: "/contactus" },
];

const solutionsDropdownItems = [
  { key: "solution1", label: "Malls", href: "/solutions/malls" },
  { key: "solution2", label: "Tourism", href: "/solutions/tourism" },
  { key: "solution3", label: "Education", href: "/solutions/education" },
  { key: "solution4", label: "Corporate", href: "/solutions/corporate" },
];

const ourMapsDropdownItems = [
  { key: "map1", label: "MIT", href: "https://mit.nakshatramaps.com/" },
  { key: "map2", label: "MIT revels", href: "https://openhorizonrobotics.github.io/" },
  { key: "map3", label: "MIT Static Map", href: "/MapMIT v2.0.pdf" },
];

const dropdownMenu = {
  items: solutionsDropdownItems.map(({ key, label, href }) => ({
    key,
    label: (
      <Link href={href} style={{ color: '#7adc40', textDecoration: 'none' }}>
        {label}
      </Link>
    ),
  })),
};

const ourMapsDropdownMenu = {
  items: ourMapsDropdownItems.map(({ key, label, href }) => ({
    key,
    label: (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        style={{ color: '#7adc40', textDecoration: 'none' }}
      >
        {label}
      </Link>
    ),
  })),
};

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(8px, 1.5vh, 16px) clamp(16px, 4vw, 40px);
  background: linear-gradient(99deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 50%, rgba(0,0,0,1) 100%);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  min-height: clamp(60px, 8vh, 84px);
`;

const DesktopMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  gap: clamp(1rem, 4vw, 3rem);
  padding: 0;
  margin: 0;
  
  li {
    font-family: 'Orbitron', sans-serif;
  }

  a {
    text-decoration: none;
    color: #7adc40;
    font-weight: 600;
    font-size: clamp(0.9rem, 1.2vw, 1.1rem);
    transition: transform 0.2s ease-in-out, text-decoration 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownTrigger = styled.span`
  text-decoration: none;
  color: #7adc40;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  transition: transform 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: clamp(0.3rem, 0.5vw, 0.5rem);

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  width: clamp(40px, 6vw, 48px);
  height: clamp(40px, 6vw, 48px);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: clamp(60px, 8vh, 84px);
  left: 0;
  width: 100%;
  height: calc(100vh - clamp(60px, 8vh, 84px));
  background: #232323;
  padding: clamp(10px, 2vh, 20px);
  z-index: 1001;
  border-bottom-left-radius: clamp(20px, 4vw, 30px);
  border-bottom-right-radius: clamp(20px, 4vw, 30px);
  transition: all 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const StyledHeaderButton = styled(Button)`
  width: clamp(5rem, 8vw, 7rem);
  height: clamp(1.6rem, 4vh, 2rem);
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  color: white;
  font-family: 'DM Sans', sans-serif;
  background-color: #7adc40;
  border-radius: clamp(1.2rem, 3vw, 1.875rem);
  border: none;
  padding: clamp(0.3rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1.5rem);
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

  const mobileMenuItems: MenuProps['items'] = [
    ...menuItems.slice(0, -1).map(({ key, label, href }) => {
      if (key === "solutions") {
        return {
          key,
          label,
          children: solutionsDropdownItems.map(({ key: subKey, label: subLabel, href: subHref }) => ({
            key: subKey,
            label: (
              <Link href={subHref} onClick={() => setMenuOpen(false)} style={{ color: '#7adc40' }}>
                {subLabel}
              </Link>
            ),
          })),
        };
      }
      if (key === "our-maps") {
        return {
          key,
          label,
          children: ourMapsDropdownItems.map(({ key: subKey, label: subLabel, href: subHref }) => ({
            key: subKey,
            label: (
              <Link
                href={subHref}
                target={subHref.startsWith("http") ? "_blank" : undefined}
                onClick={() => setMenuOpen(false)}
                style={{ color: '#7adc40' }}
              >
                {subLabel}
              </Link>
            ),
          })),
        };
      }
      return {
        key,
        label: (
          <Link href={href} onClick={() => setMenuOpen(false)} style={{ color: '#7adc40' }}>
            {label}
          </Link>
        ),
      };
    }),
    {
      key: 'contact-mobile',
      label: (
        <StyledHeaderButton onClick={() => {
          router.push('/contactus');
          setMenuOpen(false);
        }}>
          Contact Us
        </StyledHeaderButton>
      ),
    }
  ];

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <Image
          src="/logo6.png"
          alt="Company Logo"
          width={0}
          height={0}
          sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 250px"
          style={{
            width: 'clamp(160px, 20vw, 250px)',
            height: 'auto',
            maxHeight: 'clamp(30px, 5vh, 45px)',
            objectFit: 'contain'
          }}
          priority
          role="img"
        />

        <DesktopMenu>
          {menuItems.slice(0, -1).map(({ key, label, href }) => {
            const isSolutions = key === "solutions";
            const isOurMaps = key === "our-maps";

            return (
              <li key={key}>
                {isSolutions ? (
                  <Dropdown menu={dropdownMenu} trigger={['hover']} placement="bottomLeft">
                    <DropdownTrigger>
                      {label} <DownOutlined style={{ fontSize: `clamp(10px, 1.2vw, 12px)` }} />
                    </DropdownTrigger>
                  </Dropdown>
                ) : isOurMaps ? (
                  <Dropdown menu={ourMapsDropdownMenu} trigger={['hover']} placement="bottomLeft">
                    <DropdownTrigger>
                      {label} <DownOutlined style={{ fontSize: `clamp(10px, 1.2vw, 12px)` }} />
                    </DropdownTrigger>
                  </Dropdown>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </li>
            );
          })}
          <li>
            <StyledHeaderButton onClick={() => router.push('/contactus')}>
              Contact Us
            </StyledHeaderButton>
          </li>
        </DesktopMenu>

        <MobileMenuButton
          type="text"
          icon={
            menuOpen ? (
              <CloseOutlined style={{ color: "#7adc40", fontSize: `clamp(20px, 4vw, 28px)` }} />
            ) : (
              <MenuOutlined style={{ color: "#7adc40", fontSize: `clamp(20px, 4vw, 28px)` }} />
            )
          }
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <MobileMenu $isOpen={menuOpen}>
          <Menu
            mode="vertical"
            theme="dark"
            items={mobileMenuItems}
            style={{
              background: "transparent",
              borderRight: "none",
              textAlign: "center",
            }}
          />
        </MobileMenu>
      </Navbar>
    </>
  );
}
