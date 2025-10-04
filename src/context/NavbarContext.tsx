"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
  isNavbarVisible: boolean;
  setIsNavbarVisible: (visible: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  return (
    <NavbarContext.Provider value={{ isNavbarVisible, setIsNavbarVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
