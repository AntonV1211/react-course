import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';
import classNames from 'classnames';
import styles from './css/userPanel.module.css';

export const UserPanel = () => {
    const { theme } = useTheme();
    const { user, login, logout } = useUser();

    return user ? (
        <span className={styles.userPanel}>
            <span className={styles.userName}>{user.name}</span>
            <button
                className={classNames(styles.button, theme)}
                onClick={logout}
            >
                Log Out
            </button>
        </span>
    ) : (
        <button
            className={classNames(styles.button, theme)}
            onClick={login}
        >
            login
        </button>
    );
};