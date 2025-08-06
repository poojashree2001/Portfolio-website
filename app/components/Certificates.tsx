'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Calendar, Building } from 'lucide-react'

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
  link?: string
  skills: string[]
  category: string
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Python for Data Science and AI',
      issuer: 'IBM',
      date: 'December 2023',
      description: 'Comprehensive course covering Python fundamentals for data science, including pandas, numpy, matplotlib, and machine learning basics.',
      image: '/api/placeholder/600/400',
      link: 'https://coursera.org/verify/example1',
      skills: ['Python', 'Data Science', 'Machine Learning', 'Pandas', 'NumPy'],
      category: 'Data Science'
    },
    {
      id: 2,
      title: 'Web Accessibility Specialist',
      issuer: 'W3C',
      date: 'November 2023',
      description: 'Advanced certification in web accessibility standards, WCAG 2.1 guidelines, and inclusive design principles.',
      image: '/api/placeholder/600/400',
      link: 'https://w3.org/verify/example2',
      skills: ['WCAG 2.1', 'Accessibility Testing', 'Inclusive Design', 'Screen Readers'],
      category: 'Accessibility'
    },
    {
      id: 3,
      title: 'Flask Web Development',
      issuer: 'Udemy',
      date: 'October 2023',
      description: 'Complete Flask framework course covering web application development, database integration, and deployment strategies.',
      image: '/api/placeholder/600/400',
      link: 'https://udemy.com/certificate/example3',
      skills: ['Flask', 'Python', 'Web Development', 'SQLAlchemy', 'REST API'],
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'IoT Fundamentals',
      issuer: 'Cisco',
      date: 'September 2023',
      description: 'Internet of Things fundamentals including device connectivity, protocols, and smart system design.',
      image: '/api/placeholder/600/400',
      link: 'https://cisco.com/verify/example4',
      skills: ['IoT', 'Raspberry Pi', 'Sensors', 'Network Protocols', 'Embedded Systems'],
      category: 'IoT'
    },
    {
      id: 5,
      title: 'Selenium WebDriver with Python',
      issuer: 'Selenium Academy',
      date: 'August 2023',
      description: 'Advanced automation testing using Selenium WebDriver, including cross-browser testing and test frameworks.',
      image: '/api/placeholder/600/400',
      link: 'https://selenium.dev/verify/example5',
      skills: ['Selenium', 'Test Automation', 'Python', 'Cross-browser Testing'],
      category: 'Testing'
    },
    {
      id: 6,
      title: 'Database Design and SQL',
      issuer: 'Oracle',
      date: 'July 2023',
      description: 'Comprehensive database design principles, SQL optimization, and database administration fundamentals.',
      image: '/api/placeholder/600/400',
      link: 'https://oracle.com/verify/example6',
      skills: ['SQL', 'Database Design', 'PostgreSQL', 'Query Optimization'],
      category: 'Database'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  }

  return (
    <section id="certificates" className="section-padding">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="cyber-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
            <span className="text-cyber-blue"> Click on any certificate to view details.</span>
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="cyber-card group cursor-pointer overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                  <Award size={40} className="text-cyber-blue" />
                </div>
                <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-cyber-blue font-semibold">Click to View</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors duration-300 line-clamp-2">
                    {certificate.title}
                  </h3>
                  <span className="text-cyber-blue text-xs font-cyber bg-cyber-blue/10 px-2 py-1 rounded whitespace-nowrap ml-2">
                    {certificate.category}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Building size={14} />
                  <span>{certificate.issuer}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar size={14} />
                  <span>{certificate.date}</span>
                </div>

                <p className="text-gray-300 text-sm line-clamp-2">
                  {certificate.description}
                </p>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-dark-bg border border-border-glow rounded text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-dark-bg border border-border-glow rounded text-gray-400">
                      +{certificate.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                className="bg-dark-bg border border-border-glow rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-border-glow">
                  <h3 className="text-xl font-semibold text-white">
                    {selectedCertificate.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Certificate Preview */}
                  <div className="w-full h-64 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-lg flex items-center justify-center">
                    <Award size={80} className="text-cyber-blue" />
                    <div className="ml-4 text-center">
                      <p className="text-cyber-blue font-semibold">Certificate Preview</p>
                      <p className="text-gray-400 text-sm">Click "View Certificate" to see the full document</p>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-cyber-blue font-semibold block mb-1">Issuer</label>
                        <p className="text-gray-300">{selectedCertificate.issuer}</p>
                      </div>
                      <div>
                        <label className="text-cyber-blue font-semibold block mb-1">Date Issued</label>
                        <p className="text-gray-300">{selectedCertificate.date}</p>
                      </div>
                      <div>
                        <label className="text-cyber-blue font-semibold block mb-1">Category</label>
                        <span className="text-cyber-blue text-sm font-cyber bg-cyber-blue/10 px-2 py-1 rounded">
                          {selectedCertificate.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-cyber-blue font-semibold block mb-2">Skills Covered</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedCertificate.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2 py-1 bg-dark-bg border border-border-glow rounded text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-cyber-blue font-semibold block mb-2">Description</label>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    {selectedCertificate.link && (
                      <motion.a
                        href={selectedCertificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>View Certificate</span>
                      </motion.a>
                    )}
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="px-6 py-3 border border-border-glow rounded-lg text-gray-300 hover:text-white hover:border-cyber-blue transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
