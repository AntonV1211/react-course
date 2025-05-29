import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';
import styles from './css/layout.module.css';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, login, logout } = useUser();

    return (
        <header className={styles.header}>
            <h1>Restaurant App Header</h1>
            <button className={`${theme}`} onClick={toggleTheme}>
                Switch theme
            </button>
            {user ? (
                <>
                    <span style={{ marginLeft: 16 }}>{user.name}</span>
                    <button className={`${theme}`} onClick={logout} style={{ marginLeft: 8 }}>
                        Log Out
                    </button>
                </>
            ) : (
                <button className={`${theme}`} onClick={login} style={{ marginLeft: 16 }}>
                    login
                </button>
            )}
        </header>
    );
};