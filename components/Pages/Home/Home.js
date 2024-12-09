"use client";

import React, { useState, useEffect } from "react";
import HomeLayout from "../../home/HomeLayout";
import LoadingScreen from "../../home/loading/LoadingScreen";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <LoadingScreen />}

      <HomeLayout />
    </div>
  );
}

export default HomePage;
