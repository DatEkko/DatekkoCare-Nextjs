"use client";
import "./ProductItemPageComponent.scss";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";


const ProductItemPageComponent = (props: any) => {
    const router = useRouter();
    const { dataProduct } = props;
    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    const handleRedirectPage = (id: string) => {
        router.push(`/Products/product/${id}`)
    }

    return (
        <div className="product-page-item-container">
            <div className="list-product">
                {dataProduct && dataProduct.length > 0 &&
                    dataProduct.map((item: any, index: number) => {
                        return (
                            <div key={item.id} className="each-product-item" onClick={() => handleRedirectPage(item.id)}>
                                <div className="img-product">
                                    <img src={item.image} alt="" />
                                </div>

                                <div className="info">
                                    <div className="name">
                                        {item.name}
                                    </div>

                                    <div className="price">
                                        <RiMoneyDollarCircleFill className="icon" /> {formatNumber(+item.price)}đ
                                    </div>
                                </div>

                                <div className="view-detail">
                                    <button>Xem chi tiết <FaSearch className="icon" /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductItemPageComponent;