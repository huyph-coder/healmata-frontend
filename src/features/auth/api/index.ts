import { User } from '../auth.types';

export const authService = {
  async fetchMe(token: string): Promise<User> {
    if (!token || token === 'invalid_token') throw new Error('Unauthorized');
    return { id: 'usr_1', email: 'user@example.com', name: 'Nguyễn Văn A', role: 'admin' };
  },

  async loginApi(credentials: { email: string; pass: string }): Promise<{ user: User; accessToken: string; refreshToken: string }> {
    return {
      user: { id: 'usr_1', email: credentials.email, name: 'Nguyễn Văn A', role: 'admin' },
      accessToken: 'mock_access_token_123',
      refreshToken: 'mock_refresh_token_123',
    };
  },

  async registerApi(data: { email: string; pass: string; name: string }): Promise<{ user: User; accessToken: string; refreshToken: string }> {
    return {
      user: { id: 'usr_2', email: data.email, name: data.name, role: 'user' },
      accessToken: 'mock_access_token_456',
      refreshToken: 'mock_refresh_token_456',
    };
  },

  async logoutApi(): Promise<void> {
  }
};