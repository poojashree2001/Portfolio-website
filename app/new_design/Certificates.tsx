"use client";

import { useState } from 'react';
import { useDarkMode } from './DarkModeContext';
import { Award, ExternalLink, X, Calendar, Building } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
  skills: string[];
  category: string;
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const { isDarkMode } = useDarkMode();

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
  ];

  return (
    <section id="certificates" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-light mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-stone-800'}`}>
            Professional Certificates
          </h2>
          <div className={`w-24 h-px mx-auto mb-8 transition-colors duration-300 ${isDarkMode ? 'bg-white/20' : 'bg-stone-300'}`}></div>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-stone-600'}`}>
            Continuous learning and professional development through industry-recognized certifications.
            <span className={`${isDarkMode ? 'text-white' : 'text-stone-800'}`}> Click on any certificate to view details.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={`cursor-pointer transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 hover:bg-gray-800/50 border-gray-800 hover:border-gray-700' 
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 hover:border-stone-300'
              } border rounded-lg p-6 hover:shadow-lg group`}
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Icon */}
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                isDarkMode ? 'bg-white/10' : 'bg-stone-200'
              }`}>
                <Award size={24} className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-stone-600'}`} />
              </div>

              {/* Certificate Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className={`font-medium transition-colors duration-300 group-hover:${isDarkMode ? 'text-white' : 'text-stone-800'} ${
                    isDarkMode ? 'text-gray-300' : 'text-stone-700'
                  }`}>
                    {certificate.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                    isDarkMode ? 'bg-white/10 text-gray-300' : 'bg-stone-200 text-stone-600'
                  } whitespace-nowrap ml-2`}>
                    {certificate.category}
                  </span>
                </div>

                <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-stone-500'
                }`}>
                  <Building size={14} />
                  <span>{certificate.issuer}</span>
                </div>

                <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-stone-500'
                }`}>
                  <Calendar size={14} />
                  <span>{certificate.date}</span>
                </div>

                <p className={`text-sm line-clamp-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-stone-600'
                }`}>
                  {certificate.description}
                </p>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                      isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-stone-100 text-stone-500'
                    }`}>
                      +{certificate.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-stone-200'
              } border`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`flex items-center justify-between p-6 transition-colors duration-300 ${
                isDarkMode ? 'border-gray-800' : 'border-stone-200'
              } border-b`}>
                <h3 className={`text-xl font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-stone-800'
                }`}>
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400 hover:text-white' : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Certificate Preview */}
                <div className={`w-full h-64 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
                }`}>
                  <Award size={80} className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-stone-600'}`} />
                  <div className="ml-4 text-center">
                    <p className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-stone-800'}`}>
                      Certificate Preview
                    </p>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-stone-600'}`}>
                      Click "View Certificate" to see the full document
                    </p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className={`font-medium block mb-1 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-stone-800'
                      }`}>
                        Issuer
                      </label>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
                        {selectedCertificate.issuer}
                      </p>
                    </div>
                    <div>
                      <label className={`font-medium block mb-1 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-stone-800'
                      }`}>
                        Date Issued
                      </label>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
                        {selectedCertificate.date}
                      </p>
                    </div>
                    <div>
                      <label className={`font-medium block mb-1 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-stone-800'
                      }`}>
                        Category
                      </label>
                      <span className={`text-sm px-2 py-1 rounded transition-colors duration-300 ${
                        isDarkMode ? 'bg-white/10 text-gray-300' : 'bg-stone-200 text-stone-600'
                      }`}>
                        {selectedCertificate.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={`font-medium block mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-stone-800'
                      }`}>
                        Skills Covered
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                              isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`font-medium block mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-stone-800'
                  }`}>
                    Description
                  </label>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-stone-600'
                  }`}>
                    {selectedCertificate.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {selectedCertificate.link && (
                    <a
                      href={selectedCertificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-white text-black hover:bg-gray-200' 
                          : 'bg-stone-800 text-white hover:bg-stone-700'
                      }`}
                    >
                      <ExternalLink size={16} />
                      <span>View Certificate</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600' 
                        : 'border border-stone-300 text-stone-600 hover:text-stone-800 hover:border-stone-400'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
