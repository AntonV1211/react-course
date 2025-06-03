import { useSelector } from 'react-redux';
import { selectDishesByIds } from '../../redux/entities/dishes/dishesSlice';
import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ dishIds }) => {
    const dishes = useSelector(state => selectDishesByIds(state, dishIds));

    return (
        <ul>
            {dishes.map(dish => (
                <MenuItem key={dish.id} {...dish} />
            ))}
        </ul>
    );
};