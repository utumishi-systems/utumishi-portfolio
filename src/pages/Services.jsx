import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: '🧩',
        title: 'Custom Software Development',
        description: 'Tailored applications that match your workflow, industry, and long-term goals.',
    },
    {
        icon: '📱',
        title: 'Mobile App Development',
        description: 'Cross-platform mobile apps built with performance and usability in mind.',
    },
    {
        icon: '🖥️',
        title: 'Web Design & Platforms',
        description: 'Beautiful, scalable, and SEO-friendly websites and portals tailored to your brand.',
    },
    {
        icon: '🧠',
        title: 'IT & Digital Consulting',
        description: 'We align tech strategy with your business goals through experienced consultancy.',
    },
    {
        icon: '🤖',
        title: 'Machine Learning & AI',
        description: 'Intelligent solutions that leverage data for smarter decision-making and automation.',
    },
    {
        icon: '🔧',
        title: 'Support & Maintenance',
        description: 'Ongoing support to keep your systems optimized, secure, and up-to-date.',
    },
];

const Services = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6 relative z-10">
            <h1 className="text-4xl font-bold text-indigo-300 mb-6 text-center">Our Services</h1>
            <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
                We provide end-to-end technology services that drive innovation, streamline operations, and scale businesses.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">{service.title}</h3>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20">
                <h2 className="text-2xl text-indigo-300 font-semibold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-gray-400 mb-6">Partner with Utumishi Tech and build future-proof technology that works for you.</p>
                <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded transition-colors inline-block">
                    Request a Free Consultation
                </Link>
            </div>
        </section>
    );
};

export default Services;
