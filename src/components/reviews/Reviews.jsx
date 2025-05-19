import PropTypes from 'prop-types';
import { Review } from './Review.jsx';

export const Reviews = ({ reviews }) => (
    <ul>
        {reviews.map((review) => (
            <Review key={review.id} {...review} />
        ))}
    </ul>
);

Reviews.propTypes = {
    reviews: PropTypes.array.isRequired,
};