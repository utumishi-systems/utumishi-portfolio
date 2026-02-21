import React, { useState, useEffect } from 'react';
import { Smartphone, Globe, Zap, ArrowUp } from 'lucide-react';
import CountUp from '../components/CountUp';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Sync with dark mode from document
        const checkDarkMode = () => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <section id="home" className="relative py-20 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Custom Software Engineering Solutions
                            </h1>
                            <p className={`text-lg md:text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Empowering businesses with innovative software solutions and cutting-edge technology tailored to your needs
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#E31E24] hover:bg-[#C91A20] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                                    Get Started
                                </button>
                                <button className={`border-2 ${darkMode ? 'border-gray-700 hover:border-gray-600 text-white' : 'border-gray-300 hover:border-gray-400 text-gray-900'} px-8 py-4 rounded-lg font-semibold transition-all`}>
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right: Office Image with Floating Badges */}
                        <div className="relative">
                            <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} animate-fade-in-up`}>
                                {/* Office image */}
                                <img 
                                    src="/images/office.jpg" 
                                    alt="Modern Office Setting" 
                                    className="w-full h-full object-cover aspect-[4/3]"
                                />
                            </div>
                            {/* Floating Badges */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 animate-float hover:scale-110 transition-transform cursor-default">
                                <div className="flex items-center gap-2">
                                    <Smartphone className="w-5 h-5 text-[#E31E24]" />
                                    <span className="text-sm font-semibold text-gray-900">Mobile Apps</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 animate-float-delayed hover:scale-110 transition-transform cursor-default">
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-[#E31E24]" />
                                    <span className="text-sm font-semibold text-gray-900">Web Development</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-8 backdrop-blur-sm animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                        <CountUp end={10} duration={2} darkMode={darkMode} suffix=" Years" />
                        <div className="text-center transform transition-all duration-300 hover:scale-105">
                            <div className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>500+</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
                        </div>
                        <div className="text-center transform transition-all duration-300 hover:scale-105">
                            <div className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>100+</div>
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
                        <ServiceCard 
                            icon={<Smartphone className="w-8 h-8 text-white" />}
                            title="Mobile App Development"
                            description="Custom mobile applications for iOS and Android platforms, designed to enhance user engagement and business efficiency."
                            darkMode={darkMode}
                            delay={0}
                        />

                        {/* Service Card 2 */}
                        <ServiceCard 
                            icon={<Globe className="w-8 h-8 text-white" />}
                            title="Web Development"
                            description="Responsive and dynamic websites that provide seamless user experiences across all devices and platforms."
                            darkMode={darkMode}
                            delay={0.1}
                        />

                        {/* Service Card 3 */}
                        <ServiceCard 
                            icon={<Zap className="w-8 h-8 text-white" />}
                            title="Business Process Automation"
                            description="Streamline your operations with custom automation solutions that reduce manual work and increase efficiency."
                            darkMode={darkMode}
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4 animate-fade-in-up">
                        <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Our Products
                        </span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                        Featured Solutions
                    </h2>
                    <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                        Innovative products designed to address specific business needs
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Product Card 1: Rental Management System */}
                        <ProductCard 
                            title="Rental Management System"
                            description="A comprehensive property and rental management solution that streamlines tenant management, lease tracking, and payment processing."
                            tags={['Property Management', 'Real Estate', 'SaaS']}
                            image="/images/logistics.jpg"
                            link="https://rental.utumishitech.com"
                            darkMode={darkMode}
                            delay={0.1}
                        />

                        {/* Product Card 2: Telehealth System */}
                        <ProductCard 
                            title="Telehealth System"
                            description="A secure telemedicine platform enabling remote consultations, patient monitoring, and digital health records management."
                            tags={['Healthcare', 'Telemedicine', 'Digital Health']}
                            image="/images/telehealth.png"
                            link="https://hbpostdmanagement.web.app/"
                            darkMode={darkMode}
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4 animate-fade-in-up">
                        <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            About Us
                        </span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                        Our Story
                    </h2>
                    <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                        Learn more about Utumishi Tech Solutions and our mission to deliver world-class software engineering
                    </p>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left: Text */}
                        <div>
                            <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Utumishi Tech Solutions is a forward-thinking software engineering startup dedicated to transforming businesses through innovative technology. We specialize in creating custom software solutions that solve real business problems and drive measurable results.
                            </p>
                            <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Our talented team of engineers combines deep technical expertise with practical business insight to deliver solutions that are efficient, scalable, and future-proof.
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
            <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4 animate-fade-in-up">
                        <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Contact Us
                        </span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                        Get in Touch
                    </h2>
                    <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
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
                                    <div className={`w-6 h-6 mt-1 ${darkMode ? 'text-[#E31E24]' : 'text-[#E31E24]'}`}>📍</div>
                                    <div>
                                        <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Our Location</div>
                                        <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                            Nairobi, Kenya
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className={`w-6 h-6 mt-1 ${darkMode ? 'text-[#E31E24]' : 'text-[#E31E24]'}`}>📞</div>
                                    <div>
                                        <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone Number</div>
                                        <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                            +255 123 456 789
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className={`w-6 h-6 mt-1 ${darkMode ? 'text-[#E31E24]' : 'text-[#E31E24]'}`}>✉️</div>
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

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 bg-[#E31E24] hover:bg-[#C91A20] text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-110 z-50`}
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

const ServiceCard = ({ icon, title, description, darkMode, delay }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div 
            ref={ref}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay * 0.2}s`
            }}
        >
            <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {icon}
            </div>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h3>
            <p className={`mb-6 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {description}
            </p>
            <button className={`text-[#E31E24] font-semibold hover:underline self-start`}>
                Learn More →
            </button>
        </div>
    );
};

const ProductCard = ({ title, description, tags, darkMode, delay, image, link }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div 
            ref={ref}
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform flex flex-col
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay * 0.2}s`
            }}
        >
            <div className="aspect-video overflow-hidden relative hover:-translate-y-1 transition-transform">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                    {tags.map((tag, index) => (
                        <span 
                            key={index}
                            className={`inline-block ${index === 0 ? 'bg-[#E31E24]' : 'bg-gray-600'} text-white text-xs px-3 py-1 rounded-full font-semibold`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>
                <p className={`mb-4 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {description}
                </p>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-[#E31E24] font-semibold hover:underline self-start`}
                >
                    View Project →
                </a>
            </div>
        </div>
    );
};

export default Home;
