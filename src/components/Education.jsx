"use client"

import { useRef } from "react"
import { Badge } from "./ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { School, GraduationCap, BookOpen, ExternalLink } from "lucide-react"

export default function Education() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const timelineItems = [
    {
      period: "January 2022 – September 2025",
      title: "American International University-Bangladesh",
      description:
        "Bachelor of Science in Computer Science and Engineering; Dhaka, Bangladesh.",
      icon: <GraduationCap className="h-6 w-6" />,
      iconBg: "from-purple-600 to-purple-400",
      delay: 0.2,
      link: "https://www.aiub.edu/",
    },
    {
      period: "June 2019 – February 2021",
      title: "Varendra College Rajshahi",
      description: "Higher Secondary Certificate (HSC); Rajshahi, Bangladesh.",
      icon: <School className="h-6 w-6" />,
      iconBg: "from-blue-600 to-blue-400",
      delay: 0.3,
      link: "https://www.varendracollege.edu.bd/",
    },
    {
      period: "January 2018 – February 2019",
      title: "Dhopapara High School",
      description: "Secondary School Certificate (SSC); Puthia, Rajshahi.",
      icon: <BookOpen className="h-6 w-6" />,
      iconBg: "from-emerald-600 to-emerald-400",
      delay: 0.4,
      link: "#",
    },
  ]

  return (
  <section id="education" className="py-6  bg-gray-950 flex justify-center relative">
    {/* Outer wrapper with gradient border */}
    <div className="w-[90%] p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 shadow-xl">
      {/* Inner content */}
      <div className="w-full relative z-10 rounded-2xl overflow-hidden bg-gray-950">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl shadow-inner -z-10" />

        <motion.div style={{ opacity }} className="mx-auto pt-5 relative z-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
              className="inline-block"
            >
              <Badge variant="outline" className="mb-2 pt-6 text-white py-3 text-sm border-primary/20">
                Educational Journey
              </Badge>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
              Education
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 rounded-full"
            />
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: item.delay,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-start mb-10 group"
              >
                {/* Vertical line */}
                {index < timelineItems.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.2, delay: item.delay + 0.3 }}
                    className="absolute left-8 top-12 w-1 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent hidden md:block"
                  />
                )}

                {/* Icon */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.iconBg} p-2 flex items-center justify-center text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="ml-0 md:ml-6 flex-1 mt-3 md:mt-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.period && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-purple-300 mb-2">
                        {item.period}
                      </span>
                    )}

                    <h3 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent flex items-center">
                      {item.title}
                      {item.link && (
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 text-blue-400" />
                          </a>
                        </motion.div>
                      )}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: item.delay + 0.5 }}
                      className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 to-transparent mt-3"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

}