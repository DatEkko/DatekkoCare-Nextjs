import FooterComponent from "@/components/footer/FooterComponent";
import ProductAdvertiseComponent from "@/components/product/advertise/ProductAdvertiseComponent";
import BannerProductComponent from "@/components/product/banner/BannerProductComponent";
import CategoryComponent from "@/components/product/category/CategoryComponent";
import CommonProductComponent from "@/components/product/productSection/CommonProductComponent";
import UncommonProductComponent from "@/components/product/productSection/UncommonProductComponent";
import TopProductComponent from "@/components/product/topProduct/TopProductComponent";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";

const ProductPage = () => {
    return (
        <div className="product-page-container" style={{ height: "100vh", fontFamily: "var(--font-lexend)" }}>
            <PerfectScrollContainer>
                <BannerProductComponent />
                <TopProductComponent />
                <CategoryComponent />
                <CommonProductComponent />
                <UncommonProductComponent />
                <CategoryComponent />
                <ProductAdvertiseComponent />
                <FooterComponent />
            </PerfectScrollContainer>
        </div>
    )
}

export default ProductPage;