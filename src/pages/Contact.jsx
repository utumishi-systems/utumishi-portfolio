import React from 'react';

const Contact = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/2 left-0 w-64 h-64 border border-slate-100 rounded-full -z-10 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border border-slate-100 rounded-full -z-10 translate-x-1/3 translate-y-1/3" />

            <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="text-8xl font-black text-[#0f172a] mb-8 leading-[1]" style={{ letterSpacing: '-0.04em' }}>Get in Touch</h1>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                    We'd love to hear from you. Reach out with any questions, project ideas, or <br className="hidden md:block" />
                    partnership opportunities.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-indigo-500/5 p-16 border border-slate-100 relative">
                <form
                    action="https://formspree.io/f/xvgqbjop"
                    method="POST"
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <label htmlFor="name" className="block text-lg font-black text-slate-900 tracking-tight">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full px-8 py-6 bg-slate-50/50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all text-xl font-medium"
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="email" className="block text-lg font-black text-slate-900 tracking-tight">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            className="w-full px-8 py-6 bg-slate-50/50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all text-xl font-medium"
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="message" className="block text-lg font-black text-slate-900 tracking-tight">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Tell us about your project..."
                            required
                            className="w-full px-8 py-6 bg-slate-50/50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all text-xl font-medium resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-auto bg-[#4e81ee] hover:bg-indigo-700 text-white font-black px-12 py-5 rounded-2xl text-xl shadow-2xl shadow-indigo-200 transition-all active:scale-95 flex items-center gap-3"
                    >
                        Send Message <span className="text-2xl">➤</span>
                    </button>
                </form>
            </div>

            <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-12 text-slate-500 text-xl font-bold">
                <div className="flex items-center gap-4">
                    <span className="text-3xl">📧</span>
                    <a href="mailto:utumishi.systems@yahoo.com" className="hover:text-indigo-600 transition-colors underline decoration-2 underline-offset-8 decoration-indigo-100">utumishi.systems@yahoo.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-3xl">📍</span>
                    <span>Nairobi, Kenya</span>
                </div>
            </div>

            {/* Theme Toggle Button Mockup/Placeholder */}
            <div className="fixed bottom-10 right-10 z-50">
                <button className="w-16 h-16 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-2xl hover:scale-110 transition-transform bg-slate-50/50 backdrop-blur-sm">
                    🌙
                </button>
            </div>
        </section>
    );
};

export default Contact;
