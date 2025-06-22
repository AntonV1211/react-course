import { useGetDishByIdQuery } from '../../redux/api/dishesApi';
import style from './css/menuItem.module.css';
import { DishCounter } from './DishCounter.jsx';
import { useUser } from '../../hooks/useUser';
import { Link } from 'react-router';

export const MenuItem = ({ dishId, restaurantId }) => {
    const { data: dish, isLoading } = useGetDishByIdQuery(dishId);
    const { user } = useUser();

    if (isLoading) return <li>Loading...</li>;
    if (!dish) return null;

    return (
        <li>
            <div className={style.menuItem}>
                <div>
                    <Link
                        to={`/dish/${dishId}`}
                        state={{ restaurantId }}
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