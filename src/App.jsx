import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import Certifications from './components/Certifications.jsx';
import Stats from './components/Stats.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Education from "./components/Education.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Stats />
            <Contact />
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}
