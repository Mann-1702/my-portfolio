import React from "react";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "SmartHR (Flutter + Firebase)",
    description:
      "Built a mobile app from scratch, streamlining workflows for 1,000+ employees and saving the company $1M annually. Achieved a 95% crash-free rate and boosted performance by 30%.",
    githubLink: "https://github.com/Mann-1702/SmartHR",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
  },
  {
    title: "Recommendo – GPT-Powered Playlist Generator (Python + LLMs)",
    description:
      "A mood-based playlist generator powered by LangChain, LlamaIndex, and GPT-3.5, it semantically searches a dataset of 10K+ songs to deliver personalized recommendations that feel like chatting with a DJ.",
    githubLink: "https://github.com/meetshah27/Recommendo/tree/main",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
  },
  {
    title: "Attendance Management Using Face Recognition (Python + OpenCV + Firebase)",
    description:
      "Face-recognition-based attendance system with 98% accuracy. Integrated with Firebase for secure storage of data and logs, real-time automation. Marks attendance in less than 2 seconds.",
    githubLink: "https://github.com/Mann-1702/Attendance-Management-Using-Face-Recognition",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
  },
  {
    title: "Bookstore Web App (React + Node.js + PostgreSQL)",
    description:
      "Full-stack bookstore platform managing 1,000+ books and 200 daily users. Optimized APIs for 20% faster responses and cut load times by 40%.",
    githubLink: "https://github.com/Mann-1702/BookStore-WebApp",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
  },
  {
    title: "Phishing Website Detection (Python + ML + FastAPI)",
    description:
      "Machine learning model with 98% accuracy to detect phishing websites. Published research in IJFMR, validating real-world effectiveness.",
    githubLink: "https://github.com/Mann-1702",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
  },
  {
    title: "HDMI Sports Website (ASP.NET + Azure)",
    description:
      "Sports platform with CRUD operations and real-time score integration. Increased user engagement by 30% and cut backend response time by 15%.",
    githubLink: "https://github.com/Mann-1702/HDMI",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop",
  },
  {
    title: "Graduate Admission Prediction (Python + Tkinter)",
    description:
      "Predictive model with 95% accuracy to estimate graduate admission chances. Packaged with a simple GUI for easy student use.",
    githubLink: "https://github.com/Mann-1702/MachineLearningProjects",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop",
  },
];

export default function ProjectBoxes() {
  return (
    <section className="py-12 px-8 bg-black/20 rounded-lg shadow-lg">
      <h3 className="text-5xl font-bold mb-8 text-purple-300 font-mono text-center animate-fade-in" style={{ textShadow: '0 0 15px rgba(147,51,234,0.8)' }}>
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, githubLink, imageUrl }) => (
          <div
            key={title}
            className="p-6 bg-purple-900/30 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_rgba(147,51,234,0.7)] hover:scale-105 transition-shadow transition-transform duration-500 ease-in-out flex flex-col justify-between"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-4 text-white font-mono text-left" style={{ textShadow: '0 0 5px rgba(255,255,255,0.3)' }}>{title}</h4>
            <p className="text-purple-200 mb-6 whitespace-pre-line text-justify">{description}</p>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded text-white font-semibold transition-colors duration-300 text-center self-center"
            >
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                alt="GitHub"
                width="20"
                height="20"
              />
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
