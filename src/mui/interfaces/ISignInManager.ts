export default interface ISignInManager {
    email: string
    password: string
    handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void;
    signIn(): void;
}
