import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        image: '/images/agroconnect.jpg',
        title: 'AgroConnect Platform',
        description: 'A smart agriculture mobile solution helping farmers track production and market prices.',
    },
    {
        image: '/images/healthcare.jpg',
        title: 'HealthCare Portal',
        description: 'A patient-centric web platform for hospitals offering virtual appointments and record access.',
    },
    {
        image: '/images/edusmart.jpg',
        title: 'EduSmart LMS',
        description: 'A Learning Management System for schools, supporting remote classes and assessments.',
    },
    {
        image: '/images/retailpos.jpg',
        title: 'RetailPOS Suite',
        description: 'An intelligent POS system for managing sales, inventory, and reporting in retail chains.',
    },
    {
        image: '/images/logistics.jpg',
        title: 'Logistics Dashboard',
        description: 'Real-time logistics analytics and vehicle tracking for courier and delivery services.',
    },
    {
        image: '/images/financeai.jpg',
        title: 'FinanceAI Assistant',
        description: 'AI-driven budgeting and forecasting web tool for small businesses and startups.',
    },
];

const Portfolio = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] -z-10" />

            <div className="text-center max-w-4xl mx-auto mb-32">
                <h1 className="text-7xl font-black text-[#0f172a] mb-8 leading-[1]" style={{ letterSpacing: '-0.04em' }}>Our Portfolio</h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed">
                    Explore some of the impactful digital solutions we've <span className="text-slate-900 font-bold">crafted</span> for <br className="hidden md:block" />
                    clients across various industries.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group">
                        <div className="p-4">
                            <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="p-8 pt-0">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">{project.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-40">
                <h2 className="text-6xl font-black text-[#0f172a] mb-8">Have a Project in Mind?</h2>
                <p className="text-slate-500 mb-16 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                    Let's bring your idea to life with powerful, scalable <br className="hidden md:block" />
                    technology that grows with your business.
                </p>
                <Link to="/contact" className="bg-[#5c4df3] hover:bg-indigo-700 text-white px-12 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-indigo-200 inline-block active:scale-95">
                    Talk to Us
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;
