"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "../../../components/home/loading/LoadingScreen";
import LandingLayout from "./LandingLayout";

function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <LoadingScreen /> : <LandingLayout />}</div>;
}

export default Landing;
