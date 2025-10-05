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
        <meta name="description" content="Personal portfolio website of Mann Shah, a Software Development Engineer specializing in Python, Java, JavaScript, and Dart. Explore my projects, experience, and resume." />
        <meta name="keywords" content="Mann Shah, portfolio, software engineer, full stack developer, Python, Java, JavaScript, Dart, machine learning, web development" />
        <meta name="author" content="Mann Shah" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mannshah.vercel.app" />
        <link rel="icon" href="/images/profile.png" />
        <meta property="og:title" content="Mann Shah Portfolio" />
        <meta property="og:description" content="Personal portfolio website of Mann Shah, a Software Development Engineer." />
        <meta property="og:image" content="https://mannshah.vercel.app/images/profile.png" />
        <meta property="og:url" content="https://mannshah.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mann Shah Portfolio" />
        <meta name="twitter:description" content="Personal portfolio website of Mann Shah, a Software Development Engineer." />
        <meta name="twitter:image" content="https://mannshah.vercel.app/images/profile.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mann Shah",
            "jobTitle": "Software Development Engineer",
            "url": "https://mannshah.vercel.app",
            "sameAs": [
              "https://github.com/Mann-1702",
              "https://www.linkedin.com/in/mannshah1702/"
            ],
            "knowsAbout": ["Python", "Java", "JavaScript", "Dart", "Machine Learning", "Web Development", "Distributed Systems", "LLMs"]
          })}
        </script>
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
