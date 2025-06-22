import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice.js';
import { fetchReviews } from '../../redux/entities/reviews/reviewsThunks.js';
import { fetchUsers } from '../../redux/entities/users/usersThunks.js';
import { Reviews } from './Reviews.jsx';
import { REQUEST_STATUS } from '../../redux/request_status/requestStatus.js';

export const ReviewsTab = () => {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const reviewsStatus = useSelector(state => state.reviews.status);
    const reviewsError = useSelector(state => state.reviews.error);
    const usersStatus = useSelector(state => state.users.status);
    const usersError = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(fetchReviews(restaurantId));
    }, [dispatch, restaurantId]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (!restaurant) return null;

    if (reviewsStatus === REQUEST_STATUS.LOADING || usersStatus === REQUEST_STATUS.LOADING) {
        return <div>Load reviews...</div>;
    }
    if (reviewsStatus === REQUEST_STATUS.FAILED) {
        return <div>Error uploading reviews: {reviewsError}</div>;
    }
    if (usersStatus === REQUEST_STATUS.FAILED) {
        return <div>User upload error: {usersError}</div>;
    }

    return <Reviews reviewIds={restaurant.reviews} />;
};