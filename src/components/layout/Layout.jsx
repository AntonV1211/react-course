import PropTypes from 'prop-types';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};