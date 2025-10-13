import React from "react";
import HomeLayout from "../../home/HomeLayout";
import SeoContent from "./SeoContent";
// import BackupHomeLayout from "@/components/home/BackupHomeLayout";
import dynamic from "next/dynamic";

// Dynamically import client-only component
const BackupHomeLayout = dynamic(
  () => import("@/components/home/BackupHomeLayout"),
  { ssr: false } // do NOT server-render this
);


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
