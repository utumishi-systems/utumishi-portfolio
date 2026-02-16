import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <section className="text-center py-24 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-300 mb-6 leading-tight">
                    Digital Innovation for African Enterprises
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    We deliver smart software solutions, digital platforms, and expert IT consulting tailored for tomorrow’s needs.
                </p>
                <Link
                    to="/services"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block shadow-lg hover:shadow-indigo-500/25"
                >
                    Explore Our Services
                </Link>
            </section>

            {/* Features Section */}
            <section className="bg-gray-800/80 backdrop-blur-sm py-20 px-6">
                <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
                    <div className="text-center group">
                        <div className="text-indigo-400 text-5xl mb-6 transform transition-transform group-hover:scale-110">💡</div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Innovative Solutions</h3>
                        <p className="text-gray-400 leading-relaxed">We design future-ready tech products that solve real business challenges with cutting-edge thinking.</p>
                    </div>
                    <div className="text-center group">
                        <div className="text-indigo-400 text-5xl mb-6 transform transition-transform group-hover:scale-110">⚙️</div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Custom Development</h3>
                        <p className="text-gray-400 leading-relaxed">Tailored apps and platforms that align perfectly with your unique goals, operations, and vision.</p>
                    </div>
                    <div className="text-center group">
                        <div className="text-indigo-400 text-5xl mb-6 transform transition-transform group-hover:scale-110">🌐</div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Digital Transformation</h3>
                        <p className="text-gray-400 leading-relaxed">Helping businesses shift to modern digital ecosystems that drive sustainable growth and agility.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your journey?</h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                    Join forces with Utumishi Tech and let's craft the future of your enterprise together.
                </p>
                <Link to="/contact" className="text-indigo-400 font-bold text-xl hover:text-indigo-300 border-b-2 border-indigo-400 pb-1 transition-all">
                    Get in touch today &rarr;
                </Link>
            </section>
        </div>
    );
};

export default Home;
