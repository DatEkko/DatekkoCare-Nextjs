"use client";
import { getProductByIdAction } from "@/app/action";
import "./ProductDetailComponent.scss";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import RelatedProductComponent from "./RelatedProductComponent";
import Image from "next/image";

interface Params {
    [key: string]: string;
}
const ProductDetailComponent = () => {
    const params = useParams<Params>();
    const [dataProduct, setDataProduct] = useState<any>();

    const fetchDataProduct = async () => {
        const res = await getProductByIdAction(params.id);
        if (res && res.EC === 0) {
            setDataProduct(res.DT)
        }
    }

    useEffect(() => {
        fetchDataProduct()
    }, [])


    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    return (
        <div className="product-detail-component">
            <div className="content">
                <div className="content-left">
                    {dataProduct &&
                        <div className="image">
                            <Image
                                src={dataProduct.image}
                                alt=""
                                fill
                                quality={100}
                                className="image-production"
                            />
                        </div>
                    }

                </div>

                <div className="content-right">
                    <div className="name">
                        {dataProduct?.name}
                    </div>
                    <div className="line"></div>

                    <div className="description">
                        {dataProduct?.description}
                    </div>

                    <div className="buy">
                        <div className="price">
                            {formatNumber(+dataProduct?.price)}đ / <span style={{ fontSize: "0.8em", fontWeight: "400" }}>sản phẩm</span>
                        </div>
                    </div>

                    <div className="btn-add-card">
                        <button>Liên hệ để đặt hàng <IoCart className="icon" /></button>
                    </div>

                    <hr></hr>
                    Hoặc
                    <div className="contact">
                        Vui lòng liên hệ: <b>0398960639</b> để được tư vấn
                    </div>
                </div>
            </div>

            <RelatedProductComponent dataProduct={dataProduct} />
        </div>
    )
}

export default ProductDetailComponent