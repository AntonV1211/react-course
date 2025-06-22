import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSlise';

export const Cart = () => {
    const items = useSelector(selectCartItems);
    const dishes = useSelector(state => state.dishes.entities); // Получаем все блюда

    if (!items.length) {
        return null;
    }

    return (
        <>
            <div className="cart-header">
                <h2>Cart:</h2>
            </div>
            <ul>
                {items.map(({ id, amount }) => {
                    const dish = dishes[id];
                    return (
                        <li key={id}>
                            {dish ? dish.name : 'Unknown'} - {amount}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}