import { useGetRestaurantByIdQuery } from '../../redux/api/restaurantsApi';
import { Menu } from '../menu/Menu.jsx';
import { Reviews } from '../reviews/Reviews.jsx';
import style from './css/restaurantDetails.module.css';

export const RestaurantDetails = ({ restaurantId }) => {
    const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(restaurantId);
    if (isLoading) return <div>Loading...</div>;
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