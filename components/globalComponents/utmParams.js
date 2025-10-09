"use client";
import React, { createContext, useState, useEffect } from "react";

export const UtmContext = createContext();

export const UtmProvider = ({ children }) => {
  const [utmParams, setUtmParams] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") { // <- ensures SSR safety
      const params = new URLSearchParams(window.location.search);
      const utmParamsString = params.toString();
      if (utmParamsString) {
        setUtmParams(`?${utmParamsString}`);
      }
    }
  }, []);

  return (
    <UtmContext.Provider value={{ utmParams }}>
      {children}
    </UtmContext.Provider>
  );
};
