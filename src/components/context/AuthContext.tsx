
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../api/baseURL";
import { ApiResponse, AuthContextType, TAuthContextProviderProps, TSignIn, User } from "../../types/authContextType";


export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: TAuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadingStoreData = () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");

            if (storageUser && storageToken) {
                try {
                    setUser(JSON.parse(storageUser));
                } catch (error) {
                    console.error("Erro ao analisar JSON:", error);
                }
            }
        }
        loadingStoreData();
    }, []);

    const signIn = async ({ email, password }: TSignIn) => {
        try {
            const response = await Api.post<ApiResponse>("/auth", { email, password });
            if (response.data?.error) {
                alert(response.data.error);
            } else {
                const userData = response.data?.data;
                console.log(userData)
                if (userData) {
                    setUser(userData);
                    Api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
                    localStorage.setItem("@Auth:user", JSON.stringify(userData));
                    localStorage.setItem("@Auth:token", response.data.token ?? "");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = () => {
        localStorage.clear();
        setUser(null);
        navigate("/");
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
                signed: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
