import { useParams, useLocation, useNavigate } from 'react-router';
import { useGetDishByIdQuery } from '../../redux/api/dishesApi';
import { DishCounter } from '../menu/DishCounter.jsx';

export const DishPage = () => {
    const { dishId } = useParams();
    const { data: dish, isLoading, error } = useGetDishByIdQuery(dishId);
    const location = useLocation();
    const navigate = useNavigate();
    const restaurantId = location.state?.restaurantId;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading dish</div>;
    if (!dish) return <div>Dish not found</div>;

    return (
        <div>
            <h2>{dish.name}</h2>
            <p>Цена: ${dish.price.toFixed(2)}</p>
            <p>{dish.ingredients?.join(', ')}</p>
            <DishCounter dishId={dishId} />
            {restaurantId && (
                <button onClick={() => navigate(`/restaurants/${restaurantId}`)}>
                    Back
                </button>
            )}
        </div>
    );
};