import { Review } from './Review.jsx';
import { ReviewForm } from '../reviewForm/ReviewForm.jsx';
import { useState } from 'react';

export const Reviews = ({ restaurantId, reviews, user }) => {
    const [editingReview, setEditingReview] = useState(null);

    if (!reviews?.length) return (
        <>
            <div>No reviews</div>
            {user && (
                <ReviewForm
                    restaurantId={restaurantId}
                    editingReview={editingReview}
                    onCancelEdit={() => setEditingReview(null)}
                    onFinishEdit={() => setEditingReview(null)}
                />
            )}
        </>
    );

    return (
        <>
            <ul>
                {reviews.map(review => (
                    <Review
                        key={review.id}
                        review={review}
                        userId={review.userId}
                        onEdit={() => setEditingReview(review)}
                    />
                ))}
            </ul>
            {user && (
                <ReviewForm
                    restaurantId={restaurantId}
                    editingReview={editingReview}
                    onCancelEdit={() => setEditingReview(null)}
                    onFinishEdit={() => setEditingReview(null)}
                />
            )}
        </>
    );
};