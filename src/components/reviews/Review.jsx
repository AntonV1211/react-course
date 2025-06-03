import { useSelector } from 'react-redux';

export const Review = ({ userId, text, rating }) => {
    // Получаем пользователя по userId из стора
    const user = useSelector(state => state.users.entities[userId]);

    return (
        <li>
            <div>
                <strong>{user ? user.name : 'Unknown user'}</strong>
                <span> — {text} (Rating: {rating})</span>
            </div>
        </li>
    );
};