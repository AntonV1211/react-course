import { DishCounter } from './DishCounter.jsx';

export const MenuItem = ({ name, price }) => {
    return (
        <li>
            <div className='menu-item'>
                <div className='menu-item_name'>
                    <strong>{name}</strong> - ${price.toFixed(2)}
                </div>
                <DishCounter min={0} max={10} />
            </div>
        </li>
    );
};