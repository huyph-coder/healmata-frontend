export type ApiResponse<T> = {
    data?: T;
    success: boolean;
    message?: string;
    error?: ApiError;
}

type ApiError = {
    message: string;
    code: number;
}

export type LoginRequest = {
    identifier: string;
    password: string;
}

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export type MeResponse = {
    userId: string;
    fullName: string;
    email: string;
    phone: string;
    avatarUrl: string;
    status: string;
    firstSetupCompleted: boolean;
    subscription: {
        plan: string,
        status: string
    },
    family: {
        hasFamily: boolean;
        familyId: string | null
    },
    permissions: string[]
}