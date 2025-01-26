"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Auth check failed', error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);