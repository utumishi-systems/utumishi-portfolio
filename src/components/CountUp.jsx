import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2, darkMode, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    setIsVisible(true);
                    hasAnimatedRef.current = true;
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const numericEnd = typeof end === 'number' ? end : parseInt(end.toString().replace(/\D/g, ''), 10);
        
        const animationFrame = requestAnimationFrame(function animate(currentTime) {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            const currentCount = Math.floor(numericEnd * progress);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        });

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    const displayValue = count + suffix;

    return (
        <div ref={ref} className="text-center transform transition-all duration-300 hover:scale-105">
            <div className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                {displayValue}
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {suffix.includes('Years') ? 'Experience' : ''}
            </div>
        </div>
    );
};

export default CountUp;
