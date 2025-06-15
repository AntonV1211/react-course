import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RestaurantDetails } from './RestaurantDetails.jsx';
import { useTheme } from '../context/themeContext/ThemeContext.jsx';
import { RestaurantTabButton } from './RestaurantTabButton.jsx';
import { selectAllRestaurantIds, fetchRestaurants } from '../../redux/entities/restaurants/restaurantsSlice';
import { REQUEST_STATUS } from '../../redux/request_status/requestStatus.js';
import styles from './css/restaurantTab.module.css';
import { Outlet } from 'react-router';
import { useNavigate, useParams } from 'react-router-dom';

export const RestaurantTabs = () => {
    const dispatch = useDispatch();
    const restaurantIds = useSelector(selectAllRestaurantIds);
    useEffect(() => {
        if (!restaurantIds.length) {
            dispatch(fetchRestaurants());
        }
    }, [dispatch, restaurantIds.length]);
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