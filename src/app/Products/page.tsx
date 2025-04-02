import FooterComponent from "@/components/footer/FooterComponent";
import BannerProductComponent from "@/components/product/banner/BannerProductComponent";
import TopProductComponent from "@/components/product/topProduct/TopProductComponent";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";

const ProductPage = () => {
    return (
        <div className="product-page-container" style={{ height: "100vh", fontFamily: "var(--font-lexend)" }}>
            <PerfectScrollContainer>
                <BannerProductComponent />
                <TopProductComponent />
                <FooterComponent />
            </PerfectScrollContainer>
        </div>
    )
}

export default ProductPage;