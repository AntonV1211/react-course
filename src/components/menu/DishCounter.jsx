import { useCounter } from '../../hooks/useCounter.js';
import { Counter } from '../counter/Counter.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';

export const DishCounter = ({ min = 0, max }) => {
    const { user } = useUser();
    const { count, increment, decrement } = useCounter({ min: 0, max, initial: min });

    if (!user) return null;

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