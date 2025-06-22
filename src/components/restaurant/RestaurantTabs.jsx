import { useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import { selectAllRestaurantIds } from '../../redux/entities/restaurants/restaurantsSlice';
import styles from './css/restaurantTab.module.css';
import { useParams, NavLink } from 'react-router';
import classNames from 'classnames';

export const RestaurantTabs = () => {
    const restaurantIds = useSelector(selectAllRestaurantIds);
    const { restaurantId } = useParams();
    const { theme } = useTheme();

    if (!restaurantIds.length) return null;

    return (
        <div className={styles.restaurantTabs}>
            {restaurantIds.map((id) => (
                <NavLink
                    key={id}
                    to={`/restaurants/${id}`}
                    className={({ isActive }) =>
                        classNames(styles.restaurantTab, { [styles.active]: isActive }, styles[theme])
                    }
                >
                    <RestaurantTabButton
                        restaurantId={id}
                        active={restaurantId === id}
                        theme={theme}
                    />
                </NavLink>
            ))}
        </div>
    );
};