import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoaderContext } from "@/context/LoaderContext";

interface User {
    username: string;
    password: string;
}

interface AuthContextProps {
    user: User | null;
    login: (params: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => {
    },
    logout: () => {
    },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const { setIsLoading } = useContext(LoaderContext);

    const login = async (params: User) => {
        setIsLoading(true);
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        if (response.status === 200) {
            setUser(params);
            localStorage.setItem("user", JSON.stringify(params)); // Save user to localStorage
            router.push("/admin");
        }
        setIsLoading(false);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user"); // Remove user from localStorage
        router.push("/login");
    };

    useEffect(() => {
        setIsLoading(true);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            router.push("/admin");
        } else {
            router.push("/login");
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
