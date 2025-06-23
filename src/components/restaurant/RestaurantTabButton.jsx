import classNames from 'classnames';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabButton = ({ restaurant, active, theme, onClick }) => {
    if (!restaurant) return null;
    return (
        <button
            className={classNames(
                styles.restaurantTab,
                { [styles.active]: active },
                'button',
                theme
            )}
            onClick={onClick}
        >
            {restaurant.name}
        </button>
    );
};