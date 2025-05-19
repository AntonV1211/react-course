import PropTypes from 'prop-types';
import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ menu }) => (
    <ul>
        {menu.map((item) => (
            <MenuItem key={item.id} {...item} />
        ))}
    </ul>
);

Menu.propTypes = {
    menu: PropTypes.array.isRequired,
};