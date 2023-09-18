
import { ReactNode, createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { baseURL } from "../../config/baseURL";

type User = {
    email: string
}


type TSignIn = {
    email: string,
    password: string
}


type TAuthContextProviderProps = {
    children?: ReactNode | undefined
}

type AuthContextType = {
    user: User | undefined;
    signIn: (props: TSignIn) => void;
    signUp: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: TAuthContextProviderProps) => {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        const loadingStoreData = () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");

            if (storageUser && storageToken) {
                setUser(storageUser);
            }
        };
        loadingStoreData();
    }, []);

    const signIn = async ({ email, password }: TSignIn) => {
        try {
            const response = await baseURL.post("/auth", { email, password });
            if (response.data.error) {
                alert(response.data.error);
            } else {
                setUser(response.data);
                baseURL.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.token}`;

                localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
                localStorage.setItem("@Auth:token", response.data.token);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const singOut = () => {
        localStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                singOut,
                signed: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
