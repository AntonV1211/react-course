import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/reviewsSlice';
import { selectUserById } from '../../redux/entities/users/usersSlice';

export const Review = ({ reviewId }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));
    const user = useSelector(state => selectUserById(state, review?.userId));

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