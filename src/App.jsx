import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Server, Cloud, Cpu, Terminal, Database, Phone, X, Sun, Moon } from 'lucide-react'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (!touchStart) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1)
      } else {
        setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1)
      }
    }
    setTouchStart(null)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projects = [
    {
      id: 1,
      title: "Djirra Travel Request System",
      role: "Full Stack Developer & Architect",
      tags: ["Python", "Flask", "Azure AD", "SQLite", "Tailwind"],
      icon: <Server className="w-12 h-12 text-orange-600" />,
      gradient: "from-orange-100 to-amber-50",
      shortDesc: "A full-stack web application replacing manual paper processes. Features an Apple-inspired UI, secure Azure AD SSO, and automated approval workflows.",
      problem: "The organization relied on manual paper forms and emails for travel approvals, leading to lost requests, delayed bookings, and lack of visibility for finance/operations.",
      solution: "Architected a custom web application using Python/Flask. Implemented secure Single Sign-On (SSO) via Microsoft Entra ID (Azure AD). Designed a modern 'Apple-style' UI with glassmorphism for a premium user experience.",
      impact: "Streamlined approvals across 3 roles (Staff, Manager, Ops). Reduced processing time by 60% and provided real-time tracking for all stakeholders.",
      features: [
        "Role-Based Access Control (RBAC)",
        "Automated Email Notifications",
        "Interactive Dashboard with Stats",
        "Mobile-Responsive Design"
      ]
    },
    {
      id: 2,
      title: "Algorithmic Trading Bot",
      role: "Lead Developer",
      tags: ["Python", "Docker", "HTX API", "Event-Driven"],
      icon: <Terminal className="w-12 h-12 text-blue-600" />,
      gradient: "from-blue-100 to-indigo-50",
      shortDesc: "An automated trading system connected to the HTX exchange. Executes trades based on technical indicators, manages risk, and provides real-time alerts.",
      problem: "Manual trading required 24/7 monitoring and was prone to emotional errors. Needed a system to execute disciplined strategies automatically.",
      solution: "Built a containerized Python bot running on an event-driven architecture. Integrates with HTX API for execution and Telegram for real-time reporting.",
      impact: "Achieved 99.9% uptime with Docker. Optimized cloud costs by 93% using event-driven triggers instead of always-on servers.",
      features: [
        "Real-time Technical Analysis",
        "Automated Risk Management",
        "Telegram Alerts & Reporting",
        "Daily Portfolio Snapshots"
      ]
    },
    {
      id: 4,
      title: "Local RAG Demo (AI Document Chat)",
      role: "AI Engineer",
      tags: ["Python", "LangChain", "Ollama", "FAISS", "RAG"],
      icon: <Cpu className="w-12 h-12 text-green-600" />,
      gradient: "from-green-100 to-emerald-50",
      shortDesc: "A local-only AI system that allows users to ask questions about their documents using Retrieval-Augmented Generation (RAG) and local LLMs.",
      problem: "Most AI document solutions require cloud APIs (OpenAI), which cost money and raise privacy concerns for enterprise clients.",
      solution: "Built a fully local RAG application using Ollama (Phi3) for inference and FAISS for vector storage. No data leaves the local machine.",
      impact: "Zero-cost inference, complete data privacy, and demonstrates ability to build enterprise-grade AI solutions without cloud dependencies.",
      features: [
        "Local LLM Inference (Phi3)",
        "Vector Database (FAISS)",
        "PDF & DOCX Support",
        "Streamlit UI"
      ]
    }
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-indigo-100 selection:text-indigo-900`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
              className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              Rohit Khullar
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 px-4">About</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 px-4">Projects</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 px-4">Skills</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 px-4">Contact</a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center text-slate-600 hover:text-indigo-600 px-4"
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-block p-2 px-4 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
            Available for Senior Engineer & Architect Roles
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900">
            Building the Bridge Between <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Infrastructure & AI</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I'm a Senior IT Systems Engineer & Automation Architect with 10+ years of experience.
            I transform manual workflows into intelligent, automated systems using the modern Microsoft stack.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-200">
              Let's Talk
            </a>
            <a href="/resume.pdf" className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all hover:scale-105 flex items-center gap-2 shadow-sm">
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="mt-4 text-slate-600">Bridging the gap between traditional IT and modern automation.</p>
          </motion.div>

          <div 
            className="relative max-w-3xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slider Content */}
            <div className="overflow-hidden rounded-2xl">
              {projects.map((project, index) => (
                index === currentSlide && (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        {project.icon}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-100 shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 mb-4">{project.shortDesc}</p>
                      <div className="flex items-center text-indigo-600 font-medium">
                        View Case Study <ExternalLink size={16} className="ml-1" />
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
            
            {/* Controls */}
            <button 
              onClick={() => setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-lg p-3 hover:bg-slate-50 hidden md:block"
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1)}
              className="absolute right-0 top-1/2 translate-x-4 bg-white rounded-full shadow-lg p-3 hover:bg-slate-50 hidden md:block"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === currentSlide ? 'bg-indigo-600 w-6' : 'bg-slate-300 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Technical Arsenal</h2>
            <p className="mt-4 text-slate-600">The tools I use to build scalable solutions.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Cloud className="w-6 h-6" />, title: "Azure Cloud", items: ["VMs", "Networking", "Identity", "PaaS"] },
              { icon: <Server className="w-6 h-6" />, title: "Microsoft 365", items: ["Exchange", "SharePoint", "Teams", "Intune"] },
              { icon: <Code className="w-6 h-6" />, title: "Development", items: ["Python", "React", "Node.js", "PowerShell"] },
              { icon: <Database className="w-6 h-6" />, title: "Automation", items: ["Power Automate", "Logic Apps", "n8n", "AI Agents"] },
            ].map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to Automate Your Infrastructure?</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm currently open to Senior Systems Engineer and Automation Architect roles.
            Let's discuss how I can bring value to your team.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:rohitkhullar786@gmail.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-1">
              <Mail />
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/rohitkhullar786/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:-translate-y-1">
              <Linkedin />
              <span>LinkedIn</span>
            </a>
            <a href="tel:+61415077690" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200 transition-all hover:-translate-y-1">
              <Phone />
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Rohit Khullar. Built with React, Tailwind, and AI.</p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className={`h-32 bg-gradient-to-br ${selectedProject.gradient} relative`}>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <X size={20} className="text-slate-600" />
                </button>
                <div className="absolute -bottom-8 left-8 p-4 bg-white rounded-xl shadow-lg">
                  {selectedProject.icon}
                </div>
              </div>
              
              <div className="pt-12 px-8 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
                    <p className="text-indigo-600 font-medium">{selectedProject.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">The Problem</h3>
                    <p className="text-slate-600 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">The Solution</h3>
                    <p className="text-slate-600 leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Key Impact</h3>
                    <p className="text-slate-600 leading-relaxed bg-green-50 p-4 rounded-lg border border-green-100 text-green-800">
                      {selectedProject.impact}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
