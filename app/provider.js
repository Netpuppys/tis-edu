"use client";

import { MobileProvider } from "@/components/globalComponents/IsMobileContext";
import { UtmProvider } from "@/components/globalComponents/utmParams";

export default function ProvidersWrapper({ children }) {
  return (
    <MobileProvider>
      <UtmProvider>{children}</UtmProvider>
    </MobileProvider>
  );
}
