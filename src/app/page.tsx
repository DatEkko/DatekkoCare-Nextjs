'use client'
import { useEffect, useRef } from "react";
import FooterComponent from "@/components/footer/FooterComponent";
import CareSection from "@/components/homepage/care/CareSection";
import ShowroomSection from "@/components/homepage/showroom/ShowroomSection";
import HeroPage from "@/components/homepage/heropage/HeroPage";
import ServiceSection from "@/components/homepage/services/ServiceSection";
import ProductionSection from "@/components/homepage/products/ProductSection";
import PerfectScrollBar from 'react-perfect-scrollbar';
import ContactComponent from "@/components/homepage/contact/ContactComponent";

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
    <div className="homepage" style={{ height: "100vh", fontFamily: "var(--font-lexend)" }}>
      <PerfectScrollBar>
        <div className="container">
          <HeroPage />
          <ServiceSection />
        </div>

        <ShowroomSection />

        <div className="container">
          <ProductionSection />
          <CareSection />
          <ContactComponent />
        </div>
        <FooterComponent />
      </PerfectScrollBar>
    </div>
  );
}
