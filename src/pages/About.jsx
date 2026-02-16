import React from 'react';

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
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-indigo-300 mb-6 text-center">Who We Are</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 text-center">
                At Utumishi Tech Solutions, we are dedicated to transforming businesses through innovative technology. Our mission is to empower clients with smart software, powerful platforms, and expert consulting.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Our Mission</h2>
                    <p className="text-gray-300">To be the leading tech partner that fuels growth and innovation for businesses through modern digital solutions.</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Our Vision</h2>
                    <p className="text-gray-300">To shape a digital-first future where technology and people connect seamlessly, driving success at every stage.</p>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: '🛡️', title: 'Integrity', desc: 'We uphold the highest standards in all interactions.' },
                        { icon: '🤝', title: 'Collaboration', desc: 'We grow by working closely with clients and partners.' },
                        { icon: '💡', title: 'Innovation', desc: 'We innovate continuously for smarter solutions.' },
                        { icon: '⚙️', title: 'Efficiency', desc: 'We deliver timely and impactful outcomes.' },
                    ].map((value, idx) => (
                        <div key={idx} className="bg-gray-800 p-4 rounded hover:bg-gray-750 transition-colors">
                            <div className="text-xl mb-2">{value.icon}</div>
                            <h3 className="font-bold text-white">{value.title}</h3>
                            <p className="text-sm text-gray-400">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-indigo-400 mb-6">Leadership Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    {team.map((member, idx) => (
                        <div key={idx} className="group">
                            {member.link ? (
                                <a href={member.link} target="_blank" rel="noopener noreferrer" className="block transform transition-transform group-hover:scale-105">
                                    <img src={member.image} alt={member.name} className="w-24 h-24 object-cover mx-auto rounded-full mb-2 border-2 border-indigo-500 shadow-lg" />
                                    <h4 className="font-semibold transition-colors group-hover:text-indigo-400">{member.name}</h4>
                                </a>
                            ) : (
                                <>
                                    <img src={member.image} alt={member.name} className="w-24 h-24 object-cover mx-auto rounded-full mb-2 border-2 border-indigo-500" />
                                    <h4 className="font-semibold">{member.name}</h4>
                                </>
                            )}
                            <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
