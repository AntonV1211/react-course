import { createRoot } from 'react-dom/client'
import { App } from './components/app/app.jsx'
import { ThemeProvider } from './components/context/themeContext/ThemeContext.jsx';
import { UserProvider } from './components/context/userContext/UserContext.jsx';

const root = createRoot(document.getElementById('root'))
root.render(
    <ThemeProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </ThemeProvider>
)
