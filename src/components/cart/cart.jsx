import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSlise';

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
                    <li key={id}>
                        {id} - {amount}
                    </li>
                ))}
            </ul>
        </>
    );
}