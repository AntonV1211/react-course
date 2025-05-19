import PropTypes from 'prop-types';
import { useState } from 'react';
import { RestaurantDetails } from './RestaurantDetails.jsx';

export const RestaurantTabs = ({ restaurants }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeRestaurant = restaurants[activeIndex];

    return (
        <div>
            <div className='restaurant-tabs'>
                {restaurants.map((restaurant, idx) => (
                    <button
                        className={`restaurant-tab${activeIndex === idx ? ' active' : ''}`}
                        key={restaurant.id}
                        onClick={() => setActiveIndex(idx)}
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>
            <RestaurantDetails restaurant={activeRestaurant} />
        </div>
    );
};

RestaurantTabs.propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        menu: PropTypes.array.isRequired,
        reviews: PropTypes.array.isRequired,
    })).isRequired,
};