import { useGetDishesByRestaurantIdQuery } from '../../redux/api/dishesApi';
import { useParams } from 'react-router';
import { Menu } from './Menu.jsx';

export const MenuTab = () => {
    const { restaurantId } = useParams();
    const { data: dishes, isLoading, error } = useGetDishesByRestaurantIdQuery(restaurantId);

    if (isLoading) return <div>Load dishes...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!dishes) return null;

    return <Menu dishes={dishes} restaurantId={restaurantId} />;
};