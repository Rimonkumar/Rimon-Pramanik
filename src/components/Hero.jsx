import { motion } from 'framer-motion';
import pic12 from '../Image/pic12.png';
import cvFile from '../Image/CV.pdf';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative w-[90%] mx-auto rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${pic12})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      whileHover={{ scale: 1.01, rotate: 0.2 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center px-4 py-20 md:py-36 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m{' '}
          <motion.span
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Rimon Pramanik
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200"
        >
          Hi, I'm Rimon Pramanik, a passionate Web Developer and a fresh graduate from AIUB. Crafting Smart, Scalable Solutions with React & JavaScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg transition-transform"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={cvFile}
            download="Rimon_Pramanik.pdf"
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}