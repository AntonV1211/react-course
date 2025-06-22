import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import { fetchDishById } from '../../redux/entities/dishes/dishesThunks.js';
import { DishCounter } from '../menu/DishCounter.jsx';

export const DishPage = () => {
    const { dishId } = useParams();
    const dispatch = useDispatch();
    const dish = useSelector(state => selectDishById(state, dishId));
    const location = useLocation();
    const navigate = useNavigate();
    const restaurantId = location.state?.restaurantId;

    useEffect(() => {
        dispatch(fetchDishById(dishId));
    }, [dispatch, dishId]);

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