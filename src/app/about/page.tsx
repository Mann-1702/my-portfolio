import About from "@/components/About";

export const metadata = {
  title: "About Me - Mann Shah Portfolio",
  description: "Learn more about Mann Shah, a Software Development Engineer with expertise in Python, Java, JavaScript, and Dart. Discover my background, skills, and passion for technology.",
  keywords: "Mann Shah, about, software engineer, skills, background, Python, Java, JavaScript, Dart",
  openGraph: {
    title: "About Me - Mann Shah Portfolio",
    description: "Learn more about Mann Shah, a Software Development Engineer.",
    url: "https://mannshah.vercel.app/about",
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
    title: "About Me - Mann Shah Portfolio",
    description: "Learn more about Mann Shah, a Software Development Engineer.",
    images: ["https://mannshah.vercel.app/images/profile.png"],
  },
};

export default function AboutPage() {
  return <About />;
}
