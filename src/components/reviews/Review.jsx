import { useGetUsersQuery } from '../../redux/api/usersApi';
import { useUser } from '../../hooks/useUser';

export const Review = ({ review, userId, onEdit }) => {
    const { data: users } = useGetUsersQuery();
    const user = users?.find(u => u.id === userId);
    const { user: currentUser } = useUser();

    const isOwnReview = currentUser && currentUser.id === userId;

    if (!review) return null;

    return (
        <li>
            <div>
                <strong>{user ? user.name : 'Unknown user'}</strong>
                <span> — {review.text} (Rating: {review.rating})</span>
                {isOwnReview && (
                    <button onClick={() => onEdit(review)}>Edit</button>
                )}
            </div>
        </li>
    );
};