import { useEffect, useState } from "react";
import "./RelatedProductComponent.scss";
import { getReleatedProductAction } from "@/app/action";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const RelatedProductComponent = (props: any) => {
    const router = useRouter();
    const { dataProduct } = props;
    const [dataRelated, setDataRelated] = useState<any>();

    const fetchDataProduct = async () => {
        if (dataProduct) {
            const res = await getReleatedProductAction(dataProduct);
            if (res && res.EC === 0) {
                setDataRelated(res.DT)
            }
        }
    }

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    useEffect(() => {
        if (dataProduct) {
            fetchDataProduct()
        }
    }, [dataProduct])

    const handleRedirectPage = (id: string) => {
        router.push(`/Products/product/${id}`)
    }

    return (
        <div className="related-product-container">
            <div className="title">
                Sản phẩm liên quan
            </div>
            <hr></hr>
            <div className="content">
                <div className="list-product">
                    {dataRelated && dataRelated.length > 0 &&
                        dataRelated.map((item: any, index: number) => {
                            return (
                                <div className="each-product-item" key={item.id} onClick={() => handleRedirectPage(item.id)}>
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
        </div>
    )
}

export default RelatedProductComponent;