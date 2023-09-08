import axios from "axios";
import { User } from "../types/user";

const API_BASE_URL = "http://localhost:5082/api/Auth";

export interface LoginRequest {
  username: string;
  password: string;
}

export const authService = {
  login: async (data: LoginRequest): Promise<User> => {
    try {
      const response = await axios.post<User>(`${API_BASE_URL}/login`, data);
      return response.data;
    } catch (error) {
      throw error;
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
