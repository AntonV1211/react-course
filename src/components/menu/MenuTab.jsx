import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice.js';
import { REQUEST_STATUS } from '../../redux/request_status/requestStatus.js';
import { fetchDishes, selectAllDishIds } from '../../redux/entities/dishes/dishesSlice.js';
import { Menu } from './Menu.jsx';

export const MenuTab = () => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const dishIds = useSelector(selectAllDishIds);
    const dishesLoaded = dishIds.length > 0;
    const status = useSelector(state => state.dishes.status);
    const error = useSelector(state => state.dishes.error);

    useEffect(() => {
        if (restaurant && !dishesLoaded) {
            dispatch(fetchDishes());
        }
    }, [dispatch, dishesLoaded, restaurant]);

    if (!restaurant) return null;
    if (status === REQUEST_STATUS.LOADING) return <div>Load dishes...</div>;
    if (status === REQUEST_STATUS.FAILED) return <div>Error: {error}</div>;

    return <Menu dishIds={restaurant.menu} restaurantId={restaurant.id} />;
};