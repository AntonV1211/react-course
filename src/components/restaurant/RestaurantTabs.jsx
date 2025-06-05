import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RestaurantDetails } from './RestaurantDetails.jsx';
import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import { selectAllRestaurantIds } from '../../redux/entities/restaurants/restaurantsSlice';
import styles from './css/restaurantTab.module.css';

export const RestaurantTabs = () => {
    const restaurantIds = useSelector(selectAllRestaurantIds);
    const [activeId, setActiveId] = useState(restaurantIds[0]);
    const { theme } = useTheme();

    if (!restaurantIds.length) return null;

    return (
        <div>
            <div className={styles.restaurantTabs}>
                {restaurantIds.map((id) => (
                    <RestaurantTabButton
                        key={id}
                        restaurantId={id}
                        active={activeId === id}
                        theme={theme}
                        onClick={() => setActiveId(id)}
                    />
                ))}
            </div>
            {activeId && (
                <RestaurantDetails key={activeId} restaurantId={activeId} />
            )}
        </div>
    );
};