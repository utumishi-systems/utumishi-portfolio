import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans relative overflow-x-hidden">
            {/* Background logo */}
            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/images/logo.jpg')" }}
            />

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
