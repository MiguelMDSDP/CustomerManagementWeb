import Cookies from "js-cookie";
import React, { createContext, useContext, useState, ReactNode } from "react";

import { authService } from "../../services/authService";
import { User } from "../../utils/types/user";
import { LoginRequest, LoginResponse } from "../../utils/types/auth";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (
    username: string,
    password: string,
    remember: boolean
  ) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  checkAuthentication: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const checkAuthentication = () => {
    const authToken = Cookies.get("authToken");
    if (authToken) setIsAuthenticated(true);
    else if (!isAuthenticated) setIsAuthenticated(false);
  };

  const login = async (
    username: string,
    password: string,
    remember: boolean
  ): Promise<LoginResponse> => {
    const data: LoginRequest = { username, password };
    const loginResponse = await authService.login(data);
    if (loginResponse.success && loginResponse.data) {
      setUser(loginResponse.data);
      setIsAuthenticated(true);
      if (loginResponse.data.token && remember)
        Cookies.set("authToken", loginResponse.data.token, { expires: 7 });
    }
    return loginResponse;
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, checkAuthentication }}
    >
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
