import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects - Mann Shah Portfolio",
  description: "Explore the projects of Mann Shah, including SmartHR, Recommendo, Attendance Management, and more. Showcasing skills in Python, Java, JavaScript, Dart, and machine learning.",
  keywords: "Mann Shah, projects, SmartHR, Recommendo, Attendance Management, Python, Java, JavaScript, Dart, machine learning",
  openGraph: {
    title: "Projects - Mann Shah Portfolio",
    description: "Explore the innovative projects of Mann Shah.",
    url: "https://mannshah.vercel.app/projects",
    images: [
      {
        url: "https://mannshah.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Mann Shah Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Mann Shah Portfolio",
    description: "Explore the innovative projects of Mann Shah.",
    images: ["https://mannshah.vercel.app/images/profile.png"],
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
