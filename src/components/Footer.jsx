import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-50 py-20 px-6 border-t border-slate-100 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-20 text-left">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs">🚀</div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">Utumishi Tech</span>
                        </div>
                        <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                            Leading provider of end-to-end technology services. We drive innovation, streamline operations, and scale businesses globally.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-slate-500 font-bold">
                            <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-indigo-600 transition-colors">Portfolio</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-8">Contact</h4>
                        <ul className="space-y-4 text-slate-500 font-bold">
                            <li className="flex items-center gap-3">📧 <span className="text-sm">utumishi.systems@yahoo.com</span></li>
                            <li className="flex items-center gap-3">📍 <span className="text-sm">Nairobi, Kenya</span></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium">
                        © {new Date().getFullYear()} Utumishi Tech Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-slate-400">
                        <span className="hover:text-indigo-600 cursor-pointer transition-all">FB</span>
                        <span className="hover:text-indigo-600 cursor-pointer transition-all">IG</span>
                        <span className="hover:text-indigo-600 cursor-pointer transition-all">LN</span>
                        <span className="hover:text-indigo-600 cursor-pointer transition-all">GH</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
