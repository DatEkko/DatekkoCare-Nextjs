"use client";
import "./ProductItemPageComponent.scss";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductItemPageComponent = (props: any) => {
    const router = useRouter();
    const { dataProduct } = props;

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    // event delegation
    const handleRedirectPage = (event: React.MouseEvent<HTMLDivElement>) => {
        // Tìm phần tử button gần nhất từ event.target
        const button = (event.target as HTMLElement).closest(".view-detail button");
        if (button) {
            // Tìm phần tử .each-product-item chứa button
            const productItem = button.closest(".each-product-item");
            if (productItem) {
                const id = productItem.getAttribute("data-id");
                if (id) {
                    router.push(`/Products/product/${id}`);
                }
            }
        }
    };

    return (
        <div className="product-page-item-container">
            <div className="list-product" onClick={handleRedirectPage}>
                {dataProduct && dataProduct.length > 0 &&
                    dataProduct.map((item: any, index: number) => {
                        return (
                            <div
                                key={item.id}
                                className="each-product-item"
                                data-id={item.id}
                            >
                                <div className="img-product">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        quality={100}
                                        className="image"
                                    />
                                </div>

                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="price">
                                        <RiMoneyDollarCircleFill className="icon" /> {formatNumber(+item.price)}đ
                                    </div>
                                </div>

                                <div className="view-detail">
                                    <button>Xem chi tiết <FaSearch className="icon" /></button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ProductItemPageComponent;