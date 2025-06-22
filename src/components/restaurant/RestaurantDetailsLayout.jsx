import React from 'react';
import { useParams, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { useGetRestaurantByIdQuery } from '../../redux/api/restaurantsApi';
import styles from '../restaurant/css/restaurantTab.module.css';
import classNames from 'classnames';

export const RestaurantDetailsLayout = () => {
    const { restaurantId } = useParams();
    const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(restaurantId);
    const location = useLocation();
    const navigate = useNavigate();

    // Автоматический переход на menu
    React.useEffect(() => {
        if (restaurant && location.pathname === `/restaurants/${restaurantId}`) {
            navigate('menu', { replace: true });
        }
    }, [restaurant, location.pathname, restaurantId, navigate]);

    if (isLoading) return <div>Load...</div>;
    if (!restaurant) return <div>Not found</div>;

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