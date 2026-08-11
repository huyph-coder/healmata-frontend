import { create } from 'zustand';
import { AuthStateEnum, AuthStoreState, User } from './auth.types';
import { authStorage } from './auth.storage';
import { authService } from './api';

export const useAuthStore = create<AuthStoreState>((set, get) => ({
  authState: AuthStateEnum.UNKNOWN,
  currentUser: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  hasInitialized: false,

  setCurrentUser: (user: User | null) => {
    set({ currentUser: user, isAuthenticated: !!user });
  },

  clearError: () => set({ error: null }),

  clearAuthState: () => {
    set({
      authState: AuthStateEnum.UNAUTHENTICATED,
      currentUser: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      error: null,
      isLoading: false,
    });
  },

  checkSession: async () => {
    if (get().isLoading || get().hasInitialized) return;

    set({ authState: AuthStateEnum.CHECKING_SESSION, isLoading: true, error: null });

    try {
      const { accessToken, refreshToken } = await authStorage.getTokens();

      if (!accessToken) {
        set({
          authState: AuthStateEnum.UNAUTHENTICATED,
          isAuthenticated: false,
          isLoading: false,
          hasInitialized: true,
        });
        return;
      }

      const user = await authService.fetchMe(accessToken);

      set({
        authState: AuthStateEnum.AUTHENTICATED,
        currentUser: user,
        accessToken,
        refreshToken,
        isAuthenticated: true,
        isLoading: false,
        hasInitialized: true,
      });
    } catch {
      await authStorage.clearTokens();
      set({
        authState: AuthStateEnum.UNAUTHENTICATED,
        currentUser: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
        hasInitialized: true,
      });
    }
  },

  login: async (credentials) => {
    set({ authState: AuthStateEnum.AUTHENTICATING, isLoading: true, error: null });

    try {
      const response = await authService.loginApi(credentials);
      await authStorage.saveTokens(response.accessToken, response.refreshToken);

      set({
        authState: AuthStateEnum.AUTHENTICATED,
        currentUser: response.user,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        authState: AuthStateEnum.UNAUTHENTICATED,
        isLoading: false,
        error: error.message || 'Đăng nhập thất bại',
      });
    }
  },

  register: async (data) => {
    set({ authState: AuthStateEnum.AUTHENTICATING, isLoading: true, error: null });

    try {
      const response = await authService.registerApi(data);
      await authStorage.saveTokens(response.accessToken, response.refreshToken);

      set({
        authState: AuthStateEnum.AUTHENTICATED,
        currentUser: response.user,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        authState: AuthStateEnum.UNAUTHENTICATED,
        isLoading: false,
        error: error.message || 'Đăng ký thất bại',
      });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await authService.logoutApi();
    } catch {
      // Bỏ qua lỗi mạng khi logout
    } finally {
      await authStorage.clearTokens();
      set({
        authState: AuthStateEnum.UNAUTHENTICATED,
        currentUser: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
    }
  },

  setSessionExpired: () => {
    authStorage.clearTokens();
    set({
      authState: AuthStateEnum.SESSION_EXPIRED,
      currentUser: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
  },
}));