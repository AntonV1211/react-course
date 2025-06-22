import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice.js';
import { Menu } from './Menu.jsx';
import { useParams } from 'react-router';


export const MenuTab = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    if (!restaurant) return null;
    return <Menu dishIds={restaurant.menu} restaurantId={restaurant.id} />;
};