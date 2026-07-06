import { useAuthStore } from "@/stores";

export default function useIsLoggedIn() {
    return useAuthStore(s => s.isAuthenticated)
}