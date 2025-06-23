import { useParams } from 'react-router';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/api/reviewsApi';
import { useGetUsersQuery } from '../../redux/api/usersApi';
import { Reviews } from './Reviews.jsx';
import { useUser } from '../../hooks/useUser';

export const ReviewsTab = () => {
    const { restaurantId } = useParams();
    const { data: reviews, isLoading: reviewsLoading, error: reviewsError } = useGetReviewsByRestaurantIdQuery(restaurantId);
    const { isLoading: usersLoading, error: usersError } = useGetUsersQuery();
    const { user } = useUser();

    if (reviewsLoading || usersLoading) {
        return <div>Load reviews...</div>;
    }
    if (reviewsError) {
        return <div>Error uploading reviews: {reviewsError.message}</div>;
    }
    if (usersError) {
        return <div>User upload error: {usersError.message}</div>;
    }

    return (
        <Reviews
            restaurantId={restaurantId}
            reviews={reviews ?? []}
            user={user}
        />
    );
};