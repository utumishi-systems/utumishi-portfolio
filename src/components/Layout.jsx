import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NetworkMesh from './NetworkMesh';

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
            {/* Animated Network Mesh Background */}
            <NetworkMesh darkMode={darkMode} />

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
