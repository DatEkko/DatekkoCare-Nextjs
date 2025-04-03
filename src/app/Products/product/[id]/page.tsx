import FooterComponent from "@/components/footer/FooterComponent";
import ProductDetailComponent from "@/components/product/productDetail/ProductDetailComponent";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";

const DetailProductPage = () => {

    return (
        <div className="detail-product-container" style={{
            backgroundColor: "white", fontFamily: "var(--font-lexend)", height: "100vh"
        }}>
            <PerfectScrollContainer>
                <div className="container">
                    <ProductDetailComponent />

                </div>
                <FooterComponent />
            </PerfectScrollContainer>

        </div >
    )
}

export default DetailProductPage;