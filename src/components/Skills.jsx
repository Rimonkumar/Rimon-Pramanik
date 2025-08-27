"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

import javaIcon from "../assets/Tech_Icon/java.png"
import jsIcon from "../assets/Tech_Icon/js.png"
import dartIcon from "../assets/Tech_Icon/dart.png"
import sqlIcon from "../assets/Tech_Icon/sql.png"
import typescriptIcon from "../assets/Tech_Icon/typescript.png"
import angularIcon from "../assets/Tech_Icon/angular.png"
import springBootIcon from "../assets/Tech_Icon/spring-boot.png"
import hibernateIcon from "../assets/Tech_Icon/hibernate.png"
import javaFXIcon from "../assets/Tech_Icon/javafx.png"
import flutterIcon from "../assets/Tech_Icon/flutter.png"
import mysqlIcon from "../assets/Tech_Icon/mysql.png"
import mongoDb from "../assets/Tech_Icon/mongodb.png"
import cssIcon from "../assets/Tech_Icon/css.png"
import figmaIcon from "../assets/Tech_Icon/figma.png"
import bootstrapIcon from "../assets/Tech_Icon/bootstrap.png"
import postgresql from "../assets/Tech_Icon/postgres.png"
import postmanIcon from "../assets/Tech_Icon/postman.png"

// 3D tilt skill card
function SkillCard({ skill, proficiency, index, onHoverStart, onHoverEnd }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
    if (onHoverEnd) onHoverEnd()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (onHoverStart) onHoverStart()
  }

  const rotateX = () => ySpring.get() / 20
  const rotateY = () => -xSpring.get() / 20

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center w-24 h-24 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 p-3 relative overflow-hidden cursor-pointer group"
      style={{
        rotateX: rotateX(),
        rotateY: rotateY(),
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4), 0 5px 10px -5px rgba(139, 92, 246, 0.2)"
      }}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      {/* Floating icon */}
      <motion.div
        className="w-12 h-12 mb-1 relative z-10"
        animate={{ y: isHovered ? [-2, 2, -2] : 0 }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      >
        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
      </motion.div>

      <span className="text-xs text-center text-white font-medium relative z-10">
        {skill.name}
      </span>

      {/* Proficiency bar that appears on hover */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gray-700 rounded-b-xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: `${proficiency}%` }}
        />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
    </motion.div>
  )
}

// Horizontal infinite carousel with pause on hover
function SkillCarousel({ skills, proficiencies }) {
  const [isPaused, setIsPaused] = useState(false)
  const duplicatedSkills = [...skills, ...skills] // seamless scroll
  const controls = useAnimation()

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, duration: 20, ease: "linear" },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls])

  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-6 w-max "
        animate={controls}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            index={index % skills.length}
            proficiency={proficiencies[skill.name] || 75}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          />
        ))}
      </motion.div>
    </div>
  )
}

// Animated tab trigger
function AnimatedTabTrigger({ value, activeTab, children }) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "relative overflow-hidden text-xs md:text-sm py-3 px-4 transition-all duration-300 rounded-lg",
        activeTab === value
          ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
          : "text-gray-300 bg-gray-800 hover:bg-gray-700"
      )}
    >
      {children}
      {activeTab === value && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </TabsTrigger>
  )
}

// Floating particles background component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Main TechStack Component
export default function TechStack() {
  const [activeTab, setActiveTab] = useState("languages")

  const proficiencies = {
    Java: 90,
    JavaScript: 85,
    TypeScript: 80,
    Dart: 75,
    SQL: 85,
    Angular: 80,
    "Spring Boot": 85,
    Hibernate: 80,
    JavaFX: 75,
    Flutter: 70,
    MySQL: 85,
    PostgreSQL: 80,
    MongoDB: 75,
    Figma: 70,
    Bootstrap: 85,
    CSS: 80,
    Postman: 90,
  }

  const categories = [
    {
      id: "languages",
      name: "Languages",
      icon: "💻",
      skills: [
        { name: "Java", icon: javaIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Dart", icon: dartIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "TypeScript", icon: typescriptIcon },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks",
      icon: "🔧",
      skills: [
        { name: "Angular", icon: angularIcon },
        { name: "Spring Boot", icon: springBootIcon },
        { name: "Hibernate", icon: hibernateIcon },
        { name: "JavaFX", icon: javaFXIcon },
        { name: "Flutter", icon: flutterIcon },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresql },
        { name: "MongoDB", icon: mongoDb },
      ],
    },
    {
      id: "ui",
      name: "UI/UX",
      icon: "🎨",
      skills: [
        { name: "Figma", icon: figmaIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: "testing",
      name: "Testing",
      icon: "🧪",
      skills: [{ name: "Postman", icon: postmanIcon }],
    },
  ]

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background with 90% width */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl -z-20" />

      {/* Animated background elements with 90% width */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[90%] -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating particles with 90% width */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[60%] -z-10 overflow-hidden">
        <FloatingParticles />
      </div>

      {/* Grid pattern overlay with 90% width */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[90%] -z-10 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[90%] mx-auto relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-16">


          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Tech Stack & Skills
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 rounded-full"
          />


        </div>

        <Tabs defaultValue="languages" onValueChange={setActiveTab} className="w-60%">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 p-2 rounded-2xl">
              {categories.map((category) => (
                <AnimatedTabTrigger key={category.id} value={category.id} activeTab={activeTab}>
                  <span className="mr-2">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </AnimatedTabTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="focus-visible:outline-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-md border-2 py-3 border-purple-500 rounded-2xl overflow-hidden shadow-2xl w-[80%] mx-auto">
                  <CardContent className="p-5 md:p-4">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-semibold flex items-center gap-3 pl-20 text-white">
                        <span className="text-2xl">{category.icon}</span>
                        <span>{category.name}</span>
                      </h3>

                      <Badge variant="secondary" className="bg-purple-500/20   text-purple-300 hover:bg-purple-500/30">
                        {category.skills.length} {category.skills.length === 1 ? "Skill" : "Skills"}
                      </Badge>
                    </div>

                    <div className="w-[80%] mx-auto border-2 border-purple-500 rounded-2xl p-4">
                      <SkillCarousel skills={category.skills} proficiencies={proficiencies} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>


      </motion.div>
    </section>
  )
}