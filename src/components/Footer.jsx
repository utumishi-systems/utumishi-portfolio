import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-700 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                © {new Date().getFullYear()} Utumishi Tech Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
