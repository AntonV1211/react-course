import { useState } from 'react';
import { RestaurantDetails } from './RestaurantDetails.jsx';
import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabs = ({ restaurants }) => {
    const [activeId, setActiveId] = useState(restaurants[0]?.id);
    const activeRestaurant = restaurants.find(restauran => restauran.id === activeId);
    const { theme } = useTheme();

    return (
        <div>
            <div className={styles.restaurantTabs}>
                {restaurants.map((restaurant) => (
                    <button
                        key={restaurant.id}
                        className={[
                            styles.restaurantTab,
                            activeId === restaurant.id ? styles.active : '',
                            `button ${theme}`
                        ].join(' ')}
                        onClick={() => setActiveId(restaurant.id)}
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>
            {activeRestaurant && <RestaurantDetails key={activeRestaurant.id} restaurant={activeRestaurant} />}
        </div>
    );
};