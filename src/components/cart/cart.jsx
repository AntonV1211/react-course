import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/entities/cart/cartSlise.js';
import { CartItem } from './CartItem.jsx';

export const Cart = () => {
    const items = useSelector(selectCartItems);

    if (!items.length) {
        return null;
    }

    return (
        <>
            <div className="cart-header">
                <h2>Cart:</h2>
            </div>
            <ul>
                {items.map(({ id, amount }) => (
                    <CartItem key={id} id={id} amount={amount} />
                ))}
            </ul>
        </>
    );
};