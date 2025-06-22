import { Review } from './Review.jsx';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/api/reviewsApi';
import { ReviewForm } from '../reviewForm/ReviewForm.jsx';
import { useUser } from '../../hooks/useUser';

export const Reviews = ({ restaurantId }) => {
    const { data: reviews, isLoading } = useGetReviewsByRestaurantIdQuery(restaurantId);
    const { user } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (!reviews?.length) return (
        <>
            <div>No reviews</div>
            {user && <ReviewForm restaurantId={restaurantId} />}
        </>
    );

    return (
        <>
            <ul>
                {reviews.map(review => (
                    <Review key={review.id} review={review} userId={review.userId} />
                ))}
            </ul>
            {user && <ReviewForm restaurantId={restaurantId} />}
        </>
    );
};