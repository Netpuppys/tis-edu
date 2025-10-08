import React from "react";
import HomeLayout from "../../home/HomeLayout";
import SeoContent from "./SeoContent";
import BackupHomeLayout from "@/components/home/BackupHomeLayout";

function HomePage() {
  return (
    <div>
      <SeoContent/>

      {/* <HomeLayout /> */}

      <BackupHomeLayout/>
      
    </div>
  );
}

export default HomePage;
