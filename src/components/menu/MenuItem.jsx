import { DishCounter } from './DishCounter.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';
import style from './css/menuItem.module.css';

export const MenuItem = ({ name, price }) => {
    const { user } = useUser();
    return (
        <li>
            <div className={style.menuItem}>
                <div>
                    <strong>{name}</strong> - ${price.toFixed(2)}
                </div>
                {user && <DishCounter min={0} max={10} />}
            </div>
        </li>
    );
};