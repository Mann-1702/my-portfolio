import React from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services, Inc.",
    location: "East Palo Alto, CA",
    dateRange: "June 2025 – September 2025",
    description: [
      "Built an automated end-to-end deployment tracking and Slack notification system to monitor PADB deployments across 35+ regions.",
      "Developed production-ready infrastructure with AWS CDK for automated provisioning (SQS, Lambda, VPC, cross-account IAM roles).",
      "Integrated existing deployment scripts with SQS to capture deployment metadata for QuickSight dashboard and automated Slack messages.",
      "Designed a QuickSight dashboard with key metrics enabling stakeholders to easily analyze deployment data and make informed decisions.",
      "Automated Slack messages for deployment updates to stakeholders, saving 8 days annually for developers and enabling real-time visibility."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TechnoGuide InfoSoft Pvt. Ltd.",
    location: "India",
    dateRange: "Dec 2023 – April 2024",
    description: [
      "Developed a Smart HR mobile app with Flutter and Firebase, saving $1M annually by automating onboarding for 1,000+ users.",
      "Enhanced app performance and UI with third-party Flutter libraries, boosting load speed by 28% and reducing resource usage by 23%.",
      "Built Attendance System with QR code and geolocation, reducing errors by 40% and increasing efficiency by 30% for 500+ daily check-ins.",
      "Leveraged Firebase Cloud Messaging for real-time notifications and authentication, increasing user engagement by 20%.",
      "Developed a Project and Task Management System, improving task tracking by 35% and reducing completion time by 20%."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TatvaSoft Pvt. Ltd.",
    location: "India",
    dateRange: "May 2023 – June 2023",
    description: [
      "Developed a full-stack bookstore web application using ReactJS and NodeJS, managing catalog of 1,500+ books and supporting 200 daily users.",
      "Designed and implemented 10+ RESTful APIs to manage data flow, reducing response time by 22% and improving overall system efficiency.",
      "Optimized application performance, achieving 42% faster load times & 23% lower memory usage through efficient state management.",
      "Built reusable React components, improving development speed by 25% and reducing bug resolution time by 15%."
    ],
  },
  {
    title: "Data Science Intern",
    company: "Pooja Investments Pvt. Ltd.",
    location: "India",
    dateRange: "Oct 2022 – April 2023",
    description: [
      "Spearheaded data cleaning, preprocessing, and EDA with Python, uncovering key insights that boosted investment strategy accuracy by 20%.",
      "Built predictive models to forecast market trends, increasing prediction accuracy by 17% for portfolio management.",
      "Applied ML algorithms (regression, classification, clustering) to historical financial data, improving market prediction accuracy by 18%.",
      "Created dashboards in Tableau and Power BI with advanced data visualizations, enhancing decision-making speed by 33% for stakeholders."
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-4 text-white">
      <h2 className="text-5xl font-bold mb-16 font-orbitron animate-fade-in text-purple-300" style={{ textShadow: '0 0 15px rgba(147,51,234,0.8)' }}>
        My Experience
      </h2>
      <div className="w-full max-w-5xl space-y-10 font-josefin">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-purple-900/40"
            style={{ boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white font-orbitron" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>{exp.title}</h3>
            <p className="text-lg italic mb-1 text-purple-300 font-semibold">{exp.company}, {exp.location}</p>
            <p className="text-base mb-6 text-purple-200 font-medium">{exp.dateRange}</p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-gray-200" style={{ textShadow: '0 0 5px rgba(255,255,255,0.2)' }}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
