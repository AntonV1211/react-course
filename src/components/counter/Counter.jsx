import { useTheme } from '../../hooks/useTheme';
import classNames from 'classnames';
import styles from './css/counter.module.css';

export const Counter = ({ count, increment, decrement, min = 0, max = 100 }) => {
    const { theme } = useTheme();

    return (
        <div className={styles.counter}>
            <button
                type="button"
                className={classNames(styles.button, { [styles.alt]: theme === 'alt' })}
                onClick={decrement}
                disabled={count === min}
            >-</button>
            <span className={styles.counterValue}>{count}</span>
            <button
                type="button"
                className={classNames(styles.button, { [styles.alt]: theme === 'alt' })}
                onClick={increment}
                disabled={typeof max === 'number' ? count === max : false}
            >+</button>
        </div>
    );
};