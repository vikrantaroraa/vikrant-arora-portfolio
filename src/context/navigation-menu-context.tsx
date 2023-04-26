// @ts-nocheck
import { createContext, useContext, useState } from "react";

const NavigationMenuContext = createContext();

export const NavigationMenuProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>("home");
  return (
    <NavigationMenuContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavigationMenuContext.Provider>
  );
};

export const useNavigationMenu = () => {
  return useContext(NavigationMenuContext);
};
