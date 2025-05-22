import { useState } from 'react';
import { RestaurantDetails } from './RestaurantDetails.jsx';

export const RestaurantTabs = ({ restaurants }) => {
    const [activeId, setActiveId] = useState(restaurants[0]?.id);
    const activeRestaurant = restaurants.find(restauran => restauran.id === activeId);

    return (
        <div>
            <div className='restaurant-tabs'>
                {restaurants.map((restaurant) => (
                    <button
                        className={`restaurant-tab${activeId === restaurant.id ? ' active' : ''}`}
                        key={restaurant.id}
                        onClick={() => setActiveId(restaurant.id)}
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>
            {activeRestaurant && <RestaurantDetails restaurant={activeRestaurant} />}
        </div>
    );
};