import Resume from "@/components/Resume";

export const metadata = {
  title: "Resume - Mann Shah Portfolio",
  description: "Download or view the resume of Mann Shah, a Software Development Engineer. Includes details on skills, experience, and projects in Python, Java, JavaScript, and Dart.",
  keywords: "Mann Shah, resume, download, software engineer, skills, experience, projects",
  openGraph: {
    title: "Resume - Mann Shah Portfolio",
    description: "Download or view the resume of Mann Shah.",
    url: "https://mannshah.vercel.app/resume",
    images: [
      {
        url: "https://mannshah.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Mann Shah Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Mann Shah Portfolio",
    description: "Download or view the resume of Mann Shah.",
    images: ["https://mannshah.vercel.app/images/profile.png"],
  },
};

export default function ResumePage() {
  return <Resume />;
}
