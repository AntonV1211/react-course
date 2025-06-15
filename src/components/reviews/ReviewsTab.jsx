import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice.js';
import { fetchReviews } from '../../redux/entities/reviews/reviewsSlice.js';
import { fetchUsers } from '../../redux/entities/users/usersSlice.js';
import { Reviews } from './Reviews.jsx';
import { REQUEST_STATUS } from '../../redux/request_status/requestStatus.js';

export const ReviewsTab = () => {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const usersLoaded = useSelector(state => state.users.ids.length > 0);

    const reviewsStatus = useSelector(state => state.reviews.status);
    const reviewsError = useSelector(state => state.reviews.error);
    const usersStatus = useSelector(state => state.users.status);
    const usersError = useSelector(state => state.users.error);

    useEffect(() => {
        if (restaurant) {
            dispatch(fetchReviews(restaurantId));
        }
    }, [dispatch, restaurantId, restaurant]);

    useEffect(() => {
        if (!usersLoaded) {
            dispatch(fetchUsers());
        }
    }, [dispatch, usersLoaded]);

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