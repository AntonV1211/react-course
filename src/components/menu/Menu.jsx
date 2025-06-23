import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ dishes, restaurantId }) => (
    <>
        <h2>Menu</h2>
        <ul>
            {dishes.map(dish => (
                <MenuItem key={dish.id} dish={dish} restaurantId={restaurantId} />
            ))}
        </ul>
    </>
);