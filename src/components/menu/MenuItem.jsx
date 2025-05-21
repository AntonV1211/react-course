import { useCounter } from '../../hooks/useCounter.js';

export const MenuItem = ({ name, price }) => {
    const { count, increment, decrement } = useCounter({ min: 0, max: 5, initial: 0 });

    return (
        <li>
            <div className='menu-item'>
                <div className='menu-item_name'>
                    <strong>{name}</strong> - ${price.toFixed(2)}
                </div>
                <div className='menu-item_counter'>
                    <button onClick={decrement} disabled={count === 0} style={{ marginLeft: 8 }}>-</button>
                    <span style={{ margin: '0 8px' }}>{count}</span>
                    <button onClick={increment} disabled={count === 5}>+</button>
                </div>
            </div>
        </li>
    );
};