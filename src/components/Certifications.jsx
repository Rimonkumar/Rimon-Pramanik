import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic5 from "../Image/pic5.png"; 
import pic6 from "../Image/pic6.jpg"; 
import pic7 from "../Image/pic7.jpg"; 

const CERTIFICATES = [
  {
    title: "Responsive Web Design",
    desc: "Creating websites using HTML, CSS, and JavaScript.",
    src: pic5
  },
  {
    title: "Software Quality Assurance",
    desc: "Ensure software quality, reliability, usability, performance.",
    src: pic6
  },
  {
    title: "Dhaka Marathon 2024",
    desc: "Completed Half Marathon in the BANGABANDHU SHEIKH MUJIB DHAKA MARATHON 2024",
    src: pic7
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications " className="p-20" >
      <div className="container w-[100%] mx-auto text-center p-10 px-8 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
        <p className="text-gray-300 mt-2">Here are some of my certifications and achievements.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CERTIFICATES.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl p-6 cursor-pointer 
                         bg-white/10 backdrop-blur-md border border-white/20
                         shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelected(cert.src)}
            >
              {/* Certificate Image with Overlay */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border-2 border-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                  <span className="text-white font-bold text-lg">View</span>
                </div>
              </div>

              {/* Certificate Info */}
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="mt-2 text-gray-200 flex-1">{cert.desc}</p>

              {/* Gradient Accent Bottom Line */}
              <div className="h-1 w-full mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl max-h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selected}
                alt="Enlarged Certificate"
                className="w-full h-full object-contain rounded-xl"
              />
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
