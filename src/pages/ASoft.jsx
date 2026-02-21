import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUp, Smartphone, Globe, Zap, MapPin, Phone, Mail, Menu, X } from 'lucide-react';

const ASoft = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Smooth scroll for anchor links
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            {/* Network Node Background Pattern */}
            <div className={`fixed inset-0 z-0 ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="network-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="2" fill={darkMode ? '#ffffff' : '#000000'} opacity="0.3" />
                            <circle cx="0" cy="0" r="1.5" fill={darkMode ? '#ffffff' : '#000000'} opacity="0.2" />
                            <circle cx="60" cy="60" r="1.5" fill={darkMode ? '#ffffff' : '#000000'} opacity="0.2" />
                            <line x1="30" y1="30" x2="0" y2="0" stroke={darkMode ? '#ffffff' : '#000000'} strokeWidth="0.5" opacity="0.1" />
                            <line x1="30" y1="30" x2="60" y2="60" stroke={darkMode ? '#ffffff' : '#000000'} strokeWidth="0.5" opacity="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network-pattern)" />
                </svg>
            </div>

            <div className="relative z-10">
                {/* Header & Navigation */}
                <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <img src="/images/utumishi-logo.svg" alt="Utumishi Tech" className="w-10 h-10" />
                                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Utumishi
                                </span>
                            </div>

                            {/* Centered Navigation */}
                            <nav className="hidden md:flex items-center gap-8">
                                <a href="#home" className={`text-sm font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Home
                                </a>
                                <a href="#services" className={`text-sm font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Services
                                </a>
                                <a href="#products" className={`text-sm font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Products
                                </a>
                                <a href="#about" className={`text-sm font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    About
                                </a>
                                <a href="#contact" className={`text-sm font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Contact
                                </a>
                            </nav>

                            {/* Right Side: Dark Mode Toggle & Mobile Menu Button */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                                    aria-label="Toggle dark mode"
                                >
                                    {darkMode ? (
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-gray-700" />
                                    )}
                                </button>
                                
                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className={`md:hidden p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                                    aria-label="Toggle mobile menu"
                                >
                                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <div className={`md:hidden mt-4 pb-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                                <nav className="flex flex-col gap-4 pt-4">
                                    <a 
                                        href="#home" 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-base font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        Home
                                    </a>
                                    <a 
                                        href="#services" 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-base font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        Services
                                    </a>
                                    <a 
                                        href="#products" 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-base font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        Products
                                    </a>
                                    <a 
                                        href="#about" 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-base font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        About
                                    </a>
                                    <a 
                                        href="#contact" 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-base font-medium hover:text-[#E31E24] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        Contact
                                    </a>
                                </nav>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <section id="home" className="relative py-20 md:py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Text Content */}
                            <div>
                                <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Digital Solutions for Business Performance
                                </h1>
                                <p className={`text-lg md:text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Transforming businesses through innovative digital solutions and cutting-edge technology
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="https://asoft.co.tz/dashboard" className="bg-[#E31E24] hover:bg-[#C91A20] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                                        Sign In
                                    </a>
                                    <button className={`border-2 ${darkMode ? 'border-gray-700 hover:border-gray-600 text-white' : 'border-gray-300 hover:border-gray-400 text-gray-900'} px-8 py-4 rounded-lg font-semibold transition-all`}>
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Right: Office Image with Floating Badges */}
                            <div className="relative">
                                <div className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                    {/* Placeholder for office image */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                        <span className="text-gray-400 text-sm">Modern Office Setting</span>
                                    </div>
                                </div>
                                {/* Floating Badges */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 animate-bounce">
                                    <div className="flex items-center gap-2">
                                        <Smartphone className="w-5 h-5 text-[#E31E24]" />
                                        <span className="text-sm font-semibold text-gray-900">Mobile Apps</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
                                    <div className="flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-[#E31E24]" />
                                        <span className="text-sm font-semibold text-gray-900">Web Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-8 backdrop-blur-sm`}>
                            <div className="text-center">
                                <div className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>10 Years</div>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experience</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>500+</div>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>100+</div>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-4">
                            <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Our Services
                            </span>
                        </div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            What We Offer
                        </h2>
                        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Comprehensive digital solutions to help your business thrive in the digital age
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Service Card 1 */}
                            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col`}>
                                <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center mb-6">
                                    <Smartphone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Mobile App Development
                                </h3>
                                <p className={`mb-6 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Custom mobile applications for iOS and Android platforms, designed to enhance user engagement and business efficiency.
                                </p>
                                <button className={`text-[#E31E24] font-semibold hover:underline self-start`}>
                                    Learn More →
                                </button>
                            </div>

                            {/* Service Card 2 */}
                            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col`}>
                                <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center mb-6">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Web Development
                                </h3>
                                <p className={`mb-6 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Responsive and dynamic websites that provide seamless user experiences across all devices and platforms.
                                </p>
                                <button className={`text-[#E31E24] font-semibold hover:underline self-start`}>
                                    Learn More →
                                </button>
                            </div>

                            {/* Service Card 3 */}
                            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col`}>
                                <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Business Process Automation
                                </h3>
                                <p className={`mb-6 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.
                                </p>
                                <button className={`text-[#E31E24] font-semibold hover:underline self-start`}>
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section id="products" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-4">
                            <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Our Products
                            </span>
                        </div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Featured Solutions
                        </h2>
                        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Innovative products designed to address specific business needs
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Product Card 1: Rental Management System */}
                            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col`}>
                                <div className="aspect-video overflow-hidden relative">
                                    <img 
                                        src="/images/logistics.jpg" 
                                        alt="Rental Management System" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex gap-2 mb-4">
                                        <span className="inline-block bg-[#E31E24] text-white text-xs px-3 py-1 rounded-full font-semibold">Property Management</span>
                                        <span className="inline-block bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Real Estate</span>
                                        <span className="inline-block bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-semibold">SaaS</span>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Rental Management System
                                    </h3>
                                    <p className={`mb-4 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        A comprehensive property and rental management solution that streamlines tenant management, lease tracking, and payment processing.
                                    </p>
                                    <a 
                                        href="https://rental.utumishitech.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`text-[#E31E24] font-semibold hover:underline self-start`}
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>

                            {/* Product Card 2: Telehealth System */}
                            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col`}>
                                <div className="aspect-video overflow-hidden relative">
                                    <img 
                                        src="/images/telehealth.png" 
                                        alt="Telehealth System" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex gap-2 mb-4">
                                        <span className="inline-block bg-[#E31E24] text-white text-xs px-3 py-1 rounded-full font-semibold">Healthcare</span>
                                        <span className="inline-block bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Telemedicine</span>
                                        <span className="inline-block bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Digital Health</span>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Telehealth System
                                    </h3>
                                    <p className={`mb-4 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        A secure telemedicine platform enabling remote consultations, patient monitoring, and digital health records management.
                                    </p>
                                    <a 
                                        href="https://telehealth.utumishitech.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`text-[#E31E24] font-semibold hover:underline self-start`}
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-4">
                            <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                About Us
                            </span>
                        </div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Our Story
                        </h2>
                        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Learn more about Utumishi Tech Solutions and our innovative software products
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            {/* Left: Text */}
                            <div>
                                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Utumishi Tech Solutions is a forward-thinking software engineering startup based in Nairobi, Kenya. We specialize in creating innovative digital solutions that empower businesses to achieve their goals and drive measurable growth.
                                </p>
                                <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Our team of talented engineers combines deep technical expertise with practical business knowledge to deliver software solutions that are efficient, scalable, and future-proof.
                                </p>
                            </div>
                            {/* Right: Architectural Office Photo */}
                            <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                    <span className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>Our Office</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            <div className="text-center">
                                <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Expert Team</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quality Service</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>24/7 Support</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Custom Solutions</div>
                            </div>
                        </div>
                        
                        {/* Years of Excellence */}
                        <div className={`text-center mt-12 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-8`}>
                            <div className={`text-4xl md:text-5xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>10+</div>
                            <div className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years of Excellence</div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-4">
                            <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Contact Us
                            </span>
                        </div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Get in Touch
                        </h2>
                        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Ready to transform your business? Contact us today to discuss your project
                        </p>
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left: Contact Details */}
                            <div>
                                <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className={`w-6 h-6 mt-1 ${darkMode ? 'text-[#E31E24]' : 'text-[#E31E24]'}`} />
                                        <div>
                                            <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Our Location</div>
                                            <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                                Nairobi, Kenya
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className={`w-6 h-6 mt-1 ${darkMode ? 'text-[#E31E24]' : 'text-[#E31E24]'}`} />
                                        <div>
                                            <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone Number</div>
                                            <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                                +255 123 456 789
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className={`w-6 h-6 mt-1 ${darkMode ? 'text-[#E31E24]' : 'text-[#E31E24]'}`} />
                                        <div>
                                            <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email Address</div>
                                            <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                                utumishi.systems@yahoo.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Contact Form */}
                            <div>
                                <form className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-8 shadow-lg`}>
                                    <div className="mb-6">
                                        <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#E31E24]`}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#E31E24]`}
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="subject" className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#E31E24]`}
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#E31E24] resize-none`}
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#E31E24] hover:bg-[#C91A20] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-16 px-6`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8 mb-12">
                            {/* Company Bio/Logo */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <img src="/images/utumishi-logo.svg" alt="Utumishi Tech" className="w-8 h-8" />
                                    <h3 className="text-xl font-bold">Utumishi Tech</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A software engineering startup delivering innovative technology solutions that transform businesses and drive growth.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                                    <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                    <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            {/* Services List */}
                            <div>
                                <h4 className="font-semibold mb-4">Services</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#services" className="hover:text-white transition-colors">Mobile App Development</a></li>
                                    <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                                    <li><a href="#services" className="hover:text-white transition-colors">Business Process Automation</a></li>
                                    <li><a href="#services" className="hover:text-white transition-colors">Custom Software Development</a></li>
                                    <li><a href="#services" className="hover:text-white transition-colors">Digital Transformation</a></li>
                                </ul>
                            </div>

                            {/* Products List */}
                            <div>
                                <h4 className="font-semibold mb-4">Products</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#products" className="hover:text-white transition-colors">Rental Management System</a></li>
                                    <li><a href="#products" className="hover:text-white transition-colors">Telehealth System</a></li>
                                    <li><a href="#products" className="hover:text-white transition-colors">Business Solutions</a></li>
                                    <li><a href="#products" className="hover:text-white transition-colors">Educational Software</a></li>
                                    <li><a href="#products" className="hover:text-white transition-colors">Mobile Applications</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-800'} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
                            <div className="text-sm text-gray-400">
                                © 2026 Utumishi Tech Solutions. All rights reserved.
                            </div>
                            <div className="flex gap-6 text-sm text-gray-400">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            </div>
                            <button
                                onClick={scrollToTop}
                                className={`${showBackToTop ? 'opacity-100' : 'opacity-0'} bg-[#E31E24] hover:bg-[#C91A20] text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-110`}
                                aria-label="Back to top"
                            >
                                <ArrowUp className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ASoft;
