import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { headings } from "../../styles/gradients";

const technologies = [
  { icon: "mdi:react", label: "React" },
  { icon: "mdi:language-javascript", label: "JavaScript" },
  { icon: "mdi:vuejs", label: "Vue.js" },
  { icon: "mdi:angular", label: "Angular" },
  { icon: "mdi:language-html5", label: "HTML5" },
  { icon: "mdi:language-css3", label: "CSS3" },
  { icon: "mdi:wordpress", label: "WordPress" },
  { icon: "mdi:web", label: "Webflow" },
  { icon: "mdi:nodejs", label: "Node.js" },
  { icon: "mdi:dot-net", label: ".NET" },
  { icon: "mdi:language-java", label: "Java" },
  { icon: "mdi:language-python", label: "Python" },
  { icon: "mdi:language-csharp", label: "C#" },
  { icon: "mdi:language-php", label: "PHP" },
  { icon: "mdi:language-go", label: "Go" },
  { icon: "mdi:apple", label: "iOS" },
  { icon: "mdi:android", label: "Android" },
  { icon: "mdi:alpha-f-box-outline", label: "Flutter" },
  { icon: "mdi:language-kotlin", label: "Kotlin" },
  { icon: "mdi:microsoft-azure", label: "Azure" },
  { icon: "mdi:amazon", label: "AWS" },
  { icon: "mdi:google-cloud", label: "GCP" },
  { icon: "mdi:docker", label: "Docker" },
  { icon: "mdi:bitbucket", label: "Bitbucket" },
  { icon: "mdi:github", label: "GitHub" },
  { icon: "mdi:gitlab", label: "GitLab" },
  { icon: "mdi:microsoft-sharepoint", label: "SharePoint" }
];

const TechnologyIcons = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="px-6 mx-auto mb-16 max-w-7xl">
      {/* Title & Description */}
      <div className="mb-10 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${headings}`}>
          Empowering Digital Transformation with Custom Software Development
        </h2>
        <p className="max-w-4xl mx-auto mt-4 text-gray-600 text-md">
          Hire Tech Experts – Grow your development team by hiring tech experts from us. 
          We align with your project requirements and timezone, deploying resources for both 
          short-term and long-term contracts.
        </p>
      </div>

      {/* Icons Grid with AOS */}
      <div className="grid justify-center grid-cols-3 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9">
        {technologies.map(({ icon, label }, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center justify-center py-4 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <Icon icon={icon} className="w-10 h-10 mb-2 text-gray-600" />
            <p className="text-sm font-medium text-gray-700">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyIcons;
