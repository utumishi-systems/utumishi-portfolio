import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans relative overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
            {/* Dynamic Dot Grid Background */}
            <div className="fixed inset-0 z-0 bg-dot-grid pointer-events-none opacity-40" />

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
