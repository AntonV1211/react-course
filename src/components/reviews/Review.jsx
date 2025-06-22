import { useGetUsersQuery } from '../../redux/api/usersApi';

export const Review = ({ review, userId }) => {
    const { data: users } = useGetUsersQuery();
    const user = users?.find(u => u.id === userId);

    if (!review) return null;

    return (
        <li>
            <div>
                <strong>{user ? user.name : 'Unknown user'}</strong>
                <span> — {review.text} (Rating: {review.rating})</span>
            </div>
        </li>
    );
};