import React,{ ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = JSON.parse(localStorage.getItem('userData') || '{}') ?? {};
  if (token) {
    // user is  authenticated
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

interface ProtectedProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedProps> = ({ children }) => {
  const { token } = JSON.parse(localStorage.getItem('userData') || '{}') ?? {};
  if (!token) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
