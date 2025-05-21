import { useCounter } from '../../hooks/useCounter.js';
import { ItemCounter } from './ItemCounter .jsx';

export const MenuItem = ({ name, price }) => {
    const { count, increment, decrement } = useCounter({ min: 0, max: 5, initial: 0 });

    return (
        <li>
            <div className='menu-item'>
                <div className='menu-item_name'>
                    <strong>{name}</strong> - ${price.toFixed(2)}
                </div>
                <ItemCounter
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    min={0}
                    max={5}
                />
            </div>
        </li>
    );
};