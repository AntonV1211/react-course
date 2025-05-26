export const Counter = ({ count, increment, decrement, min = 0, max = 100 }) => (
    <div className='counter'>
        <button type="button" onClick={decrement} disabled={count === min}>-</button>
        <span style={{ margin: '0 8px' }}>{count}</span>
        <button type="button" onClick={increment} disabled={typeof max === 'number' ? count === max : false}>+</button>
    </div>
);
