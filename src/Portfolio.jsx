import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code, Database, Globe, Star, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add custom CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      @keyframes gradientX {
        0%, 100% {
          background-size: 200% 200%;
          background-position: left center;
        }
        50% {
          background-size: 200% 200%;
          background-position: right center;
        }
      }
      
      @keyframes spinSlow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-gradient-x {
        animation: gradientX 3s ease infinite;
      }
      
      .animate-spin-slow {
        animation: spinSlow 20s linear infinite;
      }
      
      .delay-200 {
        animation-delay: 0.2s;
      }
      
      .delay-400 {
        animation-delay: 0.4s;
      }
      
      .delay-600 {
        animation-delay: 0.6s;
      }
      
      .delay-1000 {
        animation-delay: 1s;
      }
      
      .delay-2000 {
        animation-delay: 2s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    languages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    frameworks: ['ReactJS', 'Node.js', 'Express.js'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['GitHub', 'VS Code', 'Salesforce', 'Canva', 'XAMPP'],
    soft: ['Communication', 'Leadership', 'Teamwork', 'Adaptability', 'Time Management']
  };

  const projects = [
    {
      title: 'Jay Agencies – Full-Stack E-commerce Platform',
      description: 'A complete MERN stack e-commerce web application with separate Admin and Customer modules.',
      tech: ['MERN Stack', 'MongoDB', 'Node.js', 'Express.js'],
      features: [
        'Separate Admin and Customer modules',
        'Product management with real-time stock control',
        'Cart and wishlist functionality',
        'User profile and order tracking',
        'Sales analytics with Excel export',
        'Dynamic filtering and responsive UI'
      ],
      hasLive: true,
      hasGithub: true,
      isRecent: true
    },
    {
      title: 'Expense Tracker',
      description: 'A comprehensive personal finance management application with categorized expense tracking and visual analytics.',
      tech: ['MERN Stack', 'Nodemailer', 'Chart.js'],
      features: [
        'Categorized expense tracking with visual analytics',
        'PDF/Excel report generation',
        'Email exports via Nodemailer',
        'Dynamic filtering and sorting',
        'Scalable architecture'
      ],
      hasLive: true,
      hasGithub: true
    },
    {
      title: 'Pharmacy Management System',
      description: 'GUI-based system for comprehensive pharmacy operations including inventory and prescription management.',
      tech: ['Python', 'Tkinter', 'MySQL'],
      features: [
        'Inventory management with search functionality',
        'Prescription and sales management',
        'Automated bill generation',
        'CRUD operations for medicines',
        'Secure MySQL database integration'
      ],
      hasLive: false,
      hasGithub: true
    },
    {
      title: 'Real Estate Property Management System',
      description: 'Web-based platform for property listings, user management, and real estate inquiries.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'XAMPP'],
      features: [
        'Property listings with search filters',
        'User profile management',
        'Messaging system for inquiries',
        'Admin module for property management',
        'Responsive web design'
      ],
      hasLive: false,
      hasGithub: true
    }
  ];

  const experience = [
    {
      title: 'Salesforce Developer Intern',
      company: 'Winfomi',
      duration: 'Sep 2024 – Dec 2024',
      type: 'Remote',
      description: 'Developed Salesforce solutions and gained expertise in CRM customization and automation.'
    },
    {
      title: 'Machine Learning Intern',
      company: 'Generative AI Consortium',
      duration: 'Jul 2024 – Oct 2024',
      type: 'Remote',
      description: 'Worked on machine learning projects focusing on generative AI applications and model development.'
    },
    {
      title: 'Web Developer Intern',
      company: 'Auro Tech Solutions',
      duration: 'May 2024 – Jun 2024',
      type: 'Remote',
      description: 'Developed web applications and gained hands-on experience in full-stack development.'
    }
  ];

  const achievements = [
    {
      title: 'MongoDB Associate Developer Certified',
      type: 'Certification',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: '1st Place - Riddle Realm Coding Event',
      event: 'Renaissance-2k23 at KEC',
      type: 'Competition',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: '3rd Place - Fuse Error Coding Event',
      event: 'Code Fest-2k23 at KEC',
      type: 'Competition',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: '3rd Place - Vision Reel Mini Hackathon',
      event: 'Renaissance-2k24',
      type: 'Hackathon',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Haritha E
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-br from-green-400/25 to-blue-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                    Haritha E
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-6 animate-fade-in-up delay-200">
                  Software Developer & Full Stack Engineer
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-400">
                  Passionate about creating innovative solutions with modern technologies. 
                  Experienced in MERN stack, Python, and database management with a focus on 
                  scalable applications and user-centered design.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up delay-600">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative animate-float">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HE</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 relative z-10">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
          >
            <ChevronDown className="w-8 h-8 animate-bounce group-hover:animate-pulse" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Career Objective</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To apply my technical expertise and problem-solving skills in a dynamic environment 
                while effectively communicating ideas and collaborating with teams. I am committed 
                to continuous learning, disciplined work ethics, and innovation to contribute 
                meaningfully to the organization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With ambition, adaptability, and a strong team-oriented mindset, I aim to grow 
                as an engineer and drive impactful advancements in software development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Areas of Interest</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700 font-medium">Database Management Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Full Stack Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Frameworks & Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my latest work showcasing modern web development, full-stack applications, and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${project.isRecent ? 'ring-2 ring-gradient-to-r from-yellow-400 to-orange-500' : ''}`}>
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                {/* Recent Badge */}
                {project.isRecent && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      ✨ Latest
                    </span>
                  </div>
                )}
                
                <div className="p-8 relative z-10">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.duration && (
                      <p className="text-sm text-blue-600 font-medium mb-1">{project.duration}</p>
                    )}
                    {project.association && (
                      <p className="text-sm text-gray-500 mb-3">{project.association}</p>
                    )}
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-blue-600" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-purple-600" />
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <span className="text-gradient-to-r from-blue-500 to-purple-500 mr-3 mt-1 text-xs group-hover/item:scale-125 transition-transform duration-200">
                            ▶
                          </span>
                          <span className="group-hover/item:text-gray-800 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.hasGithub && (
                      <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <Github className="w-4 h-4 mr-2" />
                        View Repository
                      </button>
                    )}
                    {project.hasLive && (
                      <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </button>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always excited to work on new projects and bring innovative ideas to life.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's Build Something Amazing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start justify-between flex-wrap">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-600 mb-3">{exp.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">{exp.duration}</p>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                {index < experience.length - 1 && (
                  <div className="absolute left-6 top-full w-0.5 h-8 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center">
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">B.E. Computer Science and Engineering</h3>
                <p className="text-blue-600 font-medium mb-1">Kongu Engineering College, Erode</p>
                <p className="text-gray-600 text-sm mb-2">2022 – 2026</p>
                <p className="text-gray-900 font-semibold">CGPA: 8.77</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl text-center">
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Secondary Education</h3>
                <p className="text-green-600 font-medium mb-1">Velalar Vidyalayaa Senior Secondary School, Erode</p>
                <p className="text-gray-600 text-sm mb-2">May 2021</p>
                <p className="text-gray-900 font-semibold">Percentage: 95.8%</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center">
                <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secondary Education</h3>
                <p className="text-purple-600 font-medium mb-1">Velalar Vidyalayaa Senior Secondary School, Erode</p>
                <p className="text-gray-600 text-sm mb-2">May 2019</p>
                <p className="text-gray-900 font-semibold">Percentage: 97%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg text-white">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                    {achievement.event && (
                      <p className="text-blue-600 text-sm mb-2">{achievement.event}</p>
                    )}
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {achievement.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Let's Work Together
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8 text-blue-100">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:harithaeswaran@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                  harithaeswaran@gmail.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href="tel:+917339372169" className="text-blue-200 hover:text-white transition-colors">
                  +91 7339372169
                </a>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="mailto:harithaeswaran@gmail.com" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/Haritha-E" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/haritha-e-679240259/" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Haritha E. Designed and developed with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;