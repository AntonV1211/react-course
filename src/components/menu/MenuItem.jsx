import { DishCounter } from './DishCounter.jsx';
import style from './css/menuItem.module.css';

export const MenuItem = ({ name, price }) => {
    return (
        <li>
            <div className={style.menuItem}>
                <div>
                    <strong>{name}</strong> - ${price.toFixed(2)}
                </div>
                <DishCounter min={0} max={10} />
            </div>
        </li>
    );
};