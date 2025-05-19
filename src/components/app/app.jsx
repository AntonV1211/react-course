import PropTypes from 'prop-types';
import { restaurants } from '../../../materials/mock.js'
import { Layout } from '../layout/Layout.jsx'
import { RestaurantTabs } from '../restaurant/RestaurantTabs.jsx';
import '../../styles/main.css'

export const App = () => {
    return (
        <Layout>
            <RestaurantTabs restaurants={restaurants} />
        </Layout>
    );
}

App.propTypes = {
    title: PropTypes.string.isRequired
};