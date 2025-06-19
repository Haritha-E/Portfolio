import React, { useState, useEffect} from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code, Database, Globe, Star, Menu, X, Moon, Sun, ArrowUp, Rocket } from 'lucide-react';
import profilePic from './profile.jpg';
import resumePDF from './Resume.pdf';
import jayAgenciesImage from './jay-agencies.jpeg';
import expenseTrackerImage from './expense-tracker.jpg';
import pharmacyImage from './pharmacy.jpg';
import realEstateImage from './real-estate.jpg';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovering, setIsHovering] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      setShowScrollTop(window.scrollY > 500);

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
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
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
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
      
      @keyframes wave {
        0% {
          transform: rotate(0deg);
        }
        10% {
          transform: rotate(14deg);
        }
        20% {
          transform: rotate(-8deg);
        }
        30% {
          transform: rotate(14deg);
        }
        40% {
          transform: rotate(-4deg);
        }
        50% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      
      @keyframes borderRainbow {
        0% {
          border-color: #3b82f6;
        }
        20% {
          border-color: #8b5cf6;
        }
        40% {
          border-color: #ec4899;
        }
        60% {
          border-color: #f59e0b;
        }
        80% {
          border-color: #10b981;
        }
        100% {
          border-color: #3b82f6;
        }
      }

      @keyframes rocketFloat {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        25% {
          transform: translateY(-10px) rotate(5deg);
        }
        50% {
          transform: translateY(0) rotate(0deg);
        }
        75% {
          transform: translateY(-10px) rotate(-5deg);
        }
      }

      @keyframes profileFrame {
        0% {
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
        }
        70% {
          box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      
      .animate-gradient-x {
        animation: gradientX 6s ease infinite;
        background-size: 200% 200%;
      }
      
      .animate-spin-slow {
        animation: spinSlow 25s linear infinite;
      }
      
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      .animate-wave {
        animation: wave 2s ease infinite;
      }
      
      .animate-border-rainbow {
        animation: borderRainbow 8s linear infinite;
      }

      .animate-rocket {
        animation: rocketFloat 3s ease-in-out infinite;
      }

      .animate-profile-frame {
        animation: profileFrame 2s ease-in-out infinite;
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
      
      .delay-800 {
        animation-delay: 0.8s;
      }
      
      .delay-1000 {
        animation-delay: 1s;
      }
      
      .delay-2000 {
        animation-delay: 2s;
      }
      
      .text-gradient {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .hover-3d {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-3d:hover {
        transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      
      .glow-effect {
        position: relative;
      }
      
      .glow-effect::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
      }
      
      .glow-effect:hover::after {
        opacity: 1;
      }
      
      .parallax-bg {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      
      .card-hover-effect {
        transition: all 0.3s ease;
        transform-style: preserve-3d;
      }
      
      .card-hover-effect:hover {
        transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }
      
      .tilt-effect {
        transition: transform 0.5s ease;
      }
      
      .tilt-effect:hover {
        transform: rotate(2deg) scale(1.02);
      }
      
      .project-card {
        perspective: 1000px;
      }
      
      .project-card-inner {
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }
      
      .project-card:hover .project-card-inner {
        transform: rotateY(10deg) rotateX(5deg);
      }
      
      .neon-border {
        position: relative;
        border: 2px solid transparent;
      }
      
      .neon-border::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 2px solid transparent;
        border-radius: inherit;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6);
        background-size: 400% 400%;
        z-index: -1;
        animation: gradientX 8s ease infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .neon-border:hover::before {
        opacity: 1;
      }
      
      .dark .neon-border:hover::before {
        opacity: 0.7;
      }

      .profile-frame {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.3);
        transition: all 0.5s ease;
      }

      .profile-frame:hover {
        box-shadow: 0 0 0 12px rgba(59, 130, 246, 0.5);
        transform: scale(1.02);
      }

      .profile-frame::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
        background-size: 400% 400%;
        z-index: -1;
        animation: gradientX 8s ease infinite;
        opacity: 0.7;
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const skills = {
    languages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    frameworks: ['ReactJS', 'Node.js', 'Express.js'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['GitHub', 'VS Code', 'Salesforce', 'Canva'],
    soft: ['Communication', 'Leadership', 'Teamwork', 'Adaptability', 'Time Management']
  };

   const projects = [
    {
      title: 'Expense Tracker',
      description: 'A personal finance management application with categorized expense tracking and visual analytics using charts and graphs. Features PDF/Excel report generation and email exports via Nodemailer for seamless financial insights.',
      tech: ['MERN Stack', 'Nodemailer', 'Chart.js'],
      image: expenseTrackerImage,
      githubLink: 'https://github.com/Haritha-E/Expense-Tracker-Application',
      liveLink: 'https://expense-tracker-frontend-40km.onrender.com'
    },
    {
      title: 'Jay Agencies: E-commerce Platform',
      description: 'A role-based e-commerce web app with Admin and Customer modules. Features product listing, cart, wishlist, checkout, order management, and real-time stock control with admin-side product management and sales analytics.',
      tech: ['MERN Stack', 'MongoDB', 'JWT', 'Nodemailer'],
      image: jayAgenciesImage,
      githubLink: 'https://github.com/Haritha-E/Jay-Agencies-Website',
      liveLink: 'https://jay-agencies-website.vercel.app/'
    },
    {
      title: 'Pharmacy Management System',
      description: 'A GUI-based system for inventory, prescriptions, and sales management with integrated search, bill generation, and CRUD operations for medicines and prescriptions. Uses MySQL database for secure and efficient data storage.',
      tech: ['Python', 'Tkinter', 'MySQL'],
      image: pharmacyImage,
      githubLink: 'https://github.com/Haritha-E/Pharmacy-Management-System'
    },
    {
      title: 'Real Estate Property Management System',
      description: 'A digital marketplace connecting property seekers with their dream homes. This platform simplifies property discovery with advanced search capabilities while providing realtors with powerful tools to showcase listings and engage with potential buyers.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'XAMPP'],
      image: realEstateImage,
      githubLink: 'https://github.com/Haritha-E/Real-Estate-Property-Management-System'
    }
  ];

  const experience = [
    {
      title: 'Web Developer Intern',
      company: 'Auro Tech Solutions',
      duration: 'May 2024 – Jun 2024',
      type: 'Remote',
      description: 'Developed web applications and gained hands-on experience in full-stack development.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Maximize Learning Intern',
      company: 'Generative AI Consortium',
      duration: 'Jul 2024 – Oct 2024',
      type: 'Remote',
      description: 'Working on machine learning projects focusing on generative AI applications and model development.',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Salesforce Developer Intern',
      company: 'Winfomi',
      duration: 'Sep 2024 – Dec 2024',
      type: 'Remote',
      description: 'Will be developing Salesforce solutions and gaining expertise in CRM customization and automation.',
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      title: 'MongoDB Associate Developer Certified',
      event: 'MongoDB University',
      type: 'Certification',
      icon: <Database className="w-6 h-6" />,
      date: '2024'
    },
    {
      title: '1st Place - Riddle Realm Coding Event',
      event: 'Renaissance–2k23 at KEC',
      type: 'Competition',
      icon: <Award className="w-6 h-6" />,
      date: '2023'
    },
    {
      title: '3rd Place - Fuse Error Coding Event',
      event: 'Code Fest–2k23 at KEC',
      type: 'Competition',
      icon: <Award className="w-6 h-6" />,
      date: '2023'
    },
    {
      title: '3rd Place - Vision Reel Mini Hackathon',
      event: 'Renaissance–2k24',
      type: 'Hackathon',
      icon: <Award className="w-6 h-6" />,
      date: '2024'
    }
  ];

  const education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Kongu Engineering College, Erode',
      duration: '2022 – 2026',
      score: 'CGPA: 8.77',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Velalar Vidyalaya Senior Secondary School, Erode',
      duration: '2021',
      score: 'Percentage: 95.8%',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: 'Secondary Education',
      institution: 'Velalar Vidyalaya Senior Secondary School, Erode',
      duration: '2019',
      score: 'Percentage: 97%',
      icon: <GraduationCap className="w-8 h-8" />
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
      <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'}`}>      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 ${
            darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-200/20 to-purple-200/20'}`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-100'} backdrop-blur-md z-50 shadow-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className={`inline-block ${isHovering ? 'animate-wave' : ''}`}>👋</span> Haritha E
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : `${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
              
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? `${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'} font-medium`
                      : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
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
      <section id="home" className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-blue-900/30' : 'bg-blue-400/30'}`}></div>
          <div className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-400/20'}`}></div>
          <div className={`absolute top-1/2 left-3/4 w-48 h-48 rounded-full blur-3xl animate-pulse delay-2000 ${darkMode ? 'bg-green-900/25' : 'bg-green-400/25'}`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="animate-fade-in-up">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}>
                  Hi, I'm{' '}
                  <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                    Haritha E
                  </span>
                </h1>
                <p className={`text-xl lg:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 animate-fade-in-up delay-200`}>
                  <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Full Stack Developer</span> & <span className={`font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Creative Problem Solver</span>
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed animate-fade-in-up delay-400`}>
                  I build exceptional digital experiences with modern technologies. 
                  Passionate about creating scalable web applications with intuitive 
                  interfaces and robust backends.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up delay-600">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                  <a 
                    href={resumePDF} 
                    download="Haritha_E_Resume.pdf"
                    className={`relative overflow-hidden group border-2 ${darkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-600' : 'border-blue-600 text-blue-600 hover:bg-blue-600'} px-8 py-3 rounded-lg font-medium hover:text-white transition-all duration-300 transform hover:scale-105`}
                  >
                    <span className="relative z-10">Download Resume</span>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className={`profile-frame w-80 h-80 shadow-2xl border-8 ${darkMode ? 'border-gray-700 hover:border-blue-500/30' : 'border-white/20 hover:border-blue-400/30'} transition-all duration-500 animate-profile-frame`}>
                  <img src={profilePic} alt="Haritha E" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Tech Icons */}
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
        
        {/* Scroll Indicator - Centered version */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <button
            onClick={() => scrollToSection('about')}
            className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300 group`}
          >
            <span className="block text-sm mb-2 opacity-70 group-hover:opacity-100">Explore More</span>
            <ChevronDown className="w-8 h-8 animate-bounce mx-auto group-hover:animate-pulse" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} relative overflow-hidden`}>
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className={`text-3xl lg:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-16`}>
            <span className="relative inline-block">
              <span className={`absolute -bottom-2 left-0 w-full h-2 ${darkMode ? 'bg-blue-400/30' : 'bg-blue-200/50'}`}></span>
              <span className="relative">About Me</span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-8 rounded-3xl shadow-lg border`}>
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center`}>
                <span className="w-6 h-6 bg-blue-600 rounded-full mr-3"></span>
                Career Objective
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                To apply my technical expertise and problem-solving skills in a dynamic environment 
                while effectively communicating ideas and collaborating with teams. I am committed 
                to continuous learning, disciplined work ethics, and innovation to contribute 
                meaningfully to the organization.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                With ambition, adaptability, and a strong team-oriented mindset, I aim to grow 
                as an engineer and drive impactful advancements in software development.
              </p>
            </div>
            
            <div className={`card-hover-effect ${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-white/20'} p-8 rounded-3xl shadow-lg border`}>
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center`}>
                <span className="w-6 h-6 bg-purple-600 rounded-full mr-3"></span>
                Areas of Interest
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`flex items-start space-x-4 p-4 ${darkMode ? 'bg-gray-600/70' : 'bg-white/70'} rounded-xl backdrop-blur-sm`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Web Development</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Building modern, responsive web applications</p>
                  </div>
                </div>
                
                <div className={`flex items-start space-x-4 p-4 ${darkMode ? 'bg-gray-600/70' : 'bg-white/70'} rounded-xl backdrop-blur-sm`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Database className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Database Systems</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Designing efficient data architectures</p>
                  </div>
                </div>
                
                <div className={`flex items-start space-x-4 p-4 ${darkMode ? 'bg-gray-600/70' : 'bg-white/70'} rounded-xl backdrop-blur-sm`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full Stack</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>End-to-end application development</p>
                  </div>
                </div>
                
                <div className={`flex items-start space-x-4 p-4 ${darkMode ? 'bg-gray-600/70' : 'bg-white/70'} rounded-xl backdrop-blur-sm`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Software Engineering</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Building scalable solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-blue-50'} relative overflow-hidden`}>
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-blue-900/30' : 'bg-blue-200/30'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-200/30'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              My <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              A diverse set of technical and soft skills that I've developed through projects and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages Card */}
            <div className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-blue-200 transition-all duration-300`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`inline-flex items-center px-3 py-2 ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-800'} rounded-full text-sm font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks Card */}
            <div className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-green-200 transition-all duration-300`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Frameworks & Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`inline-flex items-center px-3 py-2 ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-800'} rounded-full text-sm font-medium hover:bg-green-100 hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases Card */}
            <div className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-purple-200 transition-all duration-300`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Databases</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`inline-flex items-center px-3 py-2 ${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-800'} rounded-full text-sm font-medium hover:bg-purple-100 hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Card */}
            <div className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-orange-200 transition-all duration-300`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`inline-flex items-center px-3 py-2 ${darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-orange-800'} rounded-full text-sm font-medium hover:bg-orange-100 hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-red-200 transition-all duration-300 md:col-span-2 lg:col-span-1`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-red-600" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`inline-flex items-center px-3 py-2 ${darkMode ? 'bg-red-900/50 text-red-300' : 'bg-red-50 text-red-800'} rounded-full text-sm font-medium hover:bg-red-100 hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} relative overflow-hidden`}>
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100/30'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Featured <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore my latest work showcasing modern web development, full-stack applications, and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className={`project-card-inner group relative ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border ${darkMode ? 'border-gray-600' : 'border-gray-100'} transform hover:-translate-y-2`}>
                  {/* Gradient Border Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="p-6 relative z-10">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                        {project.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{project.description}</p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'} mb-3 flex items-center`}>
                        <Code className="w-4 h-4 mr-2 text-blue-600" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`${darkMode ? 'bg-gray-600 text-blue-300' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'} px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Repository
                      </a>
                      
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          See Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-white/20'} rounded-2xl p-8 border shadow-lg inline-block`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Have a project in mind?
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-lg mx-auto`}>
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
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100/30'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Professional <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              My journey through various roles and the skills I've acquired along the way
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline */}
                <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className="absolute top-0 left-0 w-4 h-4 -ml-1.5 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                
                <div className={`card-hover-effect ml-8 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-blue-200 transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-600' : 'bg-blue-100'}`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                          <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>{exp.duration}</span>
                      <span className={`inline-block ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'} px-2 py-1 rounded text-xs font-medium`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-4 mb-4`}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              My <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Education</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Academic journey and qualifications that shaped my technical foundation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-8 rounded-2xl shadow-md border hover:border-blue-200 transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-gray-600' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                    {edu.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{edu.degree}</h3>
                  <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium mb-2`}>{edu.institution}</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>{edu.duration}</p>
                  <p className={`${darkMode ? 'text-white bg-gray-600' : 'text-gray-900 bg-gray-100'} font-semibold px-4 py-2 rounded-full`}>
                    {edu.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100/30'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Awards & <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Achievements</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Recognitions and accomplishments that highlight my skills and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`card-hover-effect ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-md border hover:border-yellow-200 transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${darkMode ? 'bg-gray-600' : 'bg-gradient-to-br from-yellow-100 to-orange-100'}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{achievement.title}</h3>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-sm mb-2`}>{achievement.event}</p>
                    <div className="flex items-center justify-between">
                      <span className={`${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'} px-2 py-1 rounded text-xs font-medium`}>
                        {achievement.type}
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700/30 via-purple-700/30 to-pink-700/30"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300">Connect</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Card - Email */}
              <div className="card-hover-effect bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <a 
                    href="mailto:harithaeswaran@gmail.com" 
                    className="text-blue-200 hover:text-white transition-colors duration-300 inline-block mt-2"
                  >
                    harithaeswaran@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Contact Card - Phone */}
              <div className="card-hover-effect bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Me</h3>
                  <a 
                    href="tel:+917339372169" 
                    className="text-blue-200 hover:text-white transition-colors duration-300 inline-block mt-2"
                  >
                    +91 7339372169
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:harithaeswaran@gmail.com" 
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Haritha-E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/haritha-e-679240259/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white py-12 relative overflow-hidden`}>
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-blue-900/20' : 'bg-blue-800/20'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-800/20'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Haritha E
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Full Stack Developer | Software Engineer | Problem Solver
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:harithaeswaran@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Haritha-E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/haritha-e-679240259/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Haritha E. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;