import { Counter } from '../counter/Counter';
import { useReviewForm } from './useReviewForm';
import { useTheme } from '../../hooks/useTheme';
import classNames from 'classnames';
import styles from './css/reviewForm.module.css';
import { useAddReviewMutation } from '../../redux/api/reviewsApi';
import { useUser } from '../../hooks/useUser';

export const ReviewForm = ({ restaurantId }) => {
    const { state, handleChange, handleRatingChange, handleClear } = useReviewForm();
    const { theme } = useTheme();
    const { user } = useUser();
    const [addReview, { isLoading }] = useAddReviewMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;
        await addReview({
            restaurantId,
            userId: "a304959a-76c0-4b34-954a-b38dbf310360",//"a304959a-76c0-4b34-954a-b38dbf310360",//user.id,
            text: state.text,
            rating: state.rating,
        });
        handleClear();
    };

    return (
        <>
            <h3>Feedback form</h3>
            <form onSubmit={handleSubmit} className={styles.reviewForm}>
                <div className={styles.field}>
                    <input
                        type="text"
                        name="user"
                        className={styles.input}
                        placeholder="User name"
                        value={user.name}
                        disabled
                        required
                    />
                </div>
                <div className={styles.field}>
                    <textarea
                        name="text"
                        className={styles.textarea}
                        placeholder="Description"
                        value={state.text}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={[styles.field, styles.rating].join(' ')}>
                    <div style={{ fontSize: 14 }}>Rating:</div>
                    <Counter
                        count={state.rating}
                        increment={() => handleRatingChange(Math.min(state.rating + 1, 5))}
                        decrement={() => handleRatingChange(Math.max(state.rating - 1, 1))}
                        min={1}
                        max={5}
                    />
                </div>
                <div className={styles.actions}>
                    <button type="submit" className={classNames(styles.button, theme)} disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                    <button type="button" className={classNames(styles.button, theme)} onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </form >
        </>
    );
};