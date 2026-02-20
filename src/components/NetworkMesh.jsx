import React, { useEffect, useRef } from 'react';

const NetworkMesh = ({ darkMode }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const resizeCanvas = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();

        const particles = [];
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5,
            });
        }
        particlesRef.current = particles;

        const animate = () => {
            // Clear canvas
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // Red color for mesh - increased opacity for visibility
            const dotColor = 'rgba(227, 30, 36, 0.85)';
            const lineColor = 'rgba(227, 30, 36, 0.35)';

            // Update particles
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off walls
                if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
                if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

                // Wrap around
                particle.x = (particle.x + window.innerWidth) % window.innerWidth;
                particle.y = (particle.y + window.innerHeight) % window.innerHeight;

                // Draw particle
                ctx.fillStyle = dotColor;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connecting lines
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0"
            style={{ opacity: 0.3 }}
        />
    );
};

export default NetworkMesh;
