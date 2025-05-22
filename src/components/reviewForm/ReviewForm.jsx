import { useReducer } from 'react';
import { Counter } from '../counter/Counter.jsx';

const initialState = {
    user: '',
    text: '',
    rating: 1,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'SET_RATING':
            return { ...state, rating: action.value };
        case 'CLEAR':
            return initialState;
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'SET_FIELD',
            field: name,
            value,
        });
    };

    const handleRatingChange = (newRating) => {
        dispatch({ type: 'SET_RATING', value: newRating });
    };

    const handleClear = () => {
        dispatch({ type: 'CLEAR' });
    };

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