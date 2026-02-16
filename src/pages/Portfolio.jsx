import React from 'react';

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
        <section className="max-w-7xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-indigo-300 mb-6 text-center">Our Portfolio</h1>
            <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
                Explore some of the impactful digital solutions we've crafted for clients across various industries.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-indigo-400">{project.title}</h3>
                            <p className="text-sm text-gray-300">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Have a Project in Mind?</h2>
                <p className="text-gray-400 mb-6">Let's bring your idea to life with powerful, scalable technology.</p>
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded transition-colors inline-block">
                    Talk to Us
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
