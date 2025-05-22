export const Review = ({ user, text, rating }) => (
    <li>
        {user}: {text} - {rating} stars
    </li>
);