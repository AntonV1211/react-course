import { useSelector } from 'react-redux';

export const Review = ({ userId, text, rating }) => {
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