import { useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation, useNavigate, Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurantById, selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import styles from '../restaurant/css/restaurantTab.module.css';
import classNames from 'classnames';

export const RestaurantDetailsLayout = () => {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    useEffect(() => {
        if (!restaurant) {
            dispatch(fetchRestaurantById(restaurantId));
        }
    }, [dispatch, restaurantId, restaurant]);

    if (!restaurant) return <div>Load...</div>;

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
                        classNames(styles.tab, { [styles.activeTab]: isActive })
                    }
                >
                    Menuы
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                        classNames(styles.tab, { [styles.activeTab]: isActive })
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