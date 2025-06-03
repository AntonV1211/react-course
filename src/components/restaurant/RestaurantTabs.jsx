import { useState } from 'react';
import { RestaurantDetails } from './RestaurantDetails.jsx';
import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabs = ({ restaurants }) => {
    const [activeId, setActiveId] = useState(restaurants[0]?.id);
    const activeRestaurant = restaurants.find(restauran => restauran.id === activeId);
    const { theme } = useTheme();

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
            {activeRestaurant && <RestaurantDetails key={activeRestaurant.id} restaurant={activeRestaurant} />}
        </div>
    );
};