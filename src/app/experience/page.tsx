import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience - Mann Shah Portfolio",
  description: "View the professional experience of Mann Shah, including roles at Amazon Web Services, TechnoGuide InfoSoft, and TatvaSoft. Highlights include deployment tracking, mobile app development, and full-stack projects.",
  keywords: "Mann Shah, experience, Amazon Web Services, TechnoGuide InfoSoft, TatvaSoft, software engineer, internships",
  openGraph: {
    title: "Experience - Mann Shah Portfolio",
    description: "View the professional experience of Mann Shah.",
    url: "https://mannshah.vercel.app/experience",
    images: [
      {
        url: "https://mannshah.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Mann Shah Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience - Mann Shah Portfolio",
    description: "View the professional experience of Mann Shah.",
    images: ["https://mannshah.vercel.app/images/profile.png"],
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
