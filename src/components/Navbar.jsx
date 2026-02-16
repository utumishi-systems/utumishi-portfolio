import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-gray-800 shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/images/logo.jpg"
                        alt="Utumishi Tech Logo"
                        className="h-10 w-10 object-contain bg-white p-1 rounded-full shadow"
                    />
                    <span className="text-2xl font-bold text-indigo-400">Utumishi Tech</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-300">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`transition-colors hover:text-white ${isActive(link.path) ? 'text-indigo-400 font-semibold' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    to="/contact"
                    className="hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
                >
                    Get a Quote
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2 pb-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded ${isActive(link.path) ? 'bg-gray-700 text-white' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block py-2 mx-4 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded"
                    >
                        Get a Quote
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
