import { useState } from 'react';

export function useCounter({ min = 0, max = 5, initial = 0 } = {}) {
    const [count, setCount] = useState(initial);

    const increment = () => setCount((c) => (c < max ? c + 1 : c));
    const decrement = () => setCount((c) => (c > min ? c - 1 : c));

    return { count, increment, decrement };
}