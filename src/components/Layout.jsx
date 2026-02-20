import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Only use dark mode if user explicitly set it (not system preference)
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

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

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
