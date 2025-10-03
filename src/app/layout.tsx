import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export const metadata = {
  title: "Mann Shah Portfolio",
  description: "Personal portfolio website",
};

import { Orbitron, Inter, Josefin_Sans } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/profile.png" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${josefin.variable} flex flex-col min-h-screen bg-black font-josefin`}>
        <Background />
        <Navbar />
        <div className="pt-20 relative z-10 flex-grow">{/* push content below navbar */}</div>
        <div className="relative z-10 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
