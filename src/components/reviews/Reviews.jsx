import { Review } from './Review.jsx';
import { ReviewForm } from '../reviewForm/ReviewForm.jsx';
import { useUser } from '../context/userContext/UserContext.jsx';

export const Reviews = ({ reviews }) => {
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