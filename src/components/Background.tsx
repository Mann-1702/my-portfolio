"use client";

import { useEffect, useState } from "react";

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-purple-800 animate-pulse z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-600/20 via-transparent to-purple-400/20 animate-bounce z-0" style={{ animationDuration: '10s' }}></div>

      {/* Floating Shapes */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full animate-float z-0"></div>
      <div className="fixed bottom-20 right-20 w-24 h-24 bg-purple-400/20 rounded-full animate-float-delayed z-0"></div>
      <div className="fixed top-1/2 left-10 w-16 h-16 bg-purple-600/15 rounded-full animate-float z-0"></div>

      {/* Mouse Follower */}
      <div
        className="fixed w-64 h-64 bg-purple-500/5 rounded-full pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePos.x - 128,
          top: mousePos.y - 128,
        }}
      ></div>
    </>
  );
}
