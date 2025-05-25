import { Counter } from '../counter/Counter.jsx';
import { useReviewForm } from './useReviewForm.js';

export const ReviewForm = () => {
    const { state, handleChange, handleRatingChange, handleClear } = useReviewForm();

    return (
        <>
            <h3>Feedback form</h3>
            <form onSubmit={e => e.preventDefault()} className="review-form">
                <div className="review-form__field">
                    <input
                        type="text"
                        name="user"
                        className="review-form__input"
                        placeholder="User name"
                        value={state.user}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="review-form__field">
                    <textarea
                        name="text"
                        className="review-form__textarea"
                        placeholder="Description"
                        value={state.text}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="review-form__field review-form__field--rating">
                    <div style={{ fontSize: 14 }}>Rating:</div>
                    <Counter
                        count={state.rating}
                        increment={() => handleRatingChange(Math.min(state.rating + 1, 5))}
                        decrement={() => handleRatingChange(Math.max(state.rating - 1, 1))}
                        min={1}
                        max={5}
                    />
                </div>
                <div className="review-form__actions">
                    <button type="button" className="review-form__button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </form >
        </>
    );
};