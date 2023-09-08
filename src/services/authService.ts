import axios from "axios";
import { LoginRequest, LoginResponse } from "../types/auth";
import { User } from "../types/user";

const API_BASE_URL = "http://localhost:5082/api/Auth";

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await axios.post<User>(`${API_BASE_URL}/login`, data);
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
