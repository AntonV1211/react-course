import { useParams } from 'react-router';
import { Reviews } from './Reviews.jsx';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/api/reviewsApi';
import { useGetUsersQuery } from '../../redux/api/usersApi';
import { useGetRestaurantByIdQuery } from '../../redux/api/restaurantsApi';

export const ReviewsTab = () => {
    const { restaurantId } = useParams();
    const { data: restaurant, isLoading: restaurantLoading } = useGetRestaurantByIdQuery(restaurantId);
    const { data: reviews, isLoading: reviewsLoading, error: reviewsError } = useGetReviewsByRestaurantIdQuery(restaurantId);
    const { isLoading: usersLoading, error: usersError } = useGetUsersQuery();

    if (!restaurant) return null;

    if (restaurantLoading || reviewsLoading || usersLoading) {
        return <div>Load reviews...</div>;
    }
    if (reviewsError) {
        return <div>Error uploading reviews: {reviewsError.message}</div>;
    }
    if (usersError) {
        return <div>User upload error: {usersError.message}</div>;
    }

    return <Reviews reviewIds={reviews?.map(r => r.id) ?? []} restaurantId={restaurantId} />;
};