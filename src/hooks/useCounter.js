import { useState } from 'react';

export function useCounter({ min = 0, max = 5, initial = 0 } = {}) {
    const [count, setCount] = useState(initial);

    const increment = () => setCount(
        (currentCount) => (currentCount < max ? currentCount + 1 : currentCount)
    );
    const decrement = () => setCount(
        (currentCount) => (currentCount > min ? currentCount - 1 : currentCount)
    );

    return { count, increment, decrement };
}