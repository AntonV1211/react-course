import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ dishIds }) => (
    <ul>
        {dishIds.map(id => (
            <MenuItem key={id} dishId={id} />
        ))}
    </ul>
);