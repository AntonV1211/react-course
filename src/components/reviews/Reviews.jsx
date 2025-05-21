import { Review } from './Review.jsx';

export const Reviews = ({ reviews }) => (
    <ul>
        {reviews.map((review) => (
            <Review key={review.id} {...review} />
        ))}
    </ul>
);