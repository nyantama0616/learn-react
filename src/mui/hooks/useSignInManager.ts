import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import IAuthManager from "../interfaces/IAuthManager";
import ISignInManager from "../interfaces/ISignInManager";

export default function useSignInManager(): ISignInManager {
    const authManager = useAuth();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function signIn() {
        console.log("Sign in");
        console.log({
            email,
            password
        });
        authManager.authenticate(email, password);
    }

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        signIn
    }
}
