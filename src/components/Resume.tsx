"use client";

import { useState } from "react";

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download delay
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-purple-300 font-orbitron animate-fade-in" style={{ textShadow: '0 0 15px rgba(147,51,234,0.8)' }}>
            My Resume
          </h2>
        </div>

        <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-8">
          <iframe
            src="/Mann Shah Resume.pdf"
            className="w-full h-[600px] md:h-[1150px] rounded-lg border-0"
            title="Resume PDF"
          />
        </div>

        <div className="text-center">
          <a
            href="/Mann Shah Resume.pdf"
            download
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
