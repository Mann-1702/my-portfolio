"use client";

import Link from "next/link";
import { useNavbar } from "@/context/NavbarContext";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const { isNavbarVisible } = useNavbar();

  return (
    <nav className={`fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg shadow z-50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 ${isNavbarVisible ? '' : 'opacity-0 pointer-events-none'}`} onClick={(e) => e.stopPropagation()}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-purple-300 font-orbitron">
          Mann Shah
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-purple-200">
          <Link href="/" className="hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Home</Link>
          <Link href="/about" className="hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">About</Link>
          <Link href="/experience" className="hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Experience</Link>
          <Link href="/projects" className="hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Projects</Link>
          <Link href="/resume" className="hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Resume</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/60 px-6 py-4 space-y-4 shadow" onClick={(e) => e.stopPropagation()}>
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-purple-200 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-purple-200 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">About</Link>
          <Link href="/experience" onClick={() => setIsOpen(false)} className="block text-purple-200 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Experience</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block text-purple-200 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Projects</Link>
          <Link href="/resume" onClick={() => setIsOpen(false)} className="block text-purple-200 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-900/20 hover:border-b-2 hover:border-purple-400 transition-all duration-300 px-2 py-1 rounded font-orbitron">Resume</Link>
        </div>
      )}
    </nav>
  );
}
