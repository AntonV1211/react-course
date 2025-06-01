import classNames from 'classnames';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabButton = ({ active, theme, children, ...props }) => (
    <button
        className={classNames(
            styles.restaurantTab,
            { [styles.active]: active },
            'button',
            theme
        )}
        {...props}
    >
        {children}
    </button>
);