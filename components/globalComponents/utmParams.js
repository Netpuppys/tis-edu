"use client";

import React, { createContext, useState, useEffect } from "react";

export const UtmContext = createContext();

export const UtmProvider = ({ children }) => {
  const [utmParams, setUtmParams] = useState("");
  const [isClient, setIsClient] = useState(false); // <-- add this

  useEffect(() => {
    setIsClient(true); // now we know we are on the client

    const params = new URLSearchParams(window.location.search);
    const utmParamsString = params.toString();
    if (utmParamsString) {
      setUtmParams(`?${utmParamsString}`);
    }
  }, []);

  if (!isClient) return null; // <-- render nothing on server

  return (
    <UtmContext.Provider value={{ utmParams }}>
      {children}
    </UtmContext.Provider>
  );
};
