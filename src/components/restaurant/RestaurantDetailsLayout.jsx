import React from 'react';
import { useParams, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import styles from '../restaurant/css/restaurantTab.module.css';
import classNames from 'classnames';

export const RestaurantDetailsLayout = () => {
    const { restaurantId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (location.pathname === `/restaurants/${restaurantId}`) {
            navigate('menu', { replace: true });
        }
    }, [location.pathname, restaurantId, navigate]);

    return (
        <div className={styles.restaurantDetails}>
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