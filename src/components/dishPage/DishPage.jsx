import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import { DishCounter } from '../menu/DishCounter.jsx';
import { useLocation, useNavigate, useParams } from 'react-router';

export const DishPage = () => {
    const { dishId } = useParams();
    const dish = useSelector(state => selectDishById(state, dishId));
    const location = useLocation();
    const navigate = useNavigate();
    const restaurantId = location.state?.restaurantId;
    if (!dish) return <div>Блюдо не найдено</div>;
    console.log('location.state:', location.state);
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