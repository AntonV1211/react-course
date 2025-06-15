import { useParams, NavLink, Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
//import styles from './css/restaurantDetails.module.css';
import styles from '../restaurant/css/restaurantTab.module.css';

export const RestaurantDetailsLayout = () => {
    const { restaurantId } = useParams();
    const location = useLocation();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    if (!restaurant) return <div>Ресторан не найден</div>;

    if (location.pathname === `/restaurants/${restaurantId}`) {
        return <Navigate to="menu" replace />;
    }

    return (
        <div className={styles.restaurantDetails}>
            <h2>{restaurant.name}</h2>
            <div className={styles.tabs}>
                <NavLink
                    to="menu"
                    end
                    className={({ isActive }) =>
                        [styles.tab, isActive ? styles.activeTab : ''].join(' ')
                    }
                >
                    Menu
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                        [styles.tab, isActive ? styles.activeTab : ''].join(' ')
                    }
                >
                    Reviews
                </NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};