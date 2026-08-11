export enum AuthStateEnum {
  UNKNOWN = 'UNKNOWN',
  CHECKING_SESSION = 'CHECKING_SESSION',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  AUTHENTICATING = 'AUTHENTICATING',
  AUTHENTICATED = 'AUTHENTICATED',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthStoreState {
  authState: AuthStateEnum;
  currentUser: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  hasInitialized: boolean;

  checkSession: () => Promise<void>;
  login: (credentials: { email: string; pass: string }) => Promise<void>;
  register: (data: { email: string; pass: string; name: string }) => Promise<void>;
  logout: () => Promise<void>;
  setSessionExpired: () => void;
  clearError: () => void;
  setCurrentUser: (user: User | null) => void;
  clearAuthState: () => void;
}