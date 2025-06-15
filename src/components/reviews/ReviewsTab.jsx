import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice.js';
import { Reviews } from './Reviews.jsx';

export const ReviewsTab = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    if (!restaurant) return null;
    return <Reviews reviewIds={restaurant.reviews} />;
};