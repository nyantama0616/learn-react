import User from "./User"

export default interface IAuthManager {
    status: AuthStatus
    currentUser: User | null
    authenticate(email: string, password: string): boolean
}

export enum AuthStatus {
    NotAuthenticated,
    Authenticating,
    Authenticated,
}
