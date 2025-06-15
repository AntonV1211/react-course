import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import { Menu } from '../menu/Menu.jsx';
import { Reviews } from '../reviews/Reviews.jsx';
import style from './css/restaurantDetails.module.css';

export const RestaurantDetails = ({ restaurantId }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    if (!restaurant) return null;

    return (
        <div className={style.restaurantDetails}>
            <div className={style.header}>
                <h2>{restaurant.name}</h2>
            </div>
            <div className={style.content}>
                <div>
                    <Menu dishIds={restaurant.menu} restaurantId={restaurant.id} />
                </div>
                <div>
                    {restaurant.reviews.length ? (
                        <Reviews reviewIds={restaurant.reviews} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};