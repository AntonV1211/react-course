import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import style from './css/menuItem.module.css';
import { DishCounter } from './DishCounter.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';

export const MenuItem = ({ dishId }) => {
    const dish = useSelector(state => selectDishById(state, dishId));
    const { user } = useUser();

    if (!dish) return null;

    return (
        <li>
            <div className={style.menuItem}>
                <div>
                    <strong>{dish.name}</strong> - ${dish.price.toFixed(2)}
                </div>
                {user && <DishCounter min={0} max={10} />}
            </div>
        </li>
    );
};