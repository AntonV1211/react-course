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