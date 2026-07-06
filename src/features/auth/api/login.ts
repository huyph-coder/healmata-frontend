import { apiClient } from "@/services/apiClient"
import { ENDPOINTS } from "@/constants"
import { ApiResponse, LoginResponse, MeResponse } from "@/types"

export const auth = {
    async loginBasic(username: string, password: string): Promise<ApiResponse<LoginResponse>> {

        if (username == "test" && password == "123456") {
            return {
                success: true,
                data: {
                    accessToken: "mockAccessToken",
                    refreshToken: "mockRefreshToken",
                    expiresIn: 3600,
                }
            }
        }

        const response = await apiClient.post(ENDPOINTS.LOGIN, {
            username,
            password
        });

        return {
            success: false
        }
    },

    async me(): Promise<ApiResponse<MeResponse>> {
        return {
            success: true,
            data: {
                userId: "mockUserId",
                fullName: "Mock User",
                email: "mock@example.com",
                phone: "1234567890",
                avatarUrl: "mockAvatarUrl",
                status: "active",
                firstSetupCompleted: false,
                subscription: {
                    plan: "premium",
                    status: "active"
                },
                family: {
                    hasFamily: false,
                    familyId: null
                },
                permissions: ["HOME_ACCESS", "CARE_RECEIVER_ACCESS"]
            }
        }
    }
}