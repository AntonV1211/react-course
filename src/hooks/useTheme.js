import { useContext } from 'react';
import { ThemeContext } from '../components/context/themeContext/ThemeContext';

export const useTheme = () => useContext(ThemeContext);