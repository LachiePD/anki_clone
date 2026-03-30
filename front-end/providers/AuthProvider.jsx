"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
