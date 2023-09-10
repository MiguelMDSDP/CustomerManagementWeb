import Cookies from "js-cookie";
import React, { createContext, useContext, useState, ReactNode } from "react";

import { authService } from "../../services/authService";
import { User } from "../../utils/types/user";
import { LoginRequest } from "../../utils/types/auth";
import { IntegrationResponse } from "../../utils/types/service";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (
    username: string,
    password: string,
    remember: boolean
  ) => Promise<IntegrationResponse<User>>;
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
    if (authToken) {
      setIsAuthenticated(true);
      const authUser = Cookies.get("authUser");
      if (authUser) setUser(JSON.parse(authUser));
    } else if (!isAuthenticated) setIsAuthenticated(false);
  };

  const login = async (
    username: string,
    password: string,
    remember: boolean
  ): Promise<IntegrationResponse<User>> => {
    const data: LoginRequest = { username, password };
    const loginResponse = await authService.login(data);
    if (loginResponse.success && loginResponse.data) {
      setUser(loginResponse.data);
      setIsAuthenticated(true);
      if (remember) {
        if (loginResponse.data.token)
          Cookies.set("authToken", loginResponse.data.token, { expires: 7 });
        if (loginResponse.data)
          Cookies.set("authUser", JSON.stringify(loginResponse.data), {
            expires: 7,
          });
      }
    }
    return loginResponse;
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("authToken");
    Cookies.remove("authUser");
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
