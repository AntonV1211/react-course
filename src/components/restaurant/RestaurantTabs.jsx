import { useSelector } from 'react-redux';
import { RestaurantDetails } from './RestaurantDetails.jsx';
import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import { selectAllRestaurantIds } from '../../redux/entities/restaurants/restaurantsSlice';
import styles from './css/restaurantTab.module.css';
import { Outlet } from 'react-router';
import { useNavigate, useParams } from 'react-router-dom';

export const RestaurantTabs = () => {
    const restaurantIds = useSelector(selectAllRestaurantIds);
    const { restaurantId } = useParams();
    const navigate = useNavigate();
    const { theme } = useTheme();

    if (!restaurantIds.length) return null;

    return (
        <div>
            <div className={styles.restaurantTabs}>
                {restaurantIds.map((id) => (
                    <RestaurantTabButton
                        key={id}
                        restaurantId={id}
                        active={restaurantId === id}
                        theme={theme}
                        onClick={() => navigate(`/restaurants/${id}`)}
                    />
                ))}
            </div>
            <Outlet />
        </div>
    );
};