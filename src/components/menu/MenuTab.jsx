import { useGetDishesByRestaurantIdQuery } from '../../redux/api/dishesApi';
import { useParams } from 'react-router';
import { useGetRestaurantByIdQuery } from '../../redux/api/restaurantsApi';
import { Menu } from './Menu.jsx';

export const MenuTab = () => {
    const { restaurantId } = useParams();
    const { data: restaurant, isLoading: restaurantLoading } = useGetRestaurantByIdQuery(restaurantId);
    const { data: dishes, isLoading: dishesLoading, error } = useGetDishesByRestaurantIdQuery(restaurantId);

    if (!restaurant) return null;
    if (restaurantLoading || dishesLoading) return <div>Load dishes...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!dishes) return null;

    return <Menu dishIds={dishes.map(d => d.id)} restaurantId={restaurant.id} />;
};