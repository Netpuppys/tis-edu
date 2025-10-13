"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    // Only run the code if on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVw(window.innerWidth);
    };

    handleResize(); // Initialize the state on component mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, vw }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("useMobile must be used within a MobileProvider");
  }
  return context;
};