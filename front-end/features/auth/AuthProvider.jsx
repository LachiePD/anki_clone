"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [access, setAccess] = useState({
    isAllowed: false,
    restriction: "isLoggedOut",
  });
  const router = useRouter();
  const pathname = usePathname();
  const publicRoutes = ["/login", "/"];

  useEffect(() => {
    if (!access.isAllowed && !publicRoutes.includes(pathname)) {
      console.log(access.isAllowed);
      router.push("/login");
    }
  }, [access.isAllowed, pathname]);

  const revokeAccess = (reason) => {
    setAccess({ isAllowed: false, restriction: reason });
  };

  const login = () => setAccess({ isAllowed: true, restriction: null });
  const value = { actions: { revokeAccess, login } };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
