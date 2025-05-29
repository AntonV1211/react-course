import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';

export const Counter = ({ count, increment, decrement, min = 0, max = 100 }) => {
    const { theme } = useTheme();
    const { user } = useUser();
    if (!user) return null;

    return (
        <div className="counter">
            <button
                type="button"
                className={`button ${theme}`}
                onClick={decrement}
                disabled={count === min}
            >-</button>
            <span style={{ margin: '0 8px' }}>{count}</span>
            <button
                type="button"
                className={[`button ${theme}`]}
                onClick={increment}
                disabled={typeof max === 'number' ? count === max : false}
            >+</button>
        </div>
    );
};