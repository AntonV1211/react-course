import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { ProgressBar } from '../progressBar/ProgressBar.jsx';
import styles from './css/layout.module.css';
import { Cart } from '../cart/Cart.jsx';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <ProgressBar />
            <Header />
            <Outlet />
            <Cart />
            <Footer />
        </div>
    );
}