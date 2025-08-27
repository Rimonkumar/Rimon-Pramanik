// src/components/Projects.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { pic21, news, ecommerce1, ecommerce2, blog1, ithelp, hospital, Ai, boy, compus, hero, retro, tea, developer } from "./ProjectImages";

const PROJECTS = [
  {
    id: 1,
    title: "Chefe Table",
    desc: "Developed a responsive chef's recipe platform with interactive features.",
    images: [pic21],
    technologies: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    id: 2,
    title: "Smart Ticketing System",
    desc: "A smart ticketing platform that streamlines event ticket sales and management.",
    images: [ecommerce1],
    technologies: ["MERN Stack", "Stripe API", "JWT"],
  },
  {
    id: 3,
    title: "IT Help Desk",
    desc: "A web-based IT support system for communication between users and IT staff.",
    images: [ithelp],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "News Aggregator API",
    desc: "A scalable and modular Web API built with ASP.NET for news aggregation.",
    images: [news],
    technologies: ["ASP.NET", "SQL Server", "Entity Framework"],
  },
  {
    id: 5,
    title: "Hospital Management System",
    desc: "A console-based system built with C# to handle hospital operations.",
    images: [hospital],
    technologies: ["C#", ".NET", "MySQL"],
  },
  {
    id: 6,
    title: "Melanoma Classification Using ML & AI",
    desc: "An AI-powered system for classifying melanoma from dermoscopic images.",
    images: [Ai],
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    id: 7,
    title: "The Daily Life of a Village Boy",
    desc: "A nostalgic computer graphics project built with OpenGL in C++.",
    images: [boy],
    technologies: ["C++", "OpenGL", "Computer Graphics"],
  },
  {
    id: 8,
    title: "Study Compass - Software Test Plan",
    desc: "Software test plan for an online student support platform built at AIUB.",
    images: [compus],
    technologies: ["Selenium", "JUnit", "Test Planning"],
  },
  {
    id: 9,
    title: "Hero Travel",
    desc: "A visually engaging travel landing page designed to showcase tour packages.",
    images: [hero],
    technologies: ["React", "CSS3", "GSAP"],
  },
  {
    id: 10,
    title: "Retro Forum",
    desc: "A retro-styled discussion forum allowing users to register and discuss topics.",
    images: [retro],
    technologies: ["PHP", "MySQL", "JavaScript"],
  },
  {
    id: 11,
    title: "Web Developer Portfolio",
    desc: "A personal portfolio site showcasing skills, education, and projects.",
    images: [developer],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 12,
    title: "Tea House",
    desc: "A clean, responsive landing page for a tea supplier with rich visuals.",
    images: [tea],
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on component mount
    setIsVisible(true);
    
    // Add scroll animation listener
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show 6 projects if showAll is false, otherwise all
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="w-[90%] mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Projects</span>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my recent works that showcase my skills in web development, AI, and software engineering
          </p>
        </div>

        <div className="mt-16 w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-10 shadow-xl">
          {displayedProjects.map((p, index) => (
            <div 
              key={p.id}
              className={`rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900 p-6 shadow-lg flex flex-col transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image with hover effect */}
              <div className="relative overflow-hidden rounded-xl mb-5 group">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm">View Details →</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">{p.title}</h3>

              {/* Description */}
              <p className="mt-3 text-gray-300 flex-1">
                {p.desc}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-700 text-xs text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-6">
                <button
                  onClick={() => navigate(`/projects/${p.id}`)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-blue-500/20 flex items-center justify-center group"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/20 flex items-center justify-center mx-auto group"
          >
            {showAll ? (
              <>
                Show Less
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:-translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </>
            ) : (
              <>
                Show More Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}