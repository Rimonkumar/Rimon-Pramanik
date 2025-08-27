// src/components/Contact.jsx
import { FaEnvelope, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          I’m open to new opportunities. Let’s build something great together.
        </p>

        {/* One line icons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:saifullahinfro@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-md transition"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/md-saifullah-monir-677626376"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/sheikh_saifullah_monir_"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 shadow-md transition"
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>

          <a
            href="https://x.com/Monir942"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 shadow-md transition"
          >
            <FaXTwitter className="text-xl" />
            <span>X</span>
          </a>
        </div>
      </div>
    </section>
  );
}
