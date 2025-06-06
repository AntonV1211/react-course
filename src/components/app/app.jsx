import { ThemeProvider } from '../context/themeContext/ThemeContext.jsx';
import { UserProvider } from '../context/userContext/UserContext.jsx';
import { Layout } from '../layout/Layout.jsx'
import { RestaurantTabs } from '../restaurant/RestaurantTabs.jsx';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.js';
import '../../styles/main.css'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <UserProvider>
                    <Layout>
                        <RestaurantTabs />
                    </Layout>
                </UserProvider>
            </ThemeProvider>
        </Provider>
    );
}