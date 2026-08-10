export type AuthUser = {
  userId: string;
  fullName: string;
  email?: string | null;
  phone?: string | null;
  avatarUrl?: string | null;
  status: 'active' | 'disabled';
  firstSetupCompleted: boolean;
}