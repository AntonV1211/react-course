import PropTypes from 'prop-types';

export const Review = ({ user, text, rating }) => (
    <li>
        {user}: {text} - {rating} stars
    </li>
);

Review.propTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};