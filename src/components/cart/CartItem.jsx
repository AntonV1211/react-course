import { useGetDishByIdQuery } from '../../redux/api/dishesApi';

export const CartItem = ({ id, amount }) => {
    const { data: dish, isLoading } = useGetDishByIdQuery(id);

    if (isLoading) {
        return <li>Loading...</li>;
    }

    if (!dish) {
        return <li>Unknown</li>;
    }

    return (
        <li>
            {dish.name} - {amount}
        </li>
    );
};