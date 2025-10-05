import Hero from "@/components/Hero";

export const metadata = {
  title: "Mann Shah Portfolio - Software Development Engineer",
  description: "Welcome to the portfolio of Mann Shah, a Software Development Engineer specializing in Python, Java, JavaScript, and Dart. Explore my projects, experience, and resume.",
  keywords: "Mann Shah, portfolio, software engineer, full stack developer, Python, Java, JavaScript, Dart, machine learning, web development",
  openGraph: {
    title: "Mann Shah Portfolio - Software Development Engineer",
    description: "Welcome to the portfolio of Mann Shah.",
    url: "https://mannshah.vercel.app",
    images: [
      {
        url: "https://mannshah.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Mann Shah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mann Shah Portfolio - Software Development Engineer",
    description: "Welcome to the portfolio of Mann Shah.",
    images: ["https://mannshah.vercel.app/images/profile.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
