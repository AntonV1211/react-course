export const Counter = ({ count, increment, decrement, min = 0, max = 5 }) => (
    <div className='menu-item_counter'>
        <button onClick={decrement} disabled={count === min} style={{ marginLeft: 8 }}>-</button>
        <span style={{ margin: '0 8px' }}>{count}</span>
        <button onClick={increment} disabled={count === max}>+</button>
    </div>
);