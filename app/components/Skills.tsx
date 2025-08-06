'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'HTML/CSS', level: 88 },
      ]
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'Django', level: 82 },
        { name: 'Flask', level: 88 },
        { name: 'Selenium', level: 90 },
        { name: 'axe-core', level: 92 },
        { name: 'BeautifulSoup4', level: 85 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 82 },
        { name: 'Jira', level: 88 },
        { name: 'Confluence', level: 85 },
        { name: 'GitHub Copilot', level: 90 },
        { name: 'Axe', level: 95 },
        { name: 'WAVE', level: 92 },
        { name: 'AWS', level: 85 },
      ]
    },
    {
      title: 'Networking & Security',
      skills: [
        { name: 'TCP/IP', level: 88 },
        { name: 'Routing & Switching', level: 85 },
        { name: 'VLAN', level: 82 },
        { name: 'QoS', level: 80 },
        { name: 'ARP', level: 85 },
        { name: 'IP Tables', level: 82 },
        { name: 'TLS/SSH Protocols', level: 88 },
      ]
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="section-padding bg-card-bg/20">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="cyber-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="cyber-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-cyber-blue mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4 
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyber-blue text-sm font-cyber">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-border-glow rounded-full h-2">
                      <motion.div
                        className="bg-gradient-cyber h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-8">
            Technologies I <span className="cyber-text">Love</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'Docker',
              'AWS', 'Redis', 'Express.js', 'RESTful APIs', 'Cybersecurity', 'Linux'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-dark-bg border border-cyber-blue/30 rounded-full text-cyber-blue font-cyber text-sm hover:border-cyber-blue hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
