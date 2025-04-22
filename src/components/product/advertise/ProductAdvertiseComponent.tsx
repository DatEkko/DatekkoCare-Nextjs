import Image from "next/image";
import "./ProductAdvertiseComponent.scss";
import imageSale from "@/assets/product/sale-image.png";

const ProductAdvertiseComponent = () => {
    return (
        <div className="product-advertise-component-container">
            <div className="container">
                <div className="content">
                    <div className="content-left">
                        <div className="main-text">
                            Cây cảnh chất lượng - Đẳng cấp tinh tế
                        </div>

                        <div className="sub-text">
                            Chuyên cung cấp cây kiểng cao cấp, đảm bảo uy tín, giá cả hợp lý, giao hàng tận nơi nhanh chóng!                        </div>
                    </div>

                    <div className="content-right">
                        <div className="image-ad">
                            <Image
                                src={imageSale}
                                alt=""
                                fill
                                quality={100}
                                className="ad"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdvertiseComponent;