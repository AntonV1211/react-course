import { useSelector } from 'react-redux';
import { selectReviewsByIds } from '../../redux/entities/reviews/reviewsSlice';
import { Review } from './Review.jsx';
import { ReviewForm } from '../reviewForm/ReviewForm.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';

export const Reviews = ({ reviewIds }) => {
    const reviews = useSelector(state => selectReviewsByIds(state, reviewIds));
    const { user } = useUser();

    return (
        <>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map((review) => (
                    <Review key={review.id} {...review} />
                ))}
            </ul>
            {user && <ReviewForm />}
        </>
    );
};