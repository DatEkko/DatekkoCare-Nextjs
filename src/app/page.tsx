'use client'
import { useEffect } from "react";
import FooterComponent from "@/components/footer/FooterComponent";
import CareSection from "@/components/homepage/care/CareSection";
import DiseasesSection from "@/components/homepage/diseases/DiseasesSection";
import HeroPage from "@/components/homepage/heropage/HeroPage";
import OrganSection from "@/components/homepage/organs/OrganSection";
import ProductionSection from "@/components/homepage/products/ProductSection";
import PerfectScrollBar from 'react-perfect-scrollbar';

export default function Home() {

  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/serviceWorker.js")
  //       .then(() => console.log("Service Worker registered!"))
  //       .catch((err) => console.error("Service Worker registration failed:", err));
  //   }
  // }, []);

  return (

    <div className="homepage" style={{ height: "100vh" }}>
      <PerfectScrollBar>
        <div className="container">
          <HeroPage />
          <OrganSection />
          <DiseasesSection />
          <CareSection />
          <ProductionSection />
        </div>
        <FooterComponent />
      </PerfectScrollBar>
    </div>
  );
}
