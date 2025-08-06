'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/poojashree-ks', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/poojashree-k-s', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-border-glow' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-max flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <motion.div
          className="text-xl sm:text-2xl font-cyber cyber-text font-bold"
          whileHover={{ scale: 1.05 }}
        >
          &lt;PKS/&gt;
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm lg:text-base"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden lg:flex items-center space-x-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-white hover:text-cyber-blue transition-colors duration-300 p-2"
              whileHover={{ scale: 1.2, rotate: 360 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-dark-bg/95 backdrop-blur-md border-t border-border-glow ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-max py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block py-3 px-2 text-white hover:text-cyber-blue transition-colors duration-300 min-h-[44px] flex items-center text-base"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-border-glow">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-white hover:text-cyber-blue transition-colors duration-300 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
