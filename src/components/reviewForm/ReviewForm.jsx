import { Counter } from '../counter/Counter.jsx';
import { useReviewForm } from './useReviewForm.js';
import styles from './css/reviewForm.module.css';

export const ReviewForm = () => {
    const { state, handleChange, handleRatingChange, handleClear } = useReviewForm();

    return (
        <>
            <h3>Feedback form</h3>
            <form onSubmit={e => e.preventDefault()} className={styles.reviewForm}>
                <div className={styles.field}>
                    <input
                        type="text"
                        name="user"
                        className={styles.input}
                        placeholder="User name"
                        value={state.user}
                        onChange={handleChange}
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
                    <button type="button" className={styles.button} onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </form >
        </>
    );
};