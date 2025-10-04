"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import { useState } from "react";
import { NavbarProvider } from "@/context/NavbarContext";

import { Orbitron, Inter, Josefin_Sans } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Mann Shah Portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <link rel="icon" href="/images/profile.png" />
      </head>
      <NavbarProvider>
        <body className={`${inter.variable} ${orbitron.variable} ${josefin.variable} flex flex-col min-h-screen bg-black font-josefin`} onClick={() => setIsOpen(false)}>
          <Background />
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="pt-20 relative z-10 flex-grow">{/* push content below navbar */}</div>
          <div className="relative z-10 flex-grow">{children}</div>
          <Footer />
        </body>
      </NavbarProvider>
    </html>
  );
}
