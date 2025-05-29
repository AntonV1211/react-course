import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { ProgressBar } from '../progressBar/ProgressBar.jsx';
import styles from './css/layout.module.css';

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
        </div>
    );
}