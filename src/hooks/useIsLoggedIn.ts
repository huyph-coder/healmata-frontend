import { useAuthStore } from "@/stores";

export const useIsLoggedIn = () => {
    return useAuthStore(s => s.isAuthenticated)
}

export default useIsLoggedIn;