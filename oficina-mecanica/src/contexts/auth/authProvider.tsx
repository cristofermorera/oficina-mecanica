import { useEffect, useState } from "react";
import { useApi } from "../../hooks/User";
import { User } from "../../types/User";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken');
        if (storageData) {
            const data = await api.validateToken(storageData);
            if (data.user) {
                setUser(data.user);
            }
        }
    }

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.user && data.user.token) {
            setUser(data.user);
            setToken(data.user.token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        await api.logout();
        window.location.href = window.location.href;
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    );
}

