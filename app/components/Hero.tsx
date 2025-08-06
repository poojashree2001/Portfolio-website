'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container-max text-center z-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          className="flex items-center justify-center mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <Sparkles className="text-cyber-blue mr-2" size={20} />
          <span className="text-cyber-blue font-cyber text-sm sm:text-base md:text-lg">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-responsive-3xl font-bold mb-4 sm:mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="block">Poojashree</span>
          <span className="block cyber-text">K S</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          className="text-responsive-lg text-gray-300 mb-6 sm:mb-8 font-light space-y-1 sm:space-y-2"
          variants={itemVariants}
        >
          <span className="block">Software Engineer</span>
          <span className="block text-cyber-purple">Trainee at Cisco Systems</span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-responsive-base text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
          variants={itemVariants}
        >
          Detail-oriented Software Engineer Trainee with hands-on experience in Python automation,
          web development, accessibility compliance, and cloud-native solutions. Certified in AWS,
          CCNA and Cisco DevNet with expertise in building scalable, secure, and reliable enterprise systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="cyber-button group w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="inline mr-2" size={18} />
            <span className="text-sm sm:text-base">View My Work</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-cyber-blue text-cyber-blue rounded-lg font-semibold transition-all duration-300 hover:bg-cyber-blue hover:text-dark-bg group text-center min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center"
          variants={floatingVariants}
          animate="animate"
        >
          <span className="text-gray-400 mb-2 font-cyber text-sm">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Code Elements */}
      <motion.div
        className="absolute top-1/4 left-8 text-cyber-blue/30 font-cyber text-sm"
        variants={floatingVariants}
        animate="animate"
      >
        {`<developer>`}
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-8 text-cyber-purple/30 font-cyber text-sm"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        {`</creative>`}
      </motion.div>
    </section>
  )
}
