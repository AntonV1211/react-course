import { useReducer } from 'react';

const SET_FIELD = 'SET_FIELD';
const SET_RATING = 'SET_RATING';
const CLEAR = 'CLEAR';

const initialState = {
    user: '',
    text: '',
    rating: 1,
};

function reducer(state, { type, field, value }) {
    switch (type) {
        case SET_FIELD:
            return { ...state, [field]: value };
        case SET_RATING:
            return { ...state, rating: value };
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}

export function useReviewForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: SET_FIELD,
            field: name,
            value,
        });
    };

    const handleRatingChange = (newRating) => {
        dispatch({ type: SET_RATING, value: newRating });
    };

    const handleClear = () => {
        dispatch({ type: CLEAR });
    };

    return {
        state,
        handleChange,
        handleRatingChange,
        handleClear,
    };
}