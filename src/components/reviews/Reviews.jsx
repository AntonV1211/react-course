import { Review } from './Review.jsx';
import { ReviewForm } from '../reviewForm/ReviewForm.jsx';
import { useUser } from '../../hooks/useUser';

export const Reviews = ({ reviewIds }) => {
    const { user } = useUser();

    return (
        <>
            <h3>Reviews:</h3>
            <ul>
                {reviewIds.map(id => (
                    <Review key={id} reviewId={id} />
                ))}
            </ul>
            {user && <ReviewForm />}
        </>
    );
};