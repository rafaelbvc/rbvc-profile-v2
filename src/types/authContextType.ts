import { ReactNode } from "react"

export type User = {
    email: string
    password: string
} | null


export type TSignIn = {
    email: string,
    password: string
}


export type TAuthContextProviderProps = {
    children?: ReactNode;
}

export type AuthContextType = {
    user: User;
    signIn: (props: TSignIn) => Promise<void>;
    signOut: () => void;
    signed: boolean;
}

export type ApiResponse = {
    data?: User;
    token?: string;
    error?: string;
};