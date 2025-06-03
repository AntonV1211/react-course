import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RestaurantDetails } from './RestaurantDetails.jsx';
import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import { selectAllRestaurants } from '../../redux/entities/restaurants/restaurantsSlice';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabs = () => {
    const restaurants = useSelector(selectAllRestaurants);
    const [activeId, setActiveId] = useState(restaurants[0]?.id);
    const activeRestaurant = restaurants.find(r => r.id === activeId);
    const { theme } = useTheme();

    if (!restaurants.length) return null;

    return (
        <div>
            <div className={styles.restaurantTabs}>
                {restaurants.map((restaurant) => (
                    <RestaurantTabButton
                        key={restaurant.id}
                        active={activeId === restaurant.id}
                        theme={theme}
                        onClick={() => setActiveId(restaurant.id)}
                    >
                        {restaurant.name}
                    </RestaurantTabButton>
                ))}
            </div>
            {activeRestaurant && (
                <RestaurantDetails key={activeRestaurant.id} restaurant={activeRestaurant} />
            )}
        </div>
    );
};