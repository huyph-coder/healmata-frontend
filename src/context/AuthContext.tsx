import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: any;
  login: (credentials: any) => Promise<any>;
  register: (userData: any) => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const register = async (userData: any) => {
    try {
      console.log("Dữ liệu đăng ký:", userData);
      return { success: true, message: "Đăng ký tài khoản thành công!" };
    } catch (error) {
      return { success: false, message: "Đăng ký thất bại, vui lòng thử lại!" };
    }
  };

  const login = async (credentials: any) => {
    setUser(credentials);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được sử dụng bên trong AuthProvider");
  }
  return context;
};