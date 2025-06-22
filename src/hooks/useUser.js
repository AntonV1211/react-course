import { useContext } from 'react';
import { UserContext } from '../components/context/userContext/UserContext';

export const useUser = () => useContext(UserContext);