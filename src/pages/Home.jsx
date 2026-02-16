import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative z-10 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 text-center">
                {/* Subtle radial gradient to focus on hero */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/30 rounded-full blur-[120px] -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-8 border border-indigo-100/50">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-600">
                        Empowering the African Digital Frontier
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] mb-8 leading-[1]" style={{ letterSpacing: '-0.04em' }}>
                    Digital Innovation for <br />
                    <span className="text-[#6366f1]">African Enterprises</span>
                </h1>

                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                    We deliver smart software solutions, <span className="text-slate-900 font-bold">digital</span> platforms, and expert IT consulting tailored for tomorrow’s needs. Partner with us to scale your vision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/services"
                        className="bg-[#4f46e5] hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-indigo-200/50 hover:scale-[1.03] active:scale-95"
                    >
                        Explore Our Services
                    </Link>
                    <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-10 py-5 rounded-2xl text-lg font-bold transition-all border border-slate-200/50">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
                <div className="bg-white/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-indigo-500/5 group text-center">
                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">💡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovative Solutions</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        We design future-ready tech products that solve real business challenges with cutting-edge <span className="text-slate-900 font-bold">thinking</span> and modern architectures.
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-indigo-500/5 group text-center">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">⚙️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Development</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Tailored apps and platforms that align perfectly with your unique goals, operations, and long-term business vision.
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-indigo-500/5 group text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">🌐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Transformation</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Helping businesses shift to modern digital ecosystems that drive sustainable growth, agility, and competitive advantage.
                    </p>
                </div>
            </section>

            {/* Hero Service Section CTA */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-5xl font-black text-[#0f172a] mb-6">Our Services</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium text-lg leading-relaxed">
                    We provide end-to-end technology services that drive innovation, streamline <br className="hidden md:block" />
                    operations, and scale businesses across Africa.
                </p>
            </section>

            {/* Ready to start your journey Section */}
            <section className="bg-[#0f172a] py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] -mr-64 -mt-64" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Ready to start your journey?</h2>
                    <p className="text-slate-400 text-xl font-medium mb-12 leading-relaxed">
                        Join forces with Utumishi Tech and let's craft the future of your enterprise together. <br className="hidden md:block" />
                        We're ready when you are.
                    </p>
                    <Link to="/contact" className="text-indigo-400 font-black text-2xl hover:text-indigo-300 transition-all flex items-center justify-center gap-3 group">
                        Get in touch today
                        <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
