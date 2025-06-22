import { useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import { fetchRestaurantById } from '../../redux/entities/restaurants/restaurantsThunks';
import styles from '../restaurant/css/restaurantTab.module.css';
import classNames from 'classnames';

export const RestaurantDetailsLayout = () => {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    useEffect(() => {
        dispatch(fetchRestaurantById(restaurantId));
    }, [dispatch, restaurantId]);

    useEffect(() => {
        if (restaurant && location.pathname === `/restaurants/${restaurantId}`) {
            navigate('menu', { replace: true });
        }
    }, [restaurant, location.pathname, restaurantId, navigate]);

    if (!restaurant) return <div>Load...</div>;

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
                    Menu
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