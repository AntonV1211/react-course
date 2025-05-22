import { useCounter } from '../../hooks/useCounter.js';
import { Counter } from '../counter/Counter.jsx';

export const DishCounter = ({ min = 0, max }) => {
    const { count, increment, decrement } = useCounter({ min: 0, max, initial: min });

    return (
        <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            min={min}
            max={max}
        />
    );
};
