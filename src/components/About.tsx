"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMousePos({ x: e.clientX - centerX, y: e.clientY - centerY });
  };

  const angleX = isHovering ? (mousePos.y / 80) * -10 : 0; // max 10deg
  const angleY = isHovering ? (mousePos.x / 128) * 10 : 0;

  const transform = isHovering
    ? `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(30px) scale(1.1)`
    : "scale(1)";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="text-left max-w-xl pt-10 flex-grow">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300 font-orbitron animate-fade-in" style={{ textShadow: '0 0 10px rgba(147,51,234,0.5)' }}>About Me</h2>
            <p className="text-base sm:text-lg text-white leading-relaxed animate-slide-up" style={{ animationDelay: '0.5s', textShadow: '0 0 5px rgba(255,255,255,0.3)' }}>
              Hi! I’m Mann Shah, a <span className="text-purple-300">Software Development Engineer</span> based in Seattle, Washington.
              <br /><br />
              I’m currently pursuing my Master’s in Computer Science at Seattle University. I worked as a <span className="text-purple-300">Software Development Engineer Intern at Amazon (AWS Redshift)</span>, where I built an automated deployment tracking + Slack bot used across 35+ regions, boosting visibility and cutting manual work by <span className="text-purple-300">95%</span>.
              <br /><br />
              When I’m not coding, you’ll probably find me:
              <br />
              🎮 Playing Games
              <br />
              🏋️ In the Gym
              <br />
              🌍 Exploring new places
            </p>
          </div>
          <Image
            src="/images/Mann Photo3.jpg"
            alt="Mann Shah"
            width={384}
            height={512}
            className="w-72 sm:w-96 h-auto rounded-lg object-cover shadow-2xl shadow-purple-500/50 transition-all duration-200 mt-4"
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-purple-300 font-orbitron animate-fade-in" style={{ animationDelay: '1s' }}>Languages and Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
            {[
              { href: "https://developer.android.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg", alt: "android" },
              { href: "https://angular.io", src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "angular" },
              { href: "https://angular.io", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg", alt: "angularjs" },
              { href: "https://aws.amazon.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "aws" },
              { href: "https://azure.microsoft.com/en-in/", src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", alt: "azure" },
              { href: "https://getbootstrap.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "bootstrap" },
              { href: "https://www.cprogramming.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", alt: "c" },
              { href: "https://www.w3schools.com/cpp/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", alt: "cplusplus" },
              { href: "https://www.w3schools.com/cs/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", alt: "csharp" },
              { href: "https://www.w3schools.com/css/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "css3" },
              { href: "https://dart.dev", src: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg", alt: "dart" },
              { href: "https://www.djangoproject.com/", src: "https://cdn.worldvectorlogo.com/logos/django.svg", alt: "django" },
              { href: "https://www.docker.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", alt: "docker" },
              { href: "https://dotnet.microsoft.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", alt: "dotnet" },
              { href: "https://expressjs.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", alt: "express" },
              { href: "https://www.figma.com/", src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", alt: "figma" },
              { href: "https://firebase.google.com/", src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "firebase" },
              { href: "https://flask.palletsprojects.com/", src: "https://cdn.worldvectorlogo.com/logos/flask.svg", alt: "flask" },
              { href: "https://flutter.dev", src: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", alt: "flutter" },
              { href: "https://cloud.google.com", src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", alt: "gcp" },
              { href: "https://git-scm.com/", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git" },
              { href: "https://graphql.org", src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", alt: "graphql" },
              { href: "https://www.w3.org/html/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "html5" },
              { href: "https://www.java.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", alt: "java" },
              { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "javascript" },
              { href: "https://www.jenkins.io", src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg", alt: "jenkins" },
              { href: "https://kotlinlang.org", src: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg", alt: "kotlin" },
              { href: "https://laravel.com/", src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", alt: "laravel" },
              { href: "https://www.linux.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", alt: "linux" },
              { href: "https://www.mathworks.com/", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", alt: "matlab" },
              { href: "https://www.mongodb.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", alt: "mongodb" },
              { href: "https://nodejs.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "nodejs" },
              { href: "https://nextjs.org/", src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", alt: "nextjs" },
              { href: "https://opencv.org/", src: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg", alt: "opencv" },
              { href: "https://pandas.pydata.org/", src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", alt: "pandas" },
              { href: "https://www.photoshop.com/en", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg", alt: "photoshop" },
              { href: "https://www.php.net", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "php" },
              { href: "https://postman.com", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt: "postman" },
              { href: "https://www.python.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "python" },
              { href: "https://pytorch.org/", src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", alt: "pytorch" },
              { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "react" },
              { href: "https://www.ruby-lang.org/en/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg", alt: "ruby" },
              { href: "https://www.rust-lang.org", src: "https://cdn.worldvectorlogo.com/logos/rust.svg", alt: "rust" },
              { href: "https://sass-lang.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", alt: "sass" },
              { href: "https://scikit-learn.org/", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", alt: "scikit_learn" },
              { href: "https://seaborn.pydata.org/", src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", alt: "seaborn" },
              { href: "https://www.selenium.dev", src: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg", alt: "selenium" },
              { href: "https://spring.io/", src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", alt: "spring" },
              { href: "https://tailwindcss.com/", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "tailwind" },
              { href: "https://www.tensorflow.org", src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", alt: "tensorflow" },
              { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "typescript" },
              { href: "https://vuejs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg", alt: "vuejs" },
            ].map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group p-4 bg-purple-900/20 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-100"
                style={{ width: "90px", height: "90px" }}
              >
                <img
                  src={src}
                  alt={alt}
                  width={100}
                  height={100}
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
