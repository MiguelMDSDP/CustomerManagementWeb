import axios from "axios";
import Cookies from "js-cookie";
import { LoginRequest, LoginResponse } from "../types/auth";
import { User } from "../types/user";

const API_BASE_URL = "http://localhost:5082/api/Auth";

export const authService = {
  login: async (
    data: LoginRequest,
    remember: boolean
  ): Promise<LoginResponse> => {
    try {
      const response = await axios.post<User>(`${API_BASE_URL}/login`, data);
      if (response.data.token && remember)
        Cookies.set("authToken", response.data.token, { expires: 7 });
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

  logout: async (): Promise<void> => {
    try {
      await axios.post(`${API_BASE_URL}/logout`);
      Cookies.remove("authToken");
    } catch (error) {
      throw error;
    }
  },
};
