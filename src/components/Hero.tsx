"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const words = ["Software Development Engineer", "Full Stack Developer"];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayedText.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(words[wordIndex].slice(0, displayedText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100);
      } else {
        setTyping(true);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, wordIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMousePos({ x: e.clientX - centerX, y: e.clientY - centerY });
  };

  const angleX = isHovering ? (mousePos.y / 80) * -10 : 0; // max 10deg
  const angleY = isHovering ? (mousePos.x / 128) * 10 : 0;

  const transform = isHovering
    ? `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(30px) scale(1.1)`
    : "scale(1)";

  return (
    <section className="min-h-screen flex items-start justify-center px-8 pt-16">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <div className="text-left max-w-xl">
          <h1 className="text-4xl font-bold mb-6 text-purple-300 font-orbitron animate-fade-in" style={{ textShadow: '0 0 10px rgba(147,51,234,0.5)' }}>
            Hi, I&apos;m Mann Shah
          </h1>
          <h2 className="text-3xl font-light text-purple-200 h-12 font-orbitron animate-slide-up" style={{ animationDelay: '0.5s' }}>
            I&apos;m a <span className="border-r-2 border-purple-400 pr-2">{displayedText}</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-purple-300 font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.5s', textShadow: '0 0 5px rgba(255,255,255,0.3)' }}>
            <br />
            <span className="font-semibold animate-fade-in" style={{ animationDelay: '1s', display: 'block' }}>
              I code in <code className="font-mono">Python</code>, <code className="font-mono">Java</code>, <code className="font-mono">JavaScript</code>, and <code className="font-mono">Dart</code> — currently geeking out on Distributed Systems and getting lost in the world of LLMs.
            </span>
            <br />
          <span className="font-semibold animate-fade-in" style={{ animationDelay: '2.5s', display: 'block' }}>
            <code className="font-mono">My focus?</code><br />Building products that scale, perform, and make people go "damn, that&apos;s cool."
          </span>
          </p>
          <Link href="/about" className="mt-8 inline-block text-purple-300 hover:text-purple-200 transition-colors duration-300 group italic font-semibold">
            Learn more about me
            <span className="block w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <Image
          src="/images/Mann Photo1.jpg"
          alt="Mann Shah"
          width={384}
          height={512}
          priority
          className="w-96 h-128 rounded-lg object-cover shadow-2xl shadow-purple-500/50 transition-all duration-200"
          style={{ transform }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      </div>
    </section>
  );
}
