import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import { useParams, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import styles from '../restaurant/css/restaurantTab.module.css';
import classNames from 'classnames';

export const RestaurantDetailsLayout = () => {
    const { restaurantId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    useEffect(() => {
        if (restaurant && location.pathname === `/restaurants/${restaurantId}`) {
            navigate('menu', { replace: true });
        }
    }, [restaurant, location.pathname, restaurantId, navigate]);

    if (!restaurant) return <div>Ресторан не найден</div>;

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