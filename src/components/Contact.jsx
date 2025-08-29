// src/components/Contact.jsx
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pb-10 bg-gray-950 text-white flex justify-center">
      {/* Outer wrapper with gradient border */}
      <div className="w-[90%] rounded-3xl p-[1px] bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 animate-gradient">
        {/* Inner content card */}
        <div className="rounded-3xl bg-gray-950 border border-gray-800 p-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
            <p className="text-gray-400 mt-4">
              Have a question or want to work together? Reach out using the form below.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="flex items-start gap-4 mb-6">
                <span className="p-3 rounded-xl bg-gray-800">
                  <FaEnvelope className="text-xl" />
                </span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">remonkumar21@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <span className="p-3 rounded-xl bg-gray-800">
                  <FaPhone className="text-xl" />
                </span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400">01722524099</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <span className="p-3 rounded-xl bg-gray-800">
                  <FaMapMarkerAlt className="text-xl" />
                </span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-400">Dahka Bangladesh</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-medium mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/Rimonkumar" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/rimon-pramanik/" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com/remon.kumar.372" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 w-full py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Short Terms */}
          <p className="text-xs text-gray-500 mt-8 text-center">
            By sending this message, you agree to our short terms & conditions.
          </p>
        </div>
      </div>

      {/* Gradient animation style */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
