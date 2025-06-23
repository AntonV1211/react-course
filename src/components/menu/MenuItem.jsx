import style from './css/menuItem.module.css';
import { DishCounter } from './DishCounter.jsx';
import { useUser } from '../../hooks/useUser';
import { Link } from 'react-router';

export const MenuItem = ({ dish, restaurantId }) => {
    const { user } = useUser();

    if (!dish) return null;

    return (
        <li>
            <div className={style.menuItem}>
                <div>
                    <Link
                        to={`/dish/${dish.id}`}
                        state={{ restaurantId }}
                    >
                        <strong>{dish.name}</strong>
                    </Link>
                    {' '} - ${dish.price.toFixed(2)}
                </div>
                {user && <DishCounter dishId={dish.id} />}
            </div>
        </li>
    );
};