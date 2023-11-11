/*
どこからでもauthenticate()できるけど大丈夫なの？？
*/

import { createContext, useContext, useState } from 'react';
import IAuthManager, { AuthStatus } from '../interfaces/IAuthManager';
import User from '../interfaces/User';

type AuthContextType = IAuthManager;

const AuthContext = createContext<AuthContextType>({
    status: AuthStatus.NotAuthenticated,
    currentUser: null,
    authenticate: () => false
});

export function useAuth() {
    return useContext(AuthContext);
}

interface State {
    status: AuthStatus
    currentUser: User | null
}

const initialState: State = {
    status: AuthStatus.NotAuthenticated,
    currentUser: null
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<State>(initialState);

    function authenticate(email: string, password: string): boolean {
        setState({
            status: AuthStatus.Authenticated,
            currentUser: {
                email: email
            }
        });
        console.log("Authenticated!");
        return true;
    }

    return (
        <AuthContext.Provider value={{ status: state.status, currentUser: state.currentUser, authenticate }}>
            { children }
        </AuthContext.Provider>
    )
}
