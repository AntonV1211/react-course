import { ReviewFormBase } from './ReviewFormBase';
import { useAddReviewMutation, useUpdateReviewMutation } from '../../redux/api/reviewsApi';
import { useUser } from '../../hooks/useUser';
import { useEffect } from 'react';

export const ReviewForm = ({
    restaurantId,
    editingReview,
    onCancelEdit,
    onFinishEdit,
}) => {
    const { user } = useUser();
    const [addReview, { isLoading: isAdding }] = useAddReviewMutation();
    const [updateReview, { isLoading: isUpdating }] = useUpdateReviewMutation();

    const isEditing = Boolean(editingReview);

    const handleSubmit = async ({ text, rating }) => {
        if (!user) return;
        if (isEditing) {
            await updateReview({
                reviewId: editingReview.id,
                restaurantId,
                text,
                rating,
            });
            onFinishEdit?.();
        } else {
            await addReview({
                restaurantId,
                userId: user.id,
                text,
                rating,
            });
        }
    };

    // Сброс формы при смене режима
    useEffect(() => {
        if (!isEditing) onCancelEdit?.();
    }, [editingReview]);

    return (
        <>
            <h3>{isEditing ? 'Edit review' : 'Feedback form'}</h3>
            <ReviewFormBase
                initialValues={{
                    text: editingReview?.text || '',
                    rating: editingReview?.rating || 1,
                }}
                onSubmit={handleSubmit}
                onClear={onCancelEdit}
                user={user}
                isLoading={isAdding || isUpdating}
                submitLabel={isEditing ? 'Save' : 'Send'}
            />
        </>
    );
};