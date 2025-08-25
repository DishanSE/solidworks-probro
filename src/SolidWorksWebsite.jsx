import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, Download, Eye, Wrench, Lightbulb, Clock, Award, ArrowRight, Star, Zap, Target, Users } from 'lucide-react';
import Assembly from "./assets/1.jpg"
import Design from "./assets/2.jpg"
import Model from "./assets/3.jpg"
import Drawing from "./assets/4.jpg"

const SolidWorksWebsite = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  // Floating animation for hero elements
  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Mechanical Assembly",
      description: "Complex mechanical assembly with precision components and detailed drawings.",
      category: "Assembly Design",
      color: "from-blue-500 to-purple-600",
      image: Assembly,
    },
    {
      title: "Product Design",
      description: "Consumer product design from concept to manufacturing-ready files.",
      category: "Product Design",
      color: "from-green-500 to-teal-600",
      image: Design
    },
    {
      title: "3D Modeling",
      description: "Detailed 3D models with parametric design and engineering analysis.",
      category: "3D Modeling",
      color: "from-orange-500 to-red-600",
      image: Model
    },
    {
      title: "Technical Drawings",
      description: "Professional technical drawings with GD&T and manufacturing specifications.",
      category: "Technical Drawings",
      color: "from-indigo-500 to-pink-600",
      image: Drawing
    }
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "3D Modeling & Design",
      description: "Create detailed 3D models from sketches, ideas, or existing products with precision and accuracy.",
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Product Development",
      description: "Complete product development from concept to manufacturing-ready designs.",
      color: "bg-gradient-to-br from-yellow-50 to-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Assembly Design",
      description: "Complex assembly modeling with motion studies and interference detection.",
      color: "bg-gradient-to-br from-green-50 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Technical Drawings",
      description: "Professional 2D technical drawings with detailed dimensions and specifications.",
      color: "bg-gradient-to-br from-purple-50 to-pink-100",
      iconColor: "text-purple-600"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your project requirements, timeline, and objectives.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Create initial concepts and design proposals for your review.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "3D Modeling",
      description: "Develop detailed 3D models using SolidWorks with your feedback.",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      step: "04",
      title: "Review & Refine",
      description: "Review the design together and make necessary refinements.",
      icon: <Eye className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Deliver final files in your preferred format with documentation.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "5+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "2h", label: "Response Time", icon: <Zap className="w-8 h-8" /> },
    { number: "1+", label: "Years Experience", icon: <Award className="w-8 h-8" /> }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.project && formData.message) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', project: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Floating shapes component
  const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                SolidWorks Pro Bro
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'Services', 'Portfolio', 'Process', 'Contact'].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
        <FloatingShapes />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Professional
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> SolidWorks </span>
                Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-delay">
                Transform your ideas into precise 3D models and technical drawings with expert SolidWorks design services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                <a href="#contact" className="group bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#portfolio" className="group border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  View Portfolio
                  <Eye className="ml-2 w-4 h-4 inline-block group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50 animate-pulse"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transform hover:scale-105 transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> SolidWorks </span>
                Designer
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With years of experience in mechanical design and 3D modeling, I provide comprehensive SolidWorks services
                to bring your projects to life. From initial concepts to manufacturing-ready designs, I deliver precision
                and quality in every project.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center group cursor-pointer">
                  <Award className="w-6 h-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Certified Professional</span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <Clock className="w-6 h-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Fast Turnaround</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 animate-bounce">5+</div>
                    <div className="text-gray-600 mb-6">Projects Completed</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 animate-bounce" style={{ animationDelay: '0.5s' }}>100%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offered</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive SolidWorks design services tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer border border-white/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${service.iconColor} mb-4 group-hover:scale-110 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-600 transform translate-x-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sample
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of my recent SolidWorks projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer border border-gray-100"
                onClick={() => setActiveProject(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>


                <div className="p-6">
                  <div className="text-sm font-semibold mb-2">
                    <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-blue-600 text-sm font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to deliver your projects efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workProcess.map((step, index) => (
              <div
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative w-20 h-20 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  <span className="relative z-10">{step.step}</span>
                  <div className="absolute top-2 right-2 text-white/50 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>

                {/* Connection line */}
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your project? Contact me to discuss your requirements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, title: "Email", info: "your.email@example.com", color: "text-blue-600" },
                { icon: <Phone className="w-6 h-6" />, title: "Phone", info: "+1 (555) 123-4567", color: "text-green-600" },
                { icon: <MessageCircle className="w-6 h-6" />, title: "Response Time", info: "Within 2 hours", color: "text-purple-600" }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center group cursor-pointer transform hover:scale-105 transition-all duration-300 p-4 rounded-lg hover:bg-white hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300 p-3 bg-gray-50 rounded-full group-hover:shadow-md`}>
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{contact.title}</div>
                    <div className="text-gray-600 group-hover:text-gray-700 transition-colors">{contact.info}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  >
                    <option value="">Select Project Type</option>
                    <option value="3d-modeling">3D Modeling</option>
                    <option value="assembly">Assembly Design</option>
                    <option value="technical-drawings">Technical Drawings</option>
                    <option value="product-design">Product Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-pulse">
              SolidWorks Pro Bro
            </div>
            <p className="text-gray-300 mb-6 text-lg">Professional SolidWorks Design Services</p>

            {/* Social links placeholder */}
            <div className="flex justify-center space-x-6 mb-8">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={item}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 SolidWorks Pro Bro. All rights reserved. | M.Thadshanan - BSc (Hons) Machanical Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Floating elements in footer */}
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-8 right-8 w-4 h-4 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .hover\\:animate-float:hover {
          animation: float 1s ease-in-out infinite;
        }
        
        /* Custom gradient animations */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SolidWorksWebsite;