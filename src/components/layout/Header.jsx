import { useTheme } from '../../hooks/useTheme';
import styles from './css/layout.module.css';
import { UserPanel } from '../userPanel/UserPanel.jsx';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <h1>Restaurant App Header</h1>
            <button className={theme} onClick={toggleTheme}>
                Switch theme
            </button>
            <UserPanel />
        </header>
    );
};