
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage on mount
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("auth_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      // Simulating API delay
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Demo credentials check
      if (email === "demo@example.com" && password === "password") {
        const userData = {
          id: "user-1",
          email: "demo@example.com", 
          name: "Demo User"
        };
        
        setUser(userData);
        localStorage.setItem("auth_user", JSON.stringify(userData));
        toast.success("Login successful!");
        return true;
      }
      
      // Check if this user was registered during this session
      const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
      const foundUser = registeredUsers.find((u: any) => 
        u.email === email && u.password === password
      );
      
      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name
        };
        
        setUser(userData);
        localStorage.setItem("auth_user", JSON.stringify(userData));
        toast.success("Login successful!");
        return true;
      }

      toast.error("Invalid email or password");
      return false;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      // Simulating API delay
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if email already exists
      const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
      if (registeredUsers.some((u: any) => u.email === email)) {
        toast.error("Email already in use");
        return false;
      }

      // Create new user
      const newUser = { 
        id: `user-${Date.now()}`,
        name,
        email,
        password // In a real app, NEVER store plaintext passwords
      };

      // Save to "database" (localStorage in this demo)
      registeredUsers.push(newUser);
      localStorage.setItem("registered_users", JSON.stringify(registeredUsers));

      // Log user in after registration
      const userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };
      
      setUser(userData);
      localStorage.setItem("auth_user", JSON.stringify(userData));
      
      toast.success("Registration successful!");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
