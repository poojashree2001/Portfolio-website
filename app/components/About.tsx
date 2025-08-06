'use client'

import { motion } from 'framer-motion'
import { User, Award, Coffee, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '1+' },
    { icon: Coffee, label: 'Projects Completed', value: '5+' },
    { icon: Clock, label: 'Hours Coded', value: '2000+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Image & Stats */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Profile Card */}
            <div className="cyber-card text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-cyber rounded-full p-1">
                  <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
                    <User size={80} className="text-cyber-blue" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Poojashree K S</h3>
              <p className="text-cyber-blue font-cyber">Software Engineer Trainee @ Cisco</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="cyber-card text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="text-cyber-blue mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold cyber-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="cyber-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-cyber mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a detail-oriented Software Engineer Trainee with hands-on experience in Python automation, 
                web development, accessibility compliance, and cloud-native solutions. Currently working at 
                Cisco Systems, where I develop and deploy automated accessibility testing suites and ensure 
                compliance with WCAG and Section 508 for enterprise products.
              </p>
              
              <p>
                My experience includes automating infrastructure health checks and validating TLS/SSH protocols, 
                reducing manual tests and ensuring platform security baselines. I work collaboratively with QA 
                and product teams to improve front-end accessibility, screen reader support, and web performance.
              </p>
              
              <p>
                I have a strong foundation in Python, JavaScript, SQL, and Java with expertise in web technologies 
                like HTML, CSS, and frameworks including TensorFlow and Django. My technical skills extend to 
                networking protocols (TCP/IP, Routing & Switching, VLAN) and tools like Git, Docker, Jira, and GitHub Copilot.
              </p>
              
              <p>
                When I'm not working, you'll find me contributing to projects like Smart Glasses for the Visually 
                Impaired using IoT and TensorFlow, or developing accessibility testing web applications. I believe 
                in continuous learning and building inclusive, accessible technology solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyber-blue">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Python Automation',
                  'Web Development',
                  'Accessibility Testing',
                  'Cloud-Native Solutions',
                  'REST API Development',
                  'Security & Compliance',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-2"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyber-purple">Certifications</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Certified AWS Cloud Practitioner - Valid: 2024–2027',
                  'Implementing and Administering Cisco Solutions - 2024',
                  'Cisco Certified Network Associate (CCNA) - 2025',
                  'Cisco Certified DevNet Associate - 2025',
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="flex items-center space-x-2 p-3 bg-dark-bg/50 rounded-lg border border-border-glow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block cyber-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
