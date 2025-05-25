import { Menu } from '../menu/Menu.jsx';
import { Reviews } from '../reviews/Reviews.jsx';

export const RestaurantDetails = ({ restaurant }) => (
    <div key={restaurant.id} className="restaurant-details">
        <div className="restaurant-details_header">
            <h2>{restaurant.name}</h2>
        </div>
        <div className="restaurant-details_content">
            <div>
                <Menu menu={restaurant.menu} />
            </div>
            <div>
                {
                    restaurant.reviews.length ?
                        <Reviews idRestaurant={restaurant.id} reviews={restaurant.reviews} />
                        : ""
                }
            </div>
        </div>
    </div>
);