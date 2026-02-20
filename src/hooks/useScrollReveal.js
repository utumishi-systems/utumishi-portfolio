import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
    } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin]);

    return { ref, isVisible };
};

export default useScrollReveal;
