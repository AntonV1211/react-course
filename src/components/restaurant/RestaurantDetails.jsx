import { Menu } from '../menu/Menu.jsx';
import { Reviews } from '../reviews/Reviews.jsx';

export const RestaurantDetails = ({ restaurant }) => (
    <div className="restaurant-details">
        <div className="restaurant-details_header">
            <h2>{restaurant.name}</h2>
        </div>
        <div className="restaurant-details_content">
            <div>
                <h3>Menu:</h3>
                <Menu menu={restaurant.menu} />
            </div>
            <div>
                <h3>Reviews:</h3>
                <Reviews reviews={restaurant.reviews} />
            </div>
        </div>
    </div>
);