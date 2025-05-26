import { useEffect, useState } from 'react';

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'rgba(0,0,0,0.05)',
            zIndex: 1000,
        }}>
            <div style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #4f8cff, #00e1ff)',
                transition: 'width 0.2s',
            }} />
        </div>
    );
};