import { div } from 'framer-motion/client';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <div className="pb-3 pt-3">
     <nav className="sticky top-0 z-50 w-[90%] mx-auto rounded-xl backdrop-blur border-b border-gray-200/60 dark:border-gray-800 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md ">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#" className="font-extrabold text-xl text-blue-700 dark:text-white">MyPortfolio</a>

        {/* Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition">About</button>
          <button onClick={() => scrollToSection("education")} className="hover:text-blue-600 transition">Education</button>
          <button onClick={() => scrollToSection("tech")} className="hover:text-blue-600 transition">Skills</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600 transition">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition">Contact</button>
          <button onClick={() => scrollToSection("certifications")} className="hover:text-blue-600 transition">Certifications</button>
        </div>

        {/* Theme toggle */}
        <button
          aria-label="Toggle Theme"
          onClick={() => setDark(v => !v)}
          className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 shadow hover:scale-105 transition text-gray-800 dark:text-white"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
   </div>
  );
}