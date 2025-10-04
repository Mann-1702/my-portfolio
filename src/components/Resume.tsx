"use client";

import { useState, useEffect } from "react";
import { useNavbar } from "@/context/NavbarContext";

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setIsNavbarVisible } = useNavbar();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsNavbarVisible(!showModal);
  }, [showModal, setIsNavbarVisible]);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-8 py-4 mt-10">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-5xl font-bold mb-6 text-purple-300 font-orbitron drop-shadow-[0_0_15px_rgba(147,51,234,0.8)]">
          My Resume
        </h2>

        {/* Mobile View Button */}
        {isMobile ? (
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 px-8 rounded-xl shadow-2xl border border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] hover:from-purple-700 hover:to-purple-900 mb-8"
          >
            Tap to View My Resume
          </button>
        ) : (
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-8">
            <iframe
              src="/Mann Shah Resume.pdf"
              className="w-full h-[1150px] rounded-lg border-0"
              title="Resume PDF"
            />
          </div>
        )}

        {/* Download Button */}
        <a
          href="/Mann Shah Resume.pdf"
          download
          onClick={handleDownload}
          className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                     5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 
                     5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Downloading...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 
                     01-2-2V5a2 2 0 012-2h5.586a1 1 0 
                     01.707.293l5.414 5.414a1 1 0 
                     01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download Resume
            </>
          )}
        </a>
      </div>

      {/* Modal for Mobile */}
      {showModal && (
        <div
          className="fixed inset-0 z-60 flex items-start justify-center bg-black/80 backdrop-blur-sm pt-2 pb-10"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-purple-900/40 p-4 rounded-xl shadow-xl w-[95%] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/Mann Shah Resume.pdf"
              className="w-full h-full rounded-lg border-0 pt-12"
              title="Resume PDF"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-70 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Close ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
