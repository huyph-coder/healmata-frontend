import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

export type AuthState = 
  | 'UNKNOWN'
  | 'CHECKING_SESSION'
  | 'UNAUTHENTICATED'
  | 'AUTHENTICATING'
  | 'AUTHENTICATED'
  | 'SESSION_EXPIRED';

export interface User {
  id: string | number;
  email: string;
  name?: string;
  [key: string]: any;
}

interface AuthStoreState {
  authState: AuthState;
  currentUser: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  setAuthState: (state: AuthState) => void;
  setCurrentUser: (user: User | null) => void;
  setTokens: (accessToken: string | null, refreshToken: string | null) => void;
  clearError: () => void;

  checkSession: () => Promise<void>;
  login: (credentials: { email: string; password?: string; [key: string]: any }) => Promise<boolean>;
  register: (payload: { email: string; password?: string; [key: string]: any }) => Promise<boolean>;
  logout: () => Promise<void>;
  setSessionExpired: () => void;
  clearAuthState: () => void;
}

const TOKEN_KEY = 'user_access_token';
const REFRESH_TOKEN_KEY = 'user_refresh_token';

let isCheckingSessionInProgress = false;

export const useAuthStore = create<AuthStoreState>((set, get) => ({
  authState: 'UNKNOWN',
  currentUser: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  setAuthState: (authState) => set({ 
    authState, 
    isAuthenticated: authState === 'AUTHENTICATED' 
  }),

  setCurrentUser: (currentUser) => set({ currentUser }),

  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),

  clearError: () => set({ error: null }),

  checkSession: async () => {
    if (isCheckingSessionInProgress) return;
    isCheckingSessionInProgress = true;

    set({ authState: 'CHECKING_SESSION', isLoading: true, error: null });

    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);

      if (!token) {
        set({
          authState: 'UNAUTHENTICATED',
          accessToken: null,
          refreshToken: null,
          currentUser: null,
          isAuthenticated: false,
          isLoading: false,
        });
        isCheckingSessionInProgress = false;
        return;
      }

      set({ accessToken: token, refreshToken });

      const mockUserResponse: User = { id: 1, email: 'user@example.com', name: 'Nguyễn Triệu Trúc Vy' };

      set({
        currentUser: mockUserResponse,
        authState: 'AUTHENTICATED',
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);

      set({
        authState: 'UNAUTHENTICATED',
        accessToken: null,
        refreshToken: null,
        currentUser: null,
        isAuthenticated: false,
        isLoading: false,
        error: error?.message || 'Phiên làm việc hết hạn',
      });
    } finally {
      isCheckingSessionInProgress = false;
    }
  },
  login: async (credentials) => {
    set({ authState: 'AUTHENTICATING', isLoading: true, error: null });
    try {

      const mockAccessToken = 'mock_access_token_xyz';
      const mockRefreshToken = 'mock_refresh_token_xyz';

      await SecureStore.setItemAsync(TOKEN_KEY, mockAccessToken);
      await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, mockRefreshToken);

      set({ accessToken: mockAccessToken, refreshToken: mockRefreshToken });

      const mockUser: User = { id: 1, email: credentials.email, name: 'Nguyễn Triệu Trúc Vy' };

      set({
        currentUser: mockUser,
        authState: 'AUTHENTICATED',
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    } catch (error: any) {
      set({
        authState: 'UNAUTHENTICATED',
        isLoading: false,
        error: error?.message || 'Đăng nhập thất bại',
      });
      return false;
    }
  },

  register: async (payload) => {
    set({ authState: 'AUTHENTICATING', isLoading: true, error: null });
    try {
      const mockAccessToken = 'mock_access_token_xyz';
      const mockRefreshToken = 'mock_refresh_token_xyz';

      await SecureStore.setItemAsync(TOKEN_KEY, mockAccessToken);
      await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, mockRefreshToken);

      const mockUser: User = { id: 1, email: payload.email, name: 'Nguyễn Triệu Trúc Vy' };

      set({
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
        currentUser: mockUser,
        authState: 'AUTHENTICATED',
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    } catch (error: any) {
      set({
        authState: 'UNAUTHENTICATED',
        isLoading: false,
        error: error?.message || 'Đăng ký thất bại',
      });
      return false;
    }
  },

  logout: async () => {
    try {
    } catch (e) {
      console.error('Logout API error:', e);
    }

    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);

    set({
      authState: 'UNAUTHENTICATED',
      currentUser: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },

  setSessionExpired: async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);

    set({
      authState: 'SESSION_EXPIRED',
      currentUser: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  clearAuthState: async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
    set({
      authState: 'UNAUTHENTICATED',
      currentUser: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },
}));