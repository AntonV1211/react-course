import { useGetUsersQuery } from '../../redux/api/usersApi';
import { useState } from 'react';
import { useUpdateReviewMutation } from '../../redux/api/reviewsApi';

export const Review = ({ review, userId }) => {
    const { data: users } = useGetUsersQuery();
    const user = users?.find(u => u.id === userId);

    // Проверяем, что отзыв принадлежит текущему пользователю
    const isOwnReview = userId === "a304959a-76c0-4b34-954a-b38dbf310360";

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(review.text);
    const [rating, setRating] = useState(review.rating);
    const [updateReview, { isLoading }] = useUpdateReviewMutation();

    const handleSave = async () => {
        await updateReview({
            reviewId: review.id,
            restaurantId: review.restaurantId,
            text,
            rating,
        });
        setIsEditing(false);
    };

    if (!review) return null;

    return (
        <li>
            <div>
                <strong>{user ? user.name : 'Unknown user'}</strong>
                {isEditing && isOwnReview ? (
                    <>
                        <textarea value={text} onChange={e => setText(e.target.value)} />
                        <input
                            type="number"
                            min={1}
                            max={5}
                            value={rating}
                            onChange={e => setRating(Number(e.target.value))}
                        />
                        <button onClick={handleSave} disabled={isLoading}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <span> — {review.text} (Rating: {review.rating})</span>
                        {isOwnReview && (
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                        )}
                    </>
                )}
            </div>
        </li>
    );
};