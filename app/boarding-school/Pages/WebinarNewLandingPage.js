"use client";

import React, { useState, useEffect } from "react";
import WebinarNewLandingLayout from "./WebinarNewLandingLayout";
import LoadingScreenLanding from "../admission-open/Components/LoadingScreenLanding/loadingScreenLanding";

function WebinarNewLanding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <LoadingScreenLanding /> : <WebinarNewLandingLayout />}</div>;
}

export default WebinarNewLanding;
