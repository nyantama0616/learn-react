import { useState } from "react";
import IAuthManager, {AuthStatus} from "../interfaces/IAuthManager";
import User from "../interfaces/User";

interface State {
    status: AuthStatus
    currentUser: User | null
}

const initialState: State = {
    status: AuthStatus.NotAuthenticated,
    currentUser: null
}

export default function useAuthManager(): IAuthManager {
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

    return {
        status: state.status,
        currentUser: state.currentUser,
        authenticate
    }
}
