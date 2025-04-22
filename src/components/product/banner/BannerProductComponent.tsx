import "./BannerProductComponent.scss";
import cay_de_ban from "./../../../assets/product/cay-de-ban.jpg";
import cay_ngoai_vuon from "./../../../assets/product/cay-ngoai-vuon.jpg";
import phan_bon from "./../../../assets/product/phan-bon.jpg";
import Image from "next/image";

const BannerProductComponent = () => {
    return (
        <div className="banner-product-component-container">
            <div className="container">
                <div className="card-product content-left">
                    <div className="text-product">
                        <div className="title">Cây <br></br>Để Bàn</div>
                        <div className="description">Tinh thần thoải mái</div>
                        <div className="btn-product">
                            <button className="btn">Xem thêm</button>
                        </div>
                    </div>
                    <div className="image-product">
                        <Image
                            src={cay_de_ban.src}
                            alt="Cây để bàn"
                            className="img-product"
                            fill
                            quality={100}
                        />
                    </div>
                </div>
                <div className="card-product content-center">
                    <div className="text-product">
                        <div className="title">Cây <br></br>Sân Vườn</div>
                        <div className="description">Làm mát tâm hồn</div>
                        <div className="btn-product">
                            <button className="btn">Khám phá</button>
                        </div>
                    </div>
                    <div className="image-product">
                        <Image
                            src={cay_ngoai_vuon.src}
                            alt="Cây sân vườn"
                            className="img-product"
                            fill
                            quality={100}
                        />

                    </div>
                </div>
                <div className="content-right">
                    <div className="image-product">
                        <Image
                            src={phan_bon.src}
                            alt="Cây sân vườn"
                            className="img-product"
                            fill
                            quality={100}
                        />
                    </div>

                    <div className="text-product">
                        <div className="title">PHÂN BÓN GIẢM 15%</div>
                        <div className="description">Áp dụng khi mua kèm sản phẩm cây xanh</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerProductComponent;