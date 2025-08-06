"use client";

import { useDarkMode } from "./DarkModeContext";


export default function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <section id="about" className={`min-h-screen py-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-stone-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-light tracking-[0.1em] uppercase mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-stone-800'}`}>about</h2>
            <div className={`w-24 h-px mx-auto transition-colors duration-300 ${isDarkMode ? 'bg-white' : 'bg-stone-400'}`}></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Profile Section */}
            <div className="lg:col-span-1 text-center">
              <div className={`w-60 h-60 rounded-2xl mx-auto mb-8 flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/10 border border-gray-800/30' : 'bg-gray-50 border border-gray-200'}`}>
                <img
                  src="/profile-photo.png"
                  alt="Poojashree K S"
                  width={240}
                  height={240}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  
                />
              </div>
              <h3 className={`text-2xl font-light mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Poojashree K S</h3>
              <p className={`text-sm mb-6 font-light tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-stone-600'}`}>
                Software Engineer Trainee · Cisco Systems
              </p>
              <div className="flex justify-center space-x-8 mb-8">
                <a href="https://linkedin.com/in/poojashree-k-s" target="_blank" rel="noopener noreferrer" className={`text-xs font-light tracking-[0.15em] transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white border-b border-transparent hover:border-white' : 'text-stone-600 hover:text-stone-800 border-b border-transparent hover:border-stone-700'}`}>
                  LINKEDIN
                </a>
                <a href="https://github.com/poojashree-ks" target="_blank" rel="noopener noreferrer" className={`text-xs font-light tracking-[0.15em] transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white border-b border-transparent hover:border-white' : 'text-stone-600 hover:text-stone-800 border-b border-transparent hover:border-stone-700'}`}>
                  GITHUB
                </a>
                <a href="mailto:poojamanu567@gmail.com" className={`text-xs font-light tracking-[0.15em] transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white border-b border-transparent hover:border-white' : 'text-stone-600 hover:text-stone-800 border-b border-transparent hover:border-stone-700'}`}>
                  EMAIL
                </a>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-stone-700'}`}>
                  A detail-oriented Software Engineer Trainee with hands-on experience in Python automation, web development,
                  accessibility compliance, and cloud-native solutions. Proven expertise in developing automated accessibility 
                  testing suites and ensuring WCAG and Section 508 compliance for enterprise products.
                </p>
                <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-stone-600'}`}>
                  Specialized in automation scripting, security compliance validation, and cross-functional collaboration 
                  with QA and product teams. Certified in AWS Cloud Practitioner, CCNA, and Cisco DevNet with expertise 
                  in building accessible, scalable, and secure technology solutions.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/10 border-gray-800/30' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h4 className={`text-base font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Accessibility & Automation</h4>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Python automation, WCAG compliance, accessibility testing with Axe</p>
                </div>

                <div className={`p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/10 border-gray-800/30' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className={`text-base font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Web Development</h4>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>HTML, CSS, JavaScript, Flask, TensorFlow, Django frameworks</p>
                </div>

                <div className={`p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/10 border-gray-800/30' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM5 4h14v12H5V4z"/>
                    </svg>
                  </div>
                  <h4 className={`text-base font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Networking & Protocols</h4>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>TCP/IP, Routing & Switching, VLAN, QoS, CCNA certified</p>
                </div>

                <div className={`p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/10 border-gray-800/30' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className={`text-base font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Cloud & DevOps</h4>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>AWS Cloud Practitioner, Docker, Git, monitoring, automation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>I've had experiences with</h4>
                  <ul className={`space-y-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>Network Monitoring & Analysis</li>
                    <li>PostgreSQL & MongoDB</li>
                    <li>GIT, GitHub, Version Control</li>
                    <li>Python & Shell Scripting</li>
                    <li>Docker & Containerization</li>
                    <li>System Administration</li>
                    <li>Database Design</li>
                    <li>REST API Development</li>
                  </ul>
                </div>

                <div className="text-center">
                  <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>I have years of experience with</h4>
                  <ul className={`space-y-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>Network Engineering (CCNA/CCCA)</li>
                    <li>Java Spring Boot</li>
                    <li>TCP/IP, Routing & Switching</li>
                    <li>Linux System Administration</li>
                    <li>Security Implementation</li>
                    <li>Performance Optimization</li>
                    <li>Enterprise System Design</li>
                    <li>Network Troubleshooting</li>
                  </ul>
                </div>

                <div className="text-center">
                  <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>I work and study about</h4>
                  <ul className={`space-y-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>Cloud Technologies (AWS, Azure)</li>
                    <li>Microservices Architecture</li>
                    <li>DevOps & CI/CD Practices</li>
                    <li>Network Security & Compliance</li>
                    <li>IoT & Real-time Systems</li>
                    <li>Log Analysis & Monitoring</li>
                    <li>Automation & Orchestration</li>
                    <li>Modern Web Technologies</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
