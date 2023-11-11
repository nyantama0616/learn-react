import { useState } from "react";
import ISignInManager from "../interfaces/ISignInManager";

export default function useSignInManager(): ISignInManager {
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
    }

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        signIn
    }
}
