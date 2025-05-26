import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { ProgressBar } from '../progressBar/ProgressBar.jsx';

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <ProgressBar />
            <Header />
            {children}
            <Footer />
        </div>
    );
}