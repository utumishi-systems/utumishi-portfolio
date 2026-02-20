import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', hash: '#home' },
        { name: 'Services', hash: '#services' },
        { name: 'Products', hash: '#products' },
        { name: 'About', hash: '#about' },
        { name: 'Contact', hash: '#contact' },
    ];

    useEffect(() => {
        // Sync with Layout's dark mode
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

    useEffect(() => {
        // Track active section on scroll
        const handleScroll = () => {
            const sections = navLinks.map(link => link.hash.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const currentDarkMode = document.documentElement.classList.contains('dark');
        if (currentDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        }
        setDarkMode(!currentDarkMode);
    };

    const handleNavClick = (e, hash) => {
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
        setIsOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a 
                        href="#home" 
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src="/images/utumishi-logo.svg" alt="Utumishi Tech" className="w-10 h-10" />
                        <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Utumishi
                        </span>
                    </a>

                    {/* Centered Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.hash}
                                onClick={(e) => handleNavClick(e, link.hash)}
                                className={`text-sm font-medium hover:text-[#E31E24] transition-colors ${activeSection === link.hash.substring(1) ? 'text-[#E31E24]' : darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side: Dark Mode Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
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
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                            aria-label="Toggle mobile menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={`md:hidden mt-4 pb-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                        <nav className="flex flex-col gap-4 pt-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.hash}
                                    onClick={(e) => handleNavClick(e, link.hash)}
                                    className={`text-base font-medium hover:text-[#E31E24] transition-colors ${activeSection === link.hash.substring(1) ? 'text-[#E31E24]' : darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
