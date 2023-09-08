import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../types/user";
import { authService } from "../services/authService";
import { LoginRequest, LoginResponse } from "../types/auth";
import Cookies from "js-cookie";

interface AuthContextType {
  user: User | null;
  login: (
    username: string,
    password: string,
    remember: boolean
  ) => Promise<LoginResponse>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (
    username: string,
    password: string,
    remember: boolean
  ): Promise<LoginResponse> => {
    const data: LoginRequest = { username, password };
    const loginResponse = await authService.login(data);
    if (loginResponse.success && loginResponse.user) {
      setUser(loginResponse.user);
      if (loginResponse.user.token && remember)
        Cookies.set("authToken", loginResponse.user.token, { expires: 7 });
    }
    return loginResponse;
  };

  const logout = async () => {
    setUser(null);
    Cookies.remove("authToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
