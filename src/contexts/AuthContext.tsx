
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

// Define types for our context
interface User {
  id: string;
  email: string;
  businessName: string;
  preferredLanguage: string;
  emailVerified: boolean;
  onboardingComplete: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, businessName: string, preferredLanguage: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  facebookLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock auth functions (to be replaced with real API calls)
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user: User = {
        id: "1",
        email,
        businessName: "Demo Business",
        preferredLanguage: "English",
        emailVerified: true,
        onboardingComplete: false
      };
      
      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error("Failed to login. Please check your credentials.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, businessName: string, preferredLanguage: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user: User = {
        id: "1",
        email,
        businessName,
        preferredLanguage,
        emailVerified: false,
        onboardingComplete: false
      };
      
      // For demo purposes, don't store this user in localStorage yet (until email verified)
      setCurrentUser(user);
      toast.success("Signup successful! Please verify your email.");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    toast.success("Logged out successfully");
  };

  const forgotPassword = async (email: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Password reset successfully. Please login with your new password.");
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (token: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (currentUser) {
        const updatedUser = { ...currentUser, emailVerified: true };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setCurrentUser(updatedUser);
      }
      
      toast.success("Email verified successfully!");
    } catch (error) {
      toast.error("Failed to verify email. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user: User = {
        id: "1",
        email: "user@google.com",
        businessName: "Google Business",
        preferredLanguage: "English",
        emailVerified: true,
        onboardingComplete: false
      };
      
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      toast.success("Logged in with Google successfully");
    } catch (error) {
      toast.error("Failed to login with Google. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const facebookLogin = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user: User = {
        id: "1",
        email: "user@facebook.com",
        businessName: "Facebook Business",
        preferredLanguage: "English",
        emailVerified: true,
        onboardingComplete: false
      };
      
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      toast.success("Logged in with Facebook successfully");
    } catch (error) {
      toast.error("Failed to login with Facebook. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Check for stored user on initialization
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    signUp,
    logout,
    forgotPassword,
    resetPassword,
    verifyEmail,
    googleLogin,
    facebookLogin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
