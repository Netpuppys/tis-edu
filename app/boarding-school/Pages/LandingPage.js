"use client";

import React, { useState, useEffect } from "react";
import LandingLayout from "./LandingLayout";
import LoadingScreenLanding from "../admission-open/Components/LoadingScreenLanding/loadingScreenLanding";

function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <LoadingScreenLanding /> : <LandingLayout />}</div>;
}

export default Landing;
