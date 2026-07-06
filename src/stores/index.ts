import { create } from "zustand";

type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string | null) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    token: null,
    setToken: (token) => set({ token }),
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));