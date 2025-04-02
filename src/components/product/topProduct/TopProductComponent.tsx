import "./TopProductComponent.scss";
import cay_de_ban from "./../../../assets/product/cay-de-ban.jpg";
const TopProductComponent = () => {
    const arr = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="top-product-component-container">
            <div className="container">
                <div className="title">
                    Sản Phẩm Bán Chạy
                </div>

                <div className="top-product">
                    {
                        arr.map((item) => {
                            return (
                                <div className="each-product" key={item}>
                                    <img
                                        src={cay_de_ban.src}
                                        alt="Cây sân vườn"
                                        className="img-product"
                                    />
                                    <div className="text-product">
                                        <div className="name-product">
                                            Sản phẩm {item}
                                        </div>

                                        <div className="price">
                                            Giá: 20.000đ <button>Mua</button>
                                        </div>
                                    </div>

                                    <div className="badge">
                                        Top {item}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProductComponent;