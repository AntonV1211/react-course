import { ThemeProvider } from '../context/themeContext/ThemeContext.jsx';
import { UserProvider } from '../context/userContext/UserContext.jsx';
import { restaurants } from '../../../materials/mock.js'
import { Layout } from '../layout/Layout.jsx'
import { RestaurantTabs } from '../restaurant/RestaurantTabs.jsx';
import '../../styles/main.css'

export const App = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <Layout>
                    <RestaurantTabs restaurants={restaurants} />
                </Layout>
            </UserProvider>
        </ThemeProvider>
    );
}