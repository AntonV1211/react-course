import React from 'react';
import { Counter } from '../counter/Counter';
import { useTheme } from '../../hooks/useTheme';
import classNames from 'classnames';
import styles from './css/reviewForm.module.css';

export const ReviewFormBase = ({
    initialValues,
    onSubmit,
    onClear,
    user,
    isLoading,
    submitLabel = 'Send',
}) => {
    const { theme } = useTheme();
    const [text, setText] = React.useState(initialValues.text || '');
    const [rating, setRating] = React.useState(initialValues.rating || 1);

    React.useEffect(() => {
        setText(initialValues.text || '');
        setRating(initialValues.rating || 1);
    }, [initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ text, rating });
    };

    const handleClear = () => {
        setText('');
        setRating(1);
        onClear?.();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.reviewForm}>
            <div className={styles.field}>
                <input
                    type="text"
                    name="user"
                    className={styles.input}
                    placeholder="User name"
                    value={user?.name || ''}
                    disabled
                    required
                />
            </div>
            <div className={styles.field}>
                <textarea
                    name="text"
                    className={styles.textarea}
                    placeholder="Description"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                />
            </div>
            <div className={[styles.field, styles.rating].join(' ')}>
                <div style={{ fontSize: 14 }}>Rating:</div>
                <Counter
                    count={rating}
                    increment={() => setRating(Math.min(rating + 1, 5))}
                    decrement={() => setRating(Math.max(rating - 1, 1))}
                    min={1}
                    max={5}
                />
            </div>
            <div className={styles.actions}>
                <button type="submit" className={classNames(styles.button, theme)} disabled={isLoading}>
                    {isLoading ? 'Sending...' : submitLabel}
                </button>
                <button type="button" className={classNames(styles.button, theme)} onClick={handleClear}>
                    Clear
                </button>
            </div>
        </form>
    );
};