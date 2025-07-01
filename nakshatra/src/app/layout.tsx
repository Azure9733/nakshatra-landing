import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakshatra Mapping Solutions|Event Tracking & Operational Efficiency",
  description: "We specialize in geospatial intelligence, enhancing event tracking, improving safety, and optimizing operational efficiency with intuitive, seamless solutions.",
  keywords: "geospatial intelligence, event tracking, operational efficiency, safety solutions, real-time monitoring, location analytics, situational awareness",
  robots: "index, follow",

  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
