import { useGetRestaurantsQuery } from '../../redux/api/restaurantsApi';
import { useTheme } from '../../hooks/useTheme';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import styles from './css/restaurantTab.module.css';
import { useParams, NavLink } from 'react-router';
import classNames from 'classnames';

export const RestaurantTabs = () => {
    const { data: restaurants, isLoading, error } = useGetRestaurantsQuery();
    const { restaurantId } = useParams();
    const { theme } = useTheme();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading restaurants</div>;
    if (!restaurants?.length) return null;

    return (
        <div className={styles.restaurantTabs}>
            {restaurants.map((restaurant) => (
                <NavLink
                    key={restaurant.id}
                    to={`/restaurants/${restaurant.id}`}
                    className={({ isActive }) =>
                        classNames(styles.restaurantTab, { [styles.active]: isActive }, styles[theme])
                    }
                >
                    <RestaurantTabButton
                        restaurant={restaurant}
                        active={restaurantId === restaurant.id}
                        theme={theme}
                    />
                </NavLink>
            ))}
        </div>
    );
};