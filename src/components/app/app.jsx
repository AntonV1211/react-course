import { ThemeProvider } from '../context/themeContext/ThemeContext.jsx';
import { UserProvider } from '../context/userContext/UserContext.jsx';
import { Layout } from '../layout/Layout.jsx'
import { RestaurantTabs } from '../restaurant/RestaurantTabs.jsx';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.js';
import { HomePage } from '../homePage/HomePage.jsx';
import { RestaurantDetailsLayout } from '../restaurant/RestaurantDetailsLayout.jsx';
import { MenuTab } from '../menu/MenuTab.jsx';
import { ReviewsTab } from '../reviews/ReviewsTab.jsx';
import { DishPage } from '../dishPage/DishPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../styles/main.css'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <UserProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path="restaurants">
                                    <Route index element={<RestaurantTabs />} />
                                    <Route path=":restaurantId" element={<RestaurantDetailsLayout />}>
                                        <Route index element={<MenuTab />} />
                                        <Route path="menu" element={<MenuTab />} />
                                        <Route path="reviews" element={<ReviewsTab />} />
                                    </Route>
                                </Route>
                                <Route path="dish/:dishId" element={<DishPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserProvider>
            </ThemeProvider>
        </Provider>
    );
}