import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');
    const toggleTheme = () => setTheme(theme === 'default' ? 'alt' : 'default');
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};