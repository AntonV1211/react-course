import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice.js';
import { fetchDishesByRestaurantId } from '../../redux/entities/dishes/dishesThunks.js';
import { REQUEST_STATUS } from '../../redux/request_status/requestStatus.js';
import { Menu } from './Menu.jsx';
import { useParams } from 'react-router';


export const MenuTab = () => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const status = useSelector(state => state.dishes.status);
    const error = useSelector(state => state.dishes.error);

    useEffect(() => {
        if (restaurant) {
            dispatch(fetchDishesByRestaurantId(restaurant.id));
        }
    }, [dispatch, restaurant]);

    if (!restaurant) return null;
    if (status === REQUEST_STATUS.LOADING) return <div>Load dishes...</div>;
    if (status === REQUEST_STATUS.FAILED) return <div>Error: {error}</div>;

    return <Menu dishIds={restaurant.menu} restaurantId={restaurant.id} />;
};