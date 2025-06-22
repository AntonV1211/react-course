import { useCounter } from '../../hooks/useCounter.js';
import { Counter } from '../counter/Counter.jsx';
import { useUser } from '../../hooks/useUser';

export const DishCounter = ({ dishId }) => {
    const { user } = useUser();
    const { count, increment, decrement } = useCounter(dishId);

    if (!user) return null;

    return (
        <Counter
            count={count}
            increment={increment}
            decrement={decrement}
        />
    );
};