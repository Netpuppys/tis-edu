"use client";

import React, { useState, useEffect } from "react";
import WebinarLandingLayout from "./WebinarLandingLayout";
import LoadingScreenLanding from "../admission-open/Components/LoadingScreenLanding/loadingScreenLanding";

function WebinarLanding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <LoadingScreenLanding /> : <WebinarLandingLayout />}</div>;
}

export default WebinarLanding;
