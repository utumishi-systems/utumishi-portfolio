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
        <section className="max-w-7xl mx-auto py-24 px-6 relative z-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-[70%] -translate-y-[20%] w-[300px] h-[300px] border border-slate-100 rounded-full -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[40%] w-[400px] h-[400px] border border-slate-100 rounded-full -z-10" />

            <div className="text-center max-w-3xl mx-auto mb-32">
                <h1 className="text-7xl font-black text-[#0f172a] mb-8 leading-[1]" style={{ letterSpacing: '-0.04em' }}>Our Services</h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed">
                    We provide end-to-end technology services that drive innovation, streamline <br className="hidden md:block" />
                    operations, and scale businesses across the globe.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-indigo-50/50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-indigo-600 transition-all duration-300">
                            <span className="text-2xl transform transition-transform group-hover:scale-110 group-hover:text-white">{service.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{service.title}</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">
                            We align tech strategy with your business goals through experienced consultancy.
                            Modernize your <span className="text-slate-900 font-bold">legacy</span> systems effectively.
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-32">
                <h2 className="text-5xl font-black text-[#0f172a] mb-8">Ready to Transform Your Business?</h2>
                <p className="text-slate-500 mb-12 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                    Partner with Utumishi Tech and build future-proof technology that works for you. <br className="hidden md:block" />
                    Let's discuss your vision today.
                </p>
                <Link to="/contact" className="bg-[#4f46e5] hover:bg-indigo-700 text-white px-12 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-indigo-200 inline-block active:scale-95">
                    Request a Free Consultation
                </Link>
            </div>
        </section>
    );
};

export default Services;
