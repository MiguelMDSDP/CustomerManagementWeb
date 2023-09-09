import { LoginRequest, LoginResponse } from "../types/auth";
import { User } from "../types/user";
import axiosInstance from "./config";

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await axiosInstance.post<User>("/Auth/login", data);
      return {
        success: true,
        user: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      };
    }
  },
};
