import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import style from './css/menuItem.module.css';
import { DishCounter } from './DishCounter.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';
import { Link } from 'react-router-dom';

export const MenuItem = ({ dishId, restaurantId }) => {
    const dish = useSelector(state => selectDishById(state, dishId));
    const { user } = useUser();

    if (!dish) return null;

    return (
        <li>
            <div className={style.menuItem}>
                <div>
                    <Link
                        to={`/dish/${dishId}`}
                        state={{ restaurantId: restaurantId }}
                    >
                        <strong>{dish.name}</strong>
                    </Link>
                    {' '} - ${dish.price.toFixed(2)}
                </div>
                {user && <DishCounter dishId={dishId} />}
            </div>
        </li>
    );
};