import React from 'react';
import { Link } from 'react-router-dom';

const team = [
    {
        name: 'PETER KIBARA',
        role: 'Co-Founder',
        image: '/images/peter.jpg',
        link: 'https://peter-kibara.github.io/Peter-Kibara-portfolio/',
    },
    {
        name: 'MICAH ATEBA',
        role: 'Co-Founder',
        image: '/images/micah.jpg',
    },
    {
        name: 'FRANKLYN MACHAGE',
        role: 'Co-Founder',
        image: '/images/franklyn.png',
    },
    {
        name: 'MORRIS MUCHIRI',
        role: 'Co-Founder',
        image: '/images/morris.jpg',
        link: 'https://trippiieem.github.io/morris.portfolio/',
    },
];

const About = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] -z-10" />

            <div className="text-center max-w-5xl mx-auto mb-32">
                <h1 className="text-7xl font-black text-[#0f172a] mb-8 leading-[1]" style={{ letterSpacing: '-0.04em' }}>Who We Are</h1>
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                    At Utumishi Tech Solutions, we are <span className="text-slate-900 font-bold">dedicated</span> to transforming businesses <br className="hidden md:block" />
                    through innovative technology. Our mission is to empower clients with smart <br className="hidden md:block" />
                    software, powerful platforms, and expert consulting.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-32">
                <div className="bg-white/50 backdrop-blur-sm p-12 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-start gap-8 group hover:shadow-2xl hover:shadow-indigo-500/5 transition-all">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-200">
                        <span className="text-white text-2xl">🚀</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                            To be the leading tech partner that fuels growth and innovation for
                            businesses through modern digital solutions.
                        </p>
                    </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-12 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-start gap-8 group hover:shadow-2xl hover:shadow-indigo-500/5 transition-all">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-200">
                        <span className="text-white text-2xl">👁️</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Vision</h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                            To shape a digital-first future where technology and people connect
                            seamlessly, driving success at every stage.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-40">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-12 h-1.5 bg-[#4f46e5] rounded-full" />
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Core Values</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: '🛡️', title: 'Integrity', desc: 'We uphold the highest standards in all interactions.' },
                        { icon: '🤝', title: 'Collaboration', desc: 'We grow by working closely with clients and partners.' },
                        { icon: '💡', title: 'Innovation', desc: 'We innovate continuously for smarter solutions.' },
                        { icon: '⚙️', title: 'Efficiency', desc: 'We deliver timely and impactful outcomes.' },
                    ].map((value, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-50 hover:shadow-xl transition-all h-full">
                            <div className="text-2xl mb-6">{value.icon}</div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-40">
                <h2 className="text-5xl font-black text-slate-900 mb-20 text-center tracking-tight">Leadership Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {team.map((member, idx) => (
                        <div key={idx} className="group flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl mb-8 transform transition-transform duration-500 group-hover:scale-110">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">{member.name}</h4>
                            <p className="text-indigo-600 font-bold text-sm">Co-Founder</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#0f172a] rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] -mr-64 -mt-64" />
                <h2 className="text-5xl font-black mb-8 leading-tight tracking-tight relative z-10">Ready to build the future?</h2>
                <p className="text-slate-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
                    Join forces with Utumishi Tech and let's craft the future of your enterprise together.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                    <Link to="/contact" className="bg-[#5c4df3] hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all active:scale-95 shadow-xl">
                        Start Your Project
                    </Link>
                    <Link to="/services" className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all border border-white/10 active:scale-95">
                        View Our Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
