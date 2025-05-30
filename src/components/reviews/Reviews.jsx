import { Review } from './Review.jsx';
import { ReviewForm } from '../reviewForm/ReviewForm.jsx';

export const Reviews = ({ reviews }) => (
    <>
        <h3>Reviews:</h3>
        <ul>
            {reviews.map((review) => (
                <Review key={review.id} {...review} />
            ))}
        </ul>
        <ReviewForm />
    </>
);