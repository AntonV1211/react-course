import { Menu } from '../menu/Menu.jsx';
import { Reviews } from '../reviews/Reviews.jsx';
import style from './css/restaurantDetails.module.css';

export const RestaurantDetails = ({ restaurant }) => (
    <div className={style.restaurantDetails}>
        <div className={style.header}>
            <h2>{restaurant.name}</h2>
        </div>
        <div className={style.content}>
            <div>
                <Menu dishIds={restaurant.menu} />
            </div>
            <div>
                {restaurant.reviews.length ? (
                    <Reviews reviewIds={restaurant.reviews} />
                ) : null}
            </div>
        </div>
    </div>
);