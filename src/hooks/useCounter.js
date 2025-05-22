import { useState } from 'react';

export function useCounter({ min = 0, max, initial = 0 } = {}) {
    const [count, setCount] = useState(initial);

    const increment = () => setCount(
        (currentCount) =>
            typeof max === 'number'
                ? (currentCount < max ? currentCount + 1 : currentCount)
                : currentCount + 1
    );
    const decrement = () => setCount(
        (currentCount) => (currentCount > min ? currentCount - 1 : currentCount)
    );

    return { count, increment, decrement };
}