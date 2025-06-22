import { useEffect } from 'react';
import { useSelector, useDispatch, useParams } from 'react-redux';
import { selectDishById, fetchDishById } from '../../redux/entities/dishes/dishesSlice';
import { DishCounter } from '../menu/DishCounter.jsx';
import { useLocation, useNavigate, useParams } from 'react-router';

export const DishPage = () => {
    const { dishId } = useParams();
    const dispatch = useDispatch();
    const dish = useSelector(state => selectDishById(state, dishId));
    const location = useLocation();
    const navigate = useNavigate();
    const restaurantId = location.state?.restaurantId;

    useEffect(() => {
        if (!dish) {
            dispatch(fetchDishById(dishId));
        }
    }, [dispatch, dishId, dish]);

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