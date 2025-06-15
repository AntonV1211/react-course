import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectItemAmountById } from '../redux/cart/cartSlise';

export const useCounter = (dishId) => {
    const dispatch = useDispatch();

    const amount = useSelector((state) => selectItemAmountById(state, dishId));

    const increment = useCallback(
        () => dispatch(addToCart(dishId)),
        [dispatch, dishId]
    );

    const decrement = useCallback(
        () => dispatch(removeFromCart(dishId)),
        [dispatch, dishId]
    );

    return {
        value: amount,
        increment,
        decrement
    };
}