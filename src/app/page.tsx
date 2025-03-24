import { useEffect, useRef } from "react";
import FooterComponent from "@/components/footer/FooterComponent";
import CareSection from "@/components/homepage/care/CareSection";
import HeroPage from "@/components/homepage/heropage/HeroPage";
import ProductionSection from "@/components/homepage/products/ProductSection";
import ContactComponent from "@/components/homepage/contact/ContactComponent";
import ServiceComponent from "@/components/services/ServiceComponent";
import ShowroomSever from "@/components/homepage/showroom/ShowroomServer";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";

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
      <PerfectScrollContainer>
        <ShowroomSever />
        <div className="container">
          <HeroPage />
          <ServiceComponent />
          <ProductionSection />
          <CareSection />
          <ContactComponent />
        </div>
        <FooterComponent />
      </PerfectScrollContainer>
    </div>
  );
}
