import { useGetDishByIdQuery } from '../../redux/api/dishesApi';

export const CartItem = ({ id, amount }) => {
    const { data: dish, isLoading } = useGetDishByIdQuery(id);

    return (
        <li>
            {isLoading
                ? 'Loading...'
                : dish
                    ? `${dish.name} - ${amount}`
                    : 'Unknown'}
        </li>
    );
};