import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ menu }) => (
    <ul>
        {menu.map((item) => (
            <MenuItem key={item.id} {...item} />
        ))}
    </ul>
);