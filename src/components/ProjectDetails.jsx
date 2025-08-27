// src/components/ProjectDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { pic21, news, ecommerce1, ecommerce2, blog1, ithelp,hospital,Ai, boy, compus, hero, retro, developer,tea } from "./ProjectImages";

const PROJECTS = [
  {
    id: 1,
    title: "B9A7-chefe-table",
    role: "Frontend Developer",
    date: "March 2025  Present",
    desc: "Developed a responsive chef’s recipe showcase app with dynamic data loading, authentication, and interactive UI components.",
    tech: ["React", "Tailwind CSS", "TypeScript", "javaScript", "Html", "css"],
    features: [
      "Responsive design with Tailwind CSS",
      "Chef profile pages with recipe details",
      "Favorite recipe bookmarking with local storage",
      "User authentication with private routes",
      "Lazy loading for improved performance",
      "Dynamic data fetching from API",
      "Interactive and mobile-friendly UI"
    ],

    live: "https://brilliant-smakager-89db78.netlify.app/",
    github: "https://github.com/Rimonkumar/B9A7-chefe-table?tab=readme-ov-file",
    images: [pic21],
  },
  {
    id: 2,
    title: "B9A5 Smart Ticketing System",
    role: "Frontend Developer",
    date: "Apr 2025 – Jul 2025",
    desc: "A smart ticketing platform that streamlines event ticket sales and management. Offers secure booking, digital ticket generation, and real-time event updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "User ticket purchasing with secure",
      "Event listing with detailed information",
      "Smart ticket booking and digital QR code generation",
      "Admin dashboard for event creation and analytics",
      "Real-time notifications for ticket updates",
    ],
    live: "https://rimonkumar.github.io/B9A5-smart-ticketing-main/",
    github: "https://github.com/Rimonkumar/B9A5-smart-ticketing-main",
    images: [ecommerce1],
  },
  {
    id: 3,
    title: "ItHelp_Desk",
    role: "Full Stack Developer",
    date: "2024",
    desc: "A web-based IT support system designed to streamline ticket submission, tracking, and communication between users and IT staff.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "User ticket submission with categorized filtering (Hardware, Software, Network)",
      "Admin dashboard to view, respond, and manage all tickets",
      "Email notifications via PHP Mail integration",
      "Real-time status updates (Pending, In Progress, Resolved)",
      "Secure login system for both users and admins"
    ],
    live: "", 
    github: "https://github.com/Rimonkumar/ItHelp_Desk", 
    images: [ithelp], 
  },
  {
    id: 4,
    title: "News Aggregator API",
    role: "ASP.NET Backend Developer",
    date: "febuary 2025",
    desc: "A scalable and modular Web API built with ASP.NET  using N-Tier Architecture. Designed for aggregating and managing news content from various sources with clean separation of concerns.",
    tech: ["ASP.NET ", "C#", "Entity Framework Core", "SQL Server/SQLite"],
    features: [
      "N-Tier Architecture (Presentation, BLL, DAL, Model)",
      "RESTful API for CRUD operations on news articles",
      "Entity Framework Core integration",
      "Repository & Service pattern implementation",
      "Supports SQL Server or SQLite (configurable)",
      "Clean, maintainable, and extensible codebase"
    ],
    live: "",
    github: "https://github.com/Rimonkumar/News-Aggregator-API-",
    images: [news],
  },
  {
  id: 5,
  title: "Hospital Management System",
  role: "C# Developer",
  date: "2024",
  desc: "A console-based hospital management system built with C# to handle patients, doctors, appointments, billing, and administrative tasks efficiently.",
  tech: ["C#", ".NET", "OOP Concepts"],
  features: [
    "Patient management: add, update, view, and delete records",
    "Doctor management: maintain doctor profiles and specialties",
    "Appointments: schedule, reschedule, and cancel appointments",
    "Prescription management: issue and store prescriptions",
    "Billing system: generate invoices and track payments",
    "Authentication system: secure login for admins and staff",
    "Dashboard: overview of hospital statistics"
  ],
  live: "", 
  github: "https://github.com/Rimonkumar/Hospital-Management-System", 
  images: [hospital], 
},
{
  id: 6,
  title: "Melanoma Classification Using ML & AI",
  role: "Machine Learning Developer",
  date: "2024",
  desc: "An AI-powered system for classifying melanoma from dermoscopic images using machine learning and deep learning models with explainable AI techniques.",
  tech: ["Python", "TensorFlow/Keras", "CNN", "ResNet", "XGBoost"],
  features: [
    "Image preprocessing and augmentation for dermoscopic datasets",
    "Convolutional Neural Networks (CNN) and ResNet implementation",
    "XGBoost integration for hybrid model accuracy",
    "Grad-CAM visualization for model explainability",
    "Early detection with high accuracy",
    "AI-powered diagnosis support"
  ],
  live: "",
  github: "https://github.com/Rimonkumar/Melanoma-Classification-Using-Ml-and-AI", 
  images: [Ai], 
},
{
  id: 7,
  title: "The Daily Life of a Village Boy",
  role: "C++ OpenGL Developer",
  date: "2024",
  desc: "A nostalgic computer graphics project built with OpenGL (GLUT) in C++ that simulates the day-to-day life of a rural village boy in Bangladesh, featuring animated scenes from morning to night.",
  tech: ["C++", "OpenGL", "GLUT", "Code::Blocks", "Windows API"],
  features: [
    "Simulates daily routine: waking up, going to school, studying, playing, sleeping",
    "Day-night cycle to reflect the passing of time",
    "Immersive animations using OpenGL primitives (glBegin, glPolygon)",
    "Sound effects integration with Windows API (PlaySound)",
    "Lighting and ambient effects using glEnable(GL_LIGHTING)",
    "Keyboard input handling and screen redisplay for interaction"
  ],
  live: "", // not applicable since it's a desktop graphics app
  github: "https://github.com/Rimonkumar/The-Daily-Life-of-a-Village-Boy", 
  images: [boy], 
},
{
  id: 8,
  title: "Study Compass - Software Test Plan",
  role: "Software QA & Testing Student",
  date: "2024",
  desc: "A comprehensive Software Test Plan created for the Study Compass platform, developed as part of the Software Quality Assurance and Testing course at AIUB. The project defines testing strategies, test cases, schedules, and risk management for the platform.",
  tech: ["Selenium", "Test Documentation", "QA Methodologies"],
  features: [
    "Covers functional testing of key modules (Signup, Login, Search, Event Management, Budget Estimation)",
    "User Dashboard: bookmarking, notifications, profile management",
    "Admin Dashboard: manage universities, scholarships, users",
    "University & scholarship search functionality",
    "Budget estimator with currency conversion",
    "Event management for users and admins",
    "News, articles, and notification system",
  
  ],
  live: "", 
  github: "https://github.com/Rimonkumar/Software-Test-Plan-for-the-Study-Compass-", 
  images: [compus],
  
},
{
  id: 9,
  title: "Hero Travel",
  role: "Frontend Developer",
  date: "2025",
  desc: "A visually engaging travel landing page designed to showcase tour packages, testimonials, and travel destinations with a seamless user experience.",
  tech: ["HTML", "CSS", "JavaScript"],
  features: [
    "Hero banner with call-to-action and tagline ",
    "Sections for Popular Tours and Destination Collections",
    "Highlights such as Handpicked Hotels, Best Price Guarantee, World-Class Service",
    "Newsletter signup integration",
    "Responsive layout with travel-themed UI elements"
  ],
  live: "https://rimonkumar.github.io/B9A2-Hero-Travel-main/",
  github: "https://github.com/Rimonkumar/B9A2-Hero-Travel-main", // replace with actual repo link
  images: [hero] // consider adding screenshots if available
},
{
  id: 10,
  title: "Retro Forum ",
  role: "Full Stack Developer",
  date: "2025",
  desc: "A retro-styled discussion forum allowing users to register, post, and explore topic threads in a nostalgic interface.",
  tech: ["HTML", "CSS", "JavaScript"],
  features: [
    "User registration and login functionality",
    "Listing of latest posts and forum topics",
    "Integrated testing functionality (e.g., run unit tests within the app)",
    "Search and topic navigation",
    "Retro-themed UI with engaging, playful prompts"
  ],
  live: "https://rimonkumar.github.io/B9A6-Retro-Forum/",
  github: "https://github.com/Rimonkumar/B9A6-Retro-Forum", 
  images: [retro] 
},
{
  id: 11,
  title: "Web Developer Portfolio",
  role: "Web Developer",
  date: "2025",
  desc: "A personal portfolio site showcasing professional background, technical skills, education, and contact options in a clean and navigable design.",
  tech: ["HTML", "CSS", "JavaScript"],
  features: [
    "Introduction with name, brief bio, and CV download link",
    "Skills section displaying frontend and backend technologies",
    "Educational background and professional experience history",
    "Contact form and "
  ],
  live: "https://rimonkumar.github.io/webdeveloper-protfulio/",
  github: "https://github.com/Rimonkumar/webdeveloper-protfulio", 
  images: [developer] 
},
{
  id: 12,
  title: "Tea House",
  role: "Frontend Developer",
  date: "2025",
  desc: "A clean, responsive landing page for a tea supplier that engages visitors with rich visuals, product highlights, cultural storytelling, and customer testimonials.",
  tech: ["HTML", "CSS", "JavaScript"],
  features: [
    "Hero section with branded tagline and call-to-action",
    "Featured products showcase with categories such as Milk, Black, Lemon, and Green Tea",
    "Cultural narrative section (‘gong cha’ story) to enhance brand connection",
    "Client testimonials to build trust",
    "News & Events carousel to promote updates or offers"
  ],
  live: "https://rimonkumar.github.io/Tea-House/",
  github: "https://github.com/username/Tea-House", 
  images: [tea] 
},


];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center py-20">Project not found.</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        className="mb-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        onClick={() => navigate(-1)}
      >
        ← Back to projects
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Project Image */}
        <div>
          <img
            src={project.images[0]}
            alt={project.title}
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Right Side: Project Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm">
              {project.role}
            </span>
            <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
              {project.date}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.desc}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Technologies & Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Technologies */}
        <div className="bg-gray-900/40 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">🛠 Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-purple-800 text-white rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-900/40 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">✨ Project Features</h3>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
