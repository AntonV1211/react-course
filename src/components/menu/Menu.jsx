import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ menu }) => (
    <>
        <h3>Menu:</h3>
        <ul>
            {menu.map((item) => (
                <MenuItem key={item.id} {...item} />
            ))}
        </ul>
    </>
);