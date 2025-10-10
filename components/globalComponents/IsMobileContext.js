'use client'

import { createContext, useContext, useEffect, useState } from "react";

export const MobileContext = createContext(undefined);

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  // 👇 avoid throwing during SSR
  const context = useContext(MobileContext);
  if (context === undefined) {
    return { isMobile: false }; // safe fallback instead of error
  }
  return context;
};
