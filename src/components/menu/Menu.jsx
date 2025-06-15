import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ dishIds, restaurantId }) => (
    <>
        <h2>Menu</h2>
        <ul>
            {dishIds.map(id => (
                <MenuItem key={id} dishId={id} restaurantId={restaurantId} />
            ))}
        </ul>
    </>
);