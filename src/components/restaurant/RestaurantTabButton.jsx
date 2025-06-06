import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import classNames from 'classnames';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabButton = ({ restaurantId, active, theme, onClick }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
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