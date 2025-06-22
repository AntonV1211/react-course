import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => setUser({ name: 'DemoUser' });
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};