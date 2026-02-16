import React from 'react';

const Contact = () => {
    return (
        <section className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-indigo-300 mb-4 text-center">Get in Touch</h1>
            <p className="text-gray-400 text-center mb-12">
                We'd love to hear from you. Reach out with any questions, project ideas, or partnership opportunities.
            </p>

            <form
                action="https://formspree.io/f/xvgqbjop"
                method="POST"
                className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
            >
                <div>
                    <label htmlFor="name" className="block text-sm mb-1 text-gray-300">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded focus:border-indigo-500 focus:outline-none transition-colors"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-indigo-500/20 transition-all duration-300 active:scale-95"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-12 text-center text-gray-400">
                <p className="mb-2">Email: <a href="mailto:utumishi.systems@yahoo.com" className="text-indigo-400 hover:underline">utumishi.systems@yahoo.com</a></p>
                <p>Location: Nairobi, Kenya</p>
            </div>
        </section>
    );
};

export default Contact;
