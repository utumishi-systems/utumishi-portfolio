import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
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

    const handleAnchorClick = (e, hash) => {
        e.preventDefault();
        const targetId = hash.substring(1);
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
    };

    return (
        <>
            <footer className={`bg-gray-900 text-white py-16 px-6`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {/* Company Bio/Logo */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">UTUMISHI TECH</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                A software engineering startup delivering custom technology solutions that drive business growth and innovation.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="hover:text-white transition-colors cursor-pointer">Home</a></li>
                                <li><a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Services</a></li>
                                <li><a href="#products" onClick={(e) => handleAnchorClick(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Products</a></li>
                                <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="hover:text-white transition-colors cursor-pointer">About</a></li>
                                <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
                            </ul>
                        </div>

                        {/* Services List */}
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Mobile App Development</a></li>
                                <li><a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Web Development</a></li>
                                <li><a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Business Process Automation</a></li>
                                <li><a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Custom Software Development</a></li>
                                <li><a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Digital Transformation</a></li>
                            </ul>
                        </div>

                        {/* Products List */}
                        <div>
                            <h4 className="font-semibold mb-4">Products</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#products" onClick={(e) => handleAnchorClick(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Rental Management System</a></li>
                                <li><a href="#products" onClick={(e) => handleAnchorClick(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Telehealth System</a></li>
                                <li><a href="#products" onClick={(e) => handleAnchorClick(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Business Solutions</a></li>
                                <li><a href="#products" onClick={(e) => handleAnchorClick(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Educational Software</a></li>
                                <li><a href="#products" onClick={(e) => handleAnchorClick(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Mobile Applications</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
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
        </>
    );
};

export default Footer;
