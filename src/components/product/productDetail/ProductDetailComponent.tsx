"use client";
import { getProductByIdAction } from "@/app/action";
import "./ProductDetailComponent.scss";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
import RelatedProductComponent from "./RelatedProductComponent";

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

    const [count, setCount] = useState(1);

    const handleChangeInput = (value: string) => {
        if (value === "") {
            setCount(1);
            return;
        }
        const num = Number(value);
        if (!isNaN(num) && num >= 1) {
            setCount(num);
        }
    };

    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    return (
        <div className="product-detail-component">
            <div className="content">
                <div className="content-left">
                    <div className="image">
                        <img src={dataProduct?.image} alt="" />
                    </div>
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

                        <div className="counter">
                            <div className="btn decrease" onClick={decrease}> <FaMinus /> </div>
                            <input className="number" value={count} onChange={(event) => handleChangeInput(event?.target.value)} />
                            <div className="btn increase" onClick={increase}> <TiPlus /> </div>
                        </div>
                    </div>

                    <div className="btn-add-card">
                        <button>Thêm vào giỏ hàng <IoCart className="icon" /></button>
                    </div>

                    <hr></hr>
                    Hoặc
                    <div className="contact">
                        Vui lòng liên hệ: <b>0398960639</b> để đặt hàng
                    </div>
                </div>
            </div>

            <RelatedProductComponent dataProduct={dataProduct} />
        </div>
    )
}

export default ProductDetailComponent