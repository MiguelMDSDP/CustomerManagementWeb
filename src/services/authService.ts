import axios from "axios";
import { User } from "../types/user";
import { LoginRequest, LoginResponse } from "../types/auth";

const API_BASE_URL = "http://localhost:5082/api/Auth";

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await axios.post<LoginResponse, User>(
        `${API_BASE_URL}/login`,
        data
      );
      return {
        success: true,
        user: response,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      }
    }
  },

  logout: async (): Promise<void> => {
    try {
      await axios.post(`${API_BASE_URL}/logout`);
    } catch (error) {
      throw error;
    }
  },
};
