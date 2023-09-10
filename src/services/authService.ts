import { LoginRequest } from "../utils/types/auth";
import { IntegrationResponse } from "../utils/types/service";
import { User } from "../utils/types/user";
import axiosInstance from "./config";

export const authService = {
  login: async (data: LoginRequest): Promise<IntegrationResponse<User>> => {
    try {
      const response = await axiosInstance.post<User>("/Auth/login", data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      };
    }
  },
};
