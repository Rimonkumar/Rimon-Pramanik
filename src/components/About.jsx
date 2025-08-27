import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic3 from "../Image/pic3.jpg";
import {
  User,
  Code2,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="mt-5 mb-5  text-white ">
      {/* Wrapper with 90% width */}
      <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-12 items-start bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-10 shadow-xl">
        {/* Left Side - Profile Picture */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-tr from-green-400 via-teal-500 to-blue-500 p-[4px] hover:scale-105 transform transition duration-500">
            <img
              src={pic3}
              alt="My Profile"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right Side - Tabs & Content */}
        <div>
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "about"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-green-400 hover:text-white"
              }`}
            >
              <User size={18} /> About
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "skills"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-green-400 hover:text-white"
              }`}
            >
              <Code2 size={18} /> Skills
            </button>
            <button
              onClick={() => setActiveTab("journey")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "journey"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-green-400 hover:text-white"
              }`}
            >
              <GraduationCap size={18} /> Journey
            </button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  I am <span className="font-semibold">Rimon Pramanik</span>,
                  motivated and detail-oriented web developer, recently graduated
                  from AIUB, with strong expertise in frontend and backend
                  technologies including React.js, Next.js, NestJS, and ASP.NET.
                  Seeking a challenging role to leverage and further develop my
                  technical skills while contributing to solving real-world
                  problems.
                </p>

                <div className="mt-6 grid gap-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-green-400" size={18} />
                    Dhaka, Bangladesh
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-green-400" size={18} />
                    saifullahinfro@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-400" size={18} />
                    01888744942
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  What I Do
                </h2>
                <div className="grid gap-6">
                  {[
                    {
                      title: "Full Stack Development",
                      desc: "Building end-to-end applications with Nest.js, React, ASP.NET, and more.",
                    },
                    {
                      title: "Backend Development",
                      desc: "Creating robust APIs with ASP.NET, NestJS, and databases.",
                    },
                    {
                      title: "Frontend Development",
                      desc: "Crafting responsive UIs with React, Next.js, and modern CSS frameworks.",
                    },
                  ].map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition"
                    >
                      <h3 className="text-lg font-semibold text-green-400">
                        {skill.title}
                      </h3>
                      <p className="text-gray-400 mt-1 text-sm sm:text-base">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "journey" && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  My Journey
                </h2>
                <div className="relative pl-6 sm:pl-8 border-l-2 border-green-400 space-y-8 sm:space-y-10">
                  {[
                    {
                      year: "2025",
                      title: "Web Development & Research Focus",
                      desc: "Pursuing a thesis on Melanoma Skin Cancer Classification, advancing skills in Web Development.",
                    },
                    {
                      year: "2024",
                      title: "Software & Web Development Projects",
                      desc: "Developed full-stack web applications using React, Node.js, and databases. Explored AI integration into web platforms.",
                    },
                    {
                      year: "2023",
                      title: "University Journey in IT",
                      desc: "Pursued a degree in IT, gaining a foundation in programming, software development, and problem-solving.",
                    },
                    {
                      year: "2022",
                      title: "Starting Coding Journey with AIUB",
                      desc: "First introduction to programming in C++.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Year Badge */}
                      <span className="absolute -left-14 sm:-left-16 top-0 bg-blue-900 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                        {item.year}
                      </span>
                      {/* Timeline Dot */}
                      <span className="absolute -left-9 sm:-left-11 top-6 sm:top-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-900 rounded-full border-4 border-gray-900"></span>
                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-semibold text-green-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
