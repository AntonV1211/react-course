import { createRoot } from 'react-dom/client'
import { restaurants } from '../materials/mock.js'

const root = createRoot(document.getElementById('root'))
root.render(
  <div>
    <h1>List of restaurants</h1>
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Menu:</h3>
          <ul>
            {restaurant.menu.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Reviews:</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>
                {review.user}: {review.text} - {review.rating} stars
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)
