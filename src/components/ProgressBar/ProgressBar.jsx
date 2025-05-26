import { useEffect, useState } from 'react';
import styles from './progressBar.module.css';

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
        <div className={styles.progressBarRoot}>
            <div
                className={styles.progressBarFill}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};